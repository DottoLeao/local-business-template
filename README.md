# Local Business Landing Page Template

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Template Next.js para sites de negócios locais. Um arquivo de config por cliente, design anti-"IA slop", e onboarding via Cursor a partir do HTML do Google Maps.

> Seed padrão: **Salt & Strand Studio** (Mermaid Waters, Gold Coast).

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4** + shadcn/ui
- Framer Motion, Embla Carousel, yet-another-react-lightbox
- Resend (formulário de contato)
- Deploy: Vercel

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Config do cliente

Tudo vive em [`data/business.config.ts`](data/business.config.ts).

| Arquivo | Função |
|---------|--------|
| [`data/types.ts`](data/types.ts) | Schema TypeScript |
| [`data/business.example.ts`](data/business.example.ts) | Seed Gold Coast |
| [`data/business.config.ts`](data/business.config.ts) | Cliente ativo |

Campos que exigem voz humana usam `[TODO_HUMAN]` — nunca preencha com copy genérico.

## Onboard de um cliente novo

1. Abra a página Google Maps do negócio → copie o HTML (ou trecho relevante).
2. No Cursor, cole o HTML e peça para onboardar (skill `onboard-client`).
3. O agente atualiza `business.config.ts` e deixa `[TODO_HUMAN]` onde falta voz humana.
4. Preencha tagline, description, differentiators, serviços/preços, SEO.
5. Ajuste `theme` (cores + fonts) à identidade real.
6. Rode:

```bash
npm run validate:config
npm run checklist
```

## Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Dev server |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `npm run validate:config` | Valida schema + placeholders |
| `npm run checklist` | Checklist de entrega |

## Variáveis de ambiente

Copie [`.env.example`](.env.example) para `.env.local`:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
CONTACT_FROM=Contact Form <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.au
```

Sem `RESEND_API_KEY`, o formulário loga no console em desenvolvimento e sugere WhatsApp em produção.

## Skills / rules do projeto

- `.cursor/skills/onboard-client` — HTML Maps → config
- `.cursor/skills/local-business-design` — theme + composição de seções
- `.cursor/rules/anti-slop-design.mdc` — anti-padrões de IA
- Skill global recomendada: `frontend-design` (Anthropic)

## Checklist de entrega

- [ ] HTML/Maps processado; Place ID / endereço / horários ok
- [ ] Nenhum `[TODO_HUMAN]` restante
- [ ] Paleta e fonts alinhados à marca
- [ ] Fotos com qualidade aceitável
- [ ] Reviews curtas/irrelevantes removidas
- [ ] Formulário testado (ou WhatsApp como canal principal)
- [ ] SEO: title, description, OG (`/api/og`), favicon
- [ ] Mobile: menu, FAB WhatsApp, form
- [ ] Deploy Vercel + domínio do cliente

## Estrutura

```
app/                  # page, layout, actions, api/og
components/sections/  # Hero, About, Services, Gallery, …
components/layout/    # SectionShell, Container
data/                 # business.config.ts
lib/                  # theme, validate-config
.cursor/skills/       # onboard-client, local-business-design
```

## License

[MIT](LICENSE)
