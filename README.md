# Ethio Journey — Luxury Travel & VIP Logistics Ethiopia

Elite private tours, VIP Land Cruiser rentals, and professional concierge services across Ethiopia. Built with Next.js 15, deployed on Vercel.

**Live:** [ethiojourney.pro.et](https://ethiojourney.pro.et)

---

## Quick Start

```bash
npm install
# Copy .env.local.example to .env.local and fill in your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## What's Included

| Section | Description |
|---|---|
| **Home** | Hero + brand narrative + service teasers + Danakil highlight |
| **Heritage** | Rock-hewn churches, Axum obelisks, Gondar castles, Harar walled city |
| **Tours** | 9 signature itineraries (Simien, Danakil, Lalibela, Axum, etc.) |
| **Fleet** | 7 luxury vehicles — Land Cruiser V8, bZ4X Electric, Presidential Limo, etc. |
| **Hotels** | 4 premium Addis Ababa hotels with detail views |
| **Services** | Car rental, airport transfer, corporate travel, expedition planning |
| **AI Concierge** | Gemini-powered chat assistant for itinerary planning (in production) |
| **Booking Flow** | Inquiry form → email + WhatsApp handoff |
| **Admin Dashboard** | Kanban-style booking management with status workflow |
| **Legal** | Privacy Policy, Terms of Service, Refund Policy, Booking Conditions |

---

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **React 19** + TypeScript (strict disabled for flexibility)
- **Tailwind CSS** + custom design system (dark luxury: `#0A0A0A` / `#D4AF37` / `#F15A24`)
- **Framer Motion** — scroll-triggered animations
- **Lenis** — smooth scrolling
- **Lucide React** — icons
- **Supabase** — booking persistence (server-side only)
- **Resend** — booking confirmation emails
- **Google Gemini 2.0 Flash Lite** — AI concierge

---

## Environment Variables

Create a `.env.local` file in the project root:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes* | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes* | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes* | Supabase service role key (server-only) |
| `RESEND_API_KEY` | Yes* | Resend API key for booking emails |
| `GEMINI_API_KEY` | Yes | Google Gemini API key for AI concierge |
| `NEXT_PUBLIC_SITE_URL` | No | Site URL for OG metadata (default: `https://ethiojourney.pro.et`) |
| `ADMIN_PASSWORD` | No | Admin dashboard password (default: `admin`) |
| `BOOKING_EMAIL` | No | Where booking emails are sent (default: `ethiojourney@gmail.com`) |

*\* Without Supabase/Resend credentials, the app still serves — booking persistence and emails gracefully degrade (logged to console).*

See [ENV_SETUP.md](./ENV_SETUP.md) for detailed setup instructions.

---

## Project Structure

```
ethio-journey/
├── app/
│   ├── api/           # API routes (chat, bookings)
│   ├── admin/         # Admin dashboard + auth
│   ├── components/    # Reusable UI components
│   ├── tours/         # Individual tour pages
│   ├── [page].tsx     # Route pages
│   ├── layout.tsx     # Root layout
│   └── globals.css    # Tailwind + custom CSS
├── components/        # Shared components (Navbar, Hero, Footer, etc.)
├── constants/         # Localization + data constants
├── lib/               # Supabase client, auth, database types
├── services/          # Gemini service
├── supabase/          # Schema SQL
├── ENV_SETUP.md       # Environment variable guide
└── README.md
```

---

## Deployment

**Vercel** (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments on push to `main`.

Set environment variables in the Vercel dashboard before deploying.

---

## Admin Access

1. Navigate to `/admin/login`
2. Enter the `ADMIN_PASSWORD` (default: `admin`)
3. You'll be redirected to `/admin/dashboard`

The admin session is stored in an httpOnly cookie, valid for 24 hours.

---

## Booking Status Flow

```
pending → viewed → contacted → quoted → confirmed → in_progress → completed
                                                                    ↓
                                                              cancelled
```

---

## License

© 2026 Ethio Journey Luxury Travel. All rights reserved.
