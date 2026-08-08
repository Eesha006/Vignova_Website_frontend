# Vignova Marketing — Website

Official marketing site for Vignova Marketing. React + Vite + Bootstrap 5 + Framer Motion frontend, talking to the Spring Boot backend in the sibling `vignova-backend` project for booking and email automation.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:5173. Set `VITE_API_BASE_URL` in `.env` to wherever the backend is running (defaults to `http://localhost:8080/api`).

## Pages

- `/` — the homepage (Hero, Method, Services, Who We Work With, Elevate/Engage/Empower, consultation teaser)
- `/book` — the real booking flow: pulls open slots from `GET /api/slots`, books one via `POST /api/bookings`. This is where every "Book a Consultation" button in the site actually goes.
- `/admin` — where the founder opens up available time each day (token-gated, not linked from anywhere public). Posts to `POST /api/admin/availability`.

## Backend wiring

See `../vignova-backend/README.md` for the full setup (Gmail App Password, admin token, MySQL, persistent Google Meet link). In short:

```
GET  {VITE_API_BASE_URL}/slots                    → public, list of open slots
POST {VITE_API_BASE_URL}/bookings                 → public, { slotId, name, company, email, phone, industry }
POST {VITE_API_BASE_URL}/admin/availability        → requires X-Admin-Token header, { date, startTime, endTime }
```

Booking triggers a welcome email immediately; the backend's scheduled job sends the day-of and 1-hour-prior reminder emails automatically — nothing on the frontend needs to poll or trigger those.

## Client Portal

The "Client Login" button links out to `https://portal.vignovamarketing.in`, a separate application — no auth logic lives in this repo. That's a different system from the `/admin` token gate above, which only protects availability-setting.

## Structure

```
src/
  components/
    Navbar.jsx        sticky glass nav + client login + CTA
    Hero.jsx           problem-first headline, links to /book
    Philosophy.jsx      signature 7-stage growth-system pipeline
    Services.jsx        8 service offerings grid
    Audience.jsx        target industries
    BrandMeaning.jsx    Elevate / Engage / Empower, each pillar its own logo color
    CTA.jsx             consultation teaser, links to /book
    Footer.jsx           real contact details + socials
  pages/
    BookingPage.jsx      the actual slot-picker + booking form
    AdminPage.jsx         founder-only availability tool
  App.jsx                 routes: / , /book , /admin
  index.css               design tokens + global styles
  main.jsx
```

## Design system

- **Display type:** Fraunces (serif, used sparingly for headlines)
- **Body/UI type:** Inter
- **Data/label type:** IBM Plex Mono
- **Colors** — sampled from the real logo, not invented:
  - Ink `#0b1d35` (wordmark)
  - Blue `#0080d6` / `#0068af` — primary accent, leads everywhere
  - Green `#4ca321` — Engage-pillar accent only
  - Gold `#f5a623` — Empower-pillar accent only
- Dark/light sections alternate deliberately to create pacing down the page.
- All CSS custom properties are defined in `src/index.css`.
- Full rationale for every token lives in `Vignova_Marketing_Design_System.docx`.
