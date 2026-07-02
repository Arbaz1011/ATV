# Adventure Wheels ATV – Lonavala

Premium cinematic website for **Adventure Wheels ATV Rides** in Atvan, Lonavala, Maharashtra.

- **Domain:** [adventurewheelsatv.com](https://adventurewheelsatv.com)
- **Instagram:** [@adventure_wheels_](https://www.instagram.com/adventure_wheels_/)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP (hero animations)
- Instagram Graph API (Meta-compliant)

## Quick Start

**Important:** If the project is in OneDrive (`Desktop\atv`), `npm install` often corrupts `node_modules`. Use the fix script first:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/fix-install.ps1
```

Or develop from a local copy (recommended):

```powershell
# One-time: install works reliably outside OneDrive
cd C:\dev\atv
npm install
npm run dev
```

Standard setup:

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### `Cannot find module ... next\dist\bin\next`

Your `node_modules` is incomplete (common on OneDrive). Run `scripts/fix-install.ps1` or move the project to `C:\Projects\atv` and run `npm install` again.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `INSTAGRAM_ACCESS_TOKEN` | Long-lived Meta user/page access token with `instagram_basic` |
| `INSTAGRAM_BUSINESS_ACCOUNT_ID` | Instagram Business Account ID (not username) |

### Instagram API Setup

1. Create a [Meta Developer](https://developers.facebook.com/) app.
2. Connect your Facebook Page to the Instagram Business account `@adventure_wheels_`.
3. Generate a long-lived access token with permissions: `instagram_basic`, `pages_show_list`.
4. Get the Instagram Business Account ID via Graph API Explorer:
   `GET /{page-id}?fields=instagram_business_account`
5. Add values to `.env.local` and Vercel project settings.

Without credentials, the gallery uses curated fallback images and still works.

## Deploy to Vercel

1. Push to GitHub.
2. Import project in [Vercel](https://vercel.com).
3. Add environment variables in Project Settings → Environment Variables.
4. Deploy.

## Project Structure

```
app/
  api/instagram/route.ts   # Meta Graph API proxy
  about|contact|experiences|gallery|home/
  layout.tsx, page.tsx, sitemap.ts, robots.ts
components/
  HeroSection, BookingModal, InstagramFeed, ...
lib/
  constants.ts, seo.ts, whatsapp.ts
```

## Booking Flow

The booking modal collects details and opens WhatsApp with a pre-filled message to **+91 9766045349** — no backend required.

## License

Private — Adventure Wheels ATV.
