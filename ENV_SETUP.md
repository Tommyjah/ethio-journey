# Environment Variables

Set these in your `.env.local` file (local development) or in the Vercel dashboard
(Production / Preview). Never commit `.env.local` to git.

## Required — Supabase

Supabase is used to store booking records so the admin dashboard can track all
inquiries in one place.

| Variable                     | Where         | Description                                                       |
|------------------------------|---------------|-------------------------------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`   | Client + Server | Your Supabase project URL (e.g. `https://abc123.supabase.co`)   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client + Server | Anon key from Project Settings > API. Used for RLS.             |
| `SUPABASE_SERVICE_ROLE_KEY`  | Server only   | Service role key from Project Settings > API. Full DB access.   |

> ⚠️  `SUPABASE_SERVICE_ROLE_KEY` must NEVER be exposed to the browser. It is
> only used in Server Actions (`app/actions/bookings.ts`) and API routes.

## Required — Booking email (existing Resend integration)

| Variable             | Where    | Description                                      |
|----------------------|----------|--------------------------------------------------|
| `RESEND_API_KEY`     | Server   | Your Resend API key for sending booking emails.  |

## Optional — Admin dashboard auth

| Variable           | Where    | Description                                                    |
|--------------------|----------|----------------------------------------------------------------|
| `ADMIN_PASSWORD`   | Server   | Password to access `/admin`. Defaults to `admin` if unset.   |

## How to get Supabase credentials

1. Go to https://supabase.com and create a new project.
2. Open **Project Settings > API**.
3. Copy the **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`.
4. Copy the **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Copy the **service role** key → `SUPABASE_SERVICE_ROLE_KEY`.
6. Run the SQL in `supabase/schema.sql` in your project's SQL Editor.
7. Done — restart `npm run dev`.

## .env.local example

```env
NEXT_PUBLIC_SUPABASE_URL=https://abc123def.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
ADMIN_PASSWORD=change-me-to-something-secure
```
