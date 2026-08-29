# Azimuth AI — website

A faithful rebuild of [azimuth-ai.com](https://azimuth-ai.com) (originally WordPress + Divi)
as a Next.js 15 App Router project, ready to deploy on Vercel.

Same pages, same slugs, same copy, same images, same colours and layout.

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
cd azimuth-web
vercel            # preview deploy
vercel --prod     # production deploy
```

### Option B — Git + Vercel dashboard

```bash
git init
git add .
git commit -m "Azimuth AI site"
git remote add origin <your-repo-url>
git push -u origin main
```

Then on vercel.com: **Add New → Project → Import** the repo. No build settings to change —
Vercel detects Next.js automatically (`npm run build`, output handled for you).

### Environment variables

Copy `.env.example` and set these in Vercel → Project → Settings → Environment Variables:

| Variable | What it is |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender address on your Resend domain |

Until all three are set the contact form still validates and returns success, and each
submission is written to the server log — so preview deploys work before mail is wired up.
Swapping Resend for SendGrid/Postmark/SES means changing one `fetch` call in
`src/app/api/contact/route.ts`.

### DNS cutover

The canonical URLs in `src/data/site.ts` (`SITE_URL`) are set to `https://azimuth-ai.com`.
Point the domain at Vercel when you are ready; nothing else needs to change.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node 18.18+ (Node 20+ recommended).

---

## Pages and slugs

Every URL matches the original site exactly. `trailingSlash: true` is on, so
`/about-us` 308-redirects to `/about-us/`, same as WordPress did.

| URL | Source |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/about-us/` | `src/app/about-us/page.tsx` |
| `/investors/` | `src/app/investors/page.tsx` |
| `/people/` | `src/app/people/page.tsx` |
| `/career/` | `src/app/career/page.tsx` |
| `/contact/` | `src/app/contact/page.tsx` |
| `/mid-level-soc-verification-engineer/` | `src/app/[slug]/page.tsx` + `src/data/jobs.ts` |
| `/embedded-firmware-architect/` | ″ |
| `/mid-level-soc-design-engineer/` | ″ |
| `/senior-embedded-software-engineer/` | ″ |
| `/system-of-chip/` | ″ |
| `/senior-analog-design-engineer/` | ″ |

Also generated: `/sitemap.xml`, `/robots.txt`, and a permanent redirect from the old
WordPress `/wp-sitemap.xml`.

---

## Project layout

```
src/
  app/
    layout.tsx            header + footer shell, fonts, favicons
    globals.css           design tokens + layout primitives (.row, .grid)
    page.tsx              home
    about-us/ investors/ people/ career/ contact/
    [slug]/               the six job-detail pages (statically generated)
    api/contact/route.ts  contact form handler
    sitemap.ts robots.ts
  components/             Header, Footer, PageHero, HomeSlider, LogoMarquee,
                          PersonCard, NewsCard, JobCard, JobBody, ContactForm
  data/                   site.ts, people.ts, news.ts, jobs.ts  ← all copy lives here
public/images/            41 images used by the site
assets/unused-from-zip/   the remaining images from the supplied zip (not shipped)
```

**All text content lives in `src/data/`.** Adding a news item, a team member or a job
posting is a data edit, not a template edit — a new entry in `src/data/jobs.ts`
automatically gets its own page and a card on `/career/`.

---

## Design tokens

Taken from the live site's computed styles, defined once in `src/app/globals.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--navy-900` | `#07071c` | header, PRODUCTS section |
| `--navy-850` | `#000026` | Our Mission, job-page body |
| `--navy-800` | `#07233a` | OUR FOCUS, NewsRoom |
| `--navy-700` | `#121228` | Partners, Careers list |
| `--navy-600` | `#171a2b` | About team section, dark headings |
| `--footer-blue` | `#003567` | footer |
| `--pink` | `#f45cb5` | primary accent |
| `--pink-alt` | `#ee4186` | PRODUCTS heading |
| `--gold` | `#dfb72c` | OUR FOCUS heading |
| `--red` | `#e43517` | About team heading |
| `--form-bg` | `#e6eff8` | contact form panel |

Typography is Poppins 300–800, body 14px / 1.7em, matching the original.

Breakpoints match Divi's: **≤980px** columns stack and the menu becomes a hamburger;
**≤767px** phone type scale. Content rows are `80%` wide, capped at 1080px
(1140px for page heroes, 1200px for the footer) — the same rule Divi used.

---

## Notes on fidelity

Three deliberate carry-overs from the original, kept because the brief was to
reproduce rather than redesign:

- The `<h1>` on the six job pages is dark navy (`#171a2b`) over a dark hero image, so it
  is nearly unreadable. That is the live site's styling. Change `variant="dark"` to
  `variant="pink"` in `src/app/[slug]/page.tsx` to fix it.
- Two investor logos (Moneta Ventures, Growth Factory) are dark artwork on a dark
  background and read as blank. Same on the original; white versions of those logos
  would fix it.
- The homepage copy says "Azimuth AI AI has reached a defining moment" — the doubled
  "AI" is in the original text and was left as-is.
