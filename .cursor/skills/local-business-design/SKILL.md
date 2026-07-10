---
name: local-business-design
description: >-
  Design system deste template de landing page para negócios locais: theme engine
  via business.config.ts, SectionShell, hierarquia de cards, e checklist
  agência-vs-template. Use ao implementar ou alterar UI, seções, tema ou layout.
---

# Local Business Design System

Complementa a skill global `frontend-design` (Anthropic) com as regras **deste** template.
Leia também `.cursor/rules/anti-slop-design.mdc`.

## Theme engine

Fonte da verdade: `data/business.config.ts` → `theme`.

1. Cores viram CSS vars via `lib/theme.ts` → `themeToCssVars()` no layout.
2. Classes Tailwind usam tokens: `bg-background`, `text-primary`, `bg-muted`, e vars `--business-*`.
3. Nunca hardcodar `#purple` / gradientes SaaS. Sempre do theme.

Fonts: carregar `theme.fontHeading` e `theme.fontBody` com `next/font/google` no `app/layout.tsx`.
Headings → `font-[family-name:var(--font-heading)]` / classe `font-heading`.
Body → `font-sans` ligado ao body font.

## Layout primitives

- `components/layout/SectionShell.tsx` — props: `id`, `background` (`default` | `muted` | `primary` | `inverse`), `align`, `overlap`, `className`.
- `components/layout/Container.tsx` — `width`: `narrow` | `default` | `wide` | `full`.

Cada seção **deve** usar combinação diferente de background + align + grid.

## Composição por seção

| Seção | Composição |
|-------|------------|
| Hero | Split ~60/40, imagem com overlap negativo, rating Google visível, CTA WhatsApp |
| About | Fundo muted, texto ~55% left, imagem offset vertical |
| Services | Bento / larguras variadas — nunca 3 cards iguais |
| Gallery | Masonry (CSS columns) + lightbox |
| Testimonials | Carousel full-width, quote tipográfico |
| Contact | Split mapa + form |

## Hierarquia de cards

- **Hero media**: sem card chrome (sem borda/sombra de card)
- **Service**: borda sutil OU fundo muted, radius moderado, imagem real
- **Testimonial**: tipografia de quote dominante, avatar pequeno, sem sombra pesada
- **Differentiator**: ícone Lucide + título concreto — sem emoji

## Motion

`ScrollReveal`: opacity + `translateY(16–20px)` max, duration ~0.5s, `prefers-reduced-motion` respeitado.
Hover: leve scale/opacity — nunca bounce.

## Checklist antes de commit de UI

- [ ] Cada seção tem composição distinta da anterior?
- [ ] Cores/fonts vêm do `theme`?
- [ ] CTA é específico ao negócio (não "Learn more")?
- [ ] Copy é factual (bairro, processo, especialidade)?
- [ ] Sem gradiente roxo-azul / emojis-ícone / grid 3×3 monótono?
- [ ] Mobile: WhatsApp FAB, menu, form usáveis?
