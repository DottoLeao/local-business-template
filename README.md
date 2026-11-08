<div align="center">

# Local Business Template

**A Next.js landing page for local businesses, driven by one typed config file per client.**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-2dbd82?style=flat-square&labelColor=0c0d0b)

</div>

## About

Sites for small local businesses are usually rebuilt from scratch for each client, and the copy often ends up generic. This template keeps the whole site in one typed config (`data/business.config.ts`), checks it against a Zod schema, and marks every field that needs a real person's voice with `[TODO_HUMAN]`, so a site cannot be delivered with placeholder copy. The default seed is a fictional salon on the Gold Coast, Australia.

## Features

- One config file per client: business data, services and prices, gallery, testimonials, opening hours, SEO and theme (colours and fonts)
- Sections: header, hero, about, services, gallery (carousel and lightbox), testimonials with Google rating, contact and location with a Maps embed, footer
- Contact form as a Server Action with Resend; without an API key it logs in development and points to WhatsApp in production
- Floating WhatsApp button
- SEO: `LocalBusiness` JSON-LD, sitemap, robots and a generated Open Graph image (`/api/og`)
- `validate:config` checks the schema and lists any `[TODO_HUMAN]` left; `checklist` runs the delivery checklist
- A Cursor skill (`.cursor/skills/onboard-client`) that fills the config from a Google Maps page's HTML, plus design rules in `.cursor/rules/`

## Tech stack

| Area | Choice |
|---|---|
| App | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS 4, shadcn/ui, Framer Motion, Embla Carousel, yet-another-react-lightbox |
| Validation | Zod |
| Email | Resend |
| Deploy | Vercel |

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev                 # http://localhost:3000
```

Environment variables:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `CONTACT_FROM`
- `NEXT_PUBLIC_SITE_URL`

Other scripts:

```bash
npm run validate:config     # schema + placeholder check
npm run checklist           # delivery checklist
npm run build
npm run lint
```

### New client

1. Copy the business's Google Maps page HTML and run the `onboard-client` skill in Cursor, or edit `data/business.config.ts` by hand.
2. Fill every `[TODO_HUMAN]` field: tagline, description, differentiators, services and prices, SEO.
3. Adjust `theme` to the real brand colours and fonts.
4. Run `npm run validate:config` and `npm run checklist`, then deploy.

## Project structure

```
app/                  page, layout, contact action, OG image route, sitemap, robots
components/sections/  Hero, About, Services, Gallery, Testimonials, ContactLocation, Footer
components/shared/    motion helpers, WhatsApp button, Google rating
components/seo/       JSON-LD
data/                 types, example seed and the active client config
lib/                  theme, config validation, motion
scripts/              validate-config and delivery-checklist
```

## Author

**Lorenzo Leão Dotto**, full-stack developer.

[![Portfolio](https://img.shields.io/badge/Portfolio-lorenzodotto.com.br-2dbd82?style=flat-square&labelColor=0c0d0b)](https://lorenzodotto.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lorenzodotto-2dbd82?style=flat-square&logo=linkedin&logoColor=white&labelColor=0c0d0b)](https://www.linkedin.com/in/lorenzodotto)
[![GitHub](https://img.shields.io/badge/GitHub-DottoLeao-2dbd82?style=flat-square&logo=github&logoColor=white&labelColor=0c0d0b)](https://github.com/DottoLeao)

## License

[MIT](LICENSE)
