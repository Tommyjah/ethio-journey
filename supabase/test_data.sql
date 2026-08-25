-- Ethio Journey — Test Data for bookings table
-- Run this in your Supabase SQL Editor after applying the schema.
-- Covers all statuses, sources, types, and edge cases.

insert into bookings (name, email, phone, travel_date, guests, tour_name, type, requirements, status, source, notes)
values
-- 1. Pending — website tour inquiry
('Solomon Bekele', 'solomon@example.com', '+251911111111', '2026-11-15', 4, 'Simien Mountains Trek', 'tour', 'Vegetarian meals required. One participant uses a wheelchair — need accessible trail info.', 'pending', 'website', null),

-- 2. Pending — WhatsApp hotel booking
('Amina Hussien', 'amina.h@gmail.com', '+251941222333', '2026-10-20', 2, 'Skylight Hotel Addis', 'hotel', 'Late arrival — check-in after 22:00. Two connecting rooms preferred.', 'pending', 'whatsapp', null),

-- 3. Viewed — email inquiry (admin has seen it)
('Daniel Tefera', 'daniel.t@outlook.com', '+251903444555', '2027-01-10', 6, 'Danakil Depression Expedition', 'tour', 'Group of 6. Need permits for Erta Ale. Budget-conscious — looking for shared transport.', 'viewed', 'email', 'Follow up by 15 Sep. Group discount may apply.'),

-- 4. Contacted — AI Concierge generated lead
('Ruth Bekele', 'ruthb@yahoo.com', null, '2026-12-01', 3, 'Lalibela Rock-Hewn Churches', 'tour', 'Flying from USA — need airport transfer from Lalibela airport. Prefer early morning flights.', 'contacted', 'ai_concierge', 'Customer reached via WhatsApp after AI concierge chat. Timezone: EST.'),

-- 5. Quoted — phone inquiry
('Kidus Gebremichael', 'kidus.g@gmail.com', '+251911999888', '2026-10-05', 2, 'Harar Jugol + Dire Dawa', 'tour', 'Combining Harar and Dire Dawa. Need private car for 5 days.', 'quoted', 'phone', 'Quoted ETB 45,000 per person. Awaiting response.'),

-- 6. Confirmed — website, paid deposit
('Selamawit Tadesse', 'selam@ethiojourney.pro', '+251921333444', '2026-09-25', 5, 'Axum & Yeha Day Trip', 'tour', 'Family group. Interested in King Kaleb legacy. Child (age 8) travelling — need child-friendly guide.', 'confirmed', 'website', 'Deposit of ETB 15,000 received via CBE mobile banking. Remaining balance due 20 Sep.'),

-- 7. In Progress — confirmed trip currently underway
('Messeret Fikadu', 'messeret.f@gmail.com', '+251941777666', '2026-08-18', 3, 'Bale Mountains & Rift Valley', 'tour', 'Photography group — need camera-friendly stops. One member allergic to sulfa drugs.', 'in_progress', 'whatsapp', 'Trip started 16 Aug. Allocating Goba camp for 2 nights. Guide: Abebe.'),

-- 8. Completed — finished trip
('Henok Assefa', 'henok.assefa@t-online.de', '+251912111222', '2026-07-30', 8, 'Custom Addis Ababa City Tour', 'tour', 'Corporate group visiting from Germany. Need English-speaking guide, lunch included, Minilik II monument and National Museum.', 'completed', 'email', 'Trip completed 30 Jul. Overall rating: excellent. Guide Abebe received 5-star feedback. Invoice settled in full.'),

-- 9. Cancelled — dropped by customer
('Tigist Bekele', 'tigist.b@gmail.com', '+251931222111', '2026-10-12', 1, 'Elephant Rock & Ziway Lake', 'tour', 'Solo traveller. Flexible dates.', 'cancelled', 'website', 'Cancelled 2 Aug. Reason: change of travel plans. Full refund processed via Resend.'),

-- 10. Pending — other type (corporate event)
('Ethio Telecom HR Dept', 'hr@ethiotelecom.et', '+251111234567', '2026-11-30', 25, 'Team Building Retreat — Bishoftu', 'other', 'Corporate group of 25. Need conference facility, team activities, accommodation for 2 nights. Budget: ETB 200,000.', 'pending', 'email', 'Request from HR manager. Needs formal quote with breakdown by day. Corporate discount applicable.'),

-- 11. Quoted — hotel, large group
('Heritage Hotels plc', 'events@heritageet.com', '+251115555123', '2027-02-14', 40, 'Gloria Palace & Apartments', 'hotel', 'Wedding reception + 2 nights accommodation for 40 guests. Need ballroom, catering (4 courses), DJ, car park for 20 vehicles.', 'quoted', 'phone', 'Site visit scheduled 5 Sep. Deposit required 30 days before event. Quote sent: ETB 85,000 total.'),

-- 12. Contacted — AI Concierge lead for hotel
('Lidetu Abera', 'lidetu.aber@gmail.com', '+251903111222', '2026-12-20', 2, 'Jal Hotel Addis', 'hotel', 'Business trip — need room with workstation, high-speed WiFi, late checkout flexibility.', 'contacted', 'ai_concierge', 'Inbound from China. Needs Chinese-speaking staff if available. Visa on arrival arranged.');
