/*
  Ethio Journey — Supabase Schema
  Run this SQL in your Supabase project's SQL Editor.

  Prerequisites:
    - A Supabase project created at https://supabase.com
    - Connection string / API keys from Project Settings > API
*/

-- ─── Enable UUID extension ──────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Bookings table ──────────────────────────────────────────────────────
create table if not exists bookings (
  id            uuid           primary key default uuid_generate_v4(),
  name          text           not null,
  email         text           not null,
  phone         text,
  travel_date   date,
  guests        integer,
  tour_name     text,
  type          text           not null default 'tour'
                                check (type in ('tour', 'hotel', 'other')),
  requirements  text,
  status        text           not null default 'pending'
                                check (status in (
                                  'pending',    -- just submitted
                                  'viewed',     -- admin has looked at it
                                  'contacted',  -- admin reached out
                                  'quoted',     -- price sent to client
                                  'confirmed',  -- client confirmed & paid deposit
                                  'in_progress',-- trip is underway
                                  'completed',  -- trip finished
                                  'cancelled'   -- dropped / refunded
                                )),
  source        text           not null default 'website'
                                check (source in ('website', 'whatsapp', 'email', 'phone', 'ai_concierge')),
  notes         text,
  created_at    timestamptz    not null default now(),
  updated_at    timestamptz    not null default now(),
  viewed_at     timestamptz
);

-- ─── Indexes ─────────────────────────────────────────────────────────────
create index if not exists idx_bookings_status       on bookings (status);
create index if not exists idx_bookings_created_at   on bookings (created_at desc);
create index if not exists idx_bookings_email        on bookings (email);
create index if not exists idx_bookings_phone        on bookings (phone);

-- ─── Row Level Security ──────────────────────────────────────────────────
alter table bookings enable row level security;

-- Service role (server-side admin, full access)
create policy "service_role_full_access" on bookings
  for all
  using (auth.jwt() ->> 'role' = 'service_role')
  with check (auth.jwt() ->> 'role' = 'service_role');

-- Anon role (client-side — none, admin dashboard is server-side only)
create policy "anon_no_access" on bookings
  for all
  using (false)
  with check (false);

-- ─── Sample status transition helper (optional) ─────────────────────────
-- Returns the next logical status given a current status.
-- Usage: select next_booking_status('pending');
create or replace function next_booking_status(current_status text)
returns text
language sql
as $$
  select case current_status
    when 'pending'     then 'viewed'
    when 'viewed'      then 'contacted'
    when 'contacted'   then 'quoted'
    when 'quoted'      then 'confirmed'
    when 'confirmed'   then 'in_progress'
    when 'in_progress' then 'completed'
    else current_status
  end;
$$;

-- ─── Full audit log (optional but recommended for production) ───────────
create table if not exists booking_audit_log (
  id          uuid           primary key default uuid_generate_v4(),
  booking_id  uuid           not null references bookings(id) on delete cascade,
  action      text           not null,
  old_status  text,
  new_status  text,
  changed_by  text           not null default 'system',
  note        text,
  created_at  timestamptz    not null default now()
);

create index if not exists idx_booking_audit_booking_id on booking_audit_log (booking_id);
create index if not exists idx_booking_audit_created_at on booking_audit_log (created_at desc);

-- ─── RLS for audit log ────────────────────────────────────────────────────
-- Audit log is server-side only; anon has no access, service role has full.
alter table booking_audit_log enable row level security;

create policy "service_role_full_access_audit" on booking_audit_log
  for all
  using (auth.jwt() ->> 'role' = 'service_role')
  with check (auth.jwt() ->> 'role' = 'service_role');

create policy "anon_no_access_audit" on booking_audit_log
  for all
  using (false)
  with check (false);
