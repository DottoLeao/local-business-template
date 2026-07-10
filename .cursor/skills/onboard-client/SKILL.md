---
name: onboard-client
description: >-
  Popula data/business.config.ts a partir do HTML colado da página Google Maps
  (ou Google Business) de um negócio local. Use quando o usuário colar HTML do
  Maps, pedir para onboardar um cliente, ou configurar um novo negócio no template.
---

# Onboard Client — Google Maps HTML → business.config.ts

## Fluxo

1. Usuário cola o **HTML** (ou trecho relevante) da página Google Maps no chat.
2. Você extrai campos estruturados do HTML.
3. Você edita [`data/business.config.ts`](data/business.config.ts) com os dados.
4. Campos sem evidência no HTML ou que exigem voz humana ficam como `[TODO_HUMAN]`.
5. Você sugere uma paleta (theme) baseada no tipo de negócio — usuário confirma.
6. Você lista o que falta antes do deploy.

## O que extrair do HTML

| Campo BusinessConfig | Onde procurar no HTML |
|----------------------|------------------------|
| `name` | `<h1>`, `og:title`, JSON-LD `name` |
| `address` | endereço formatado, JSON-LD `address` |
| `phone` | `tel:` links, JSON-LD `telephone` |
| `whatsapp` | digitos do telefone (sem +/espaços, com country code 61) |
| `rating` | aria-label com "stars", JSON-LD `aggregateRating.ratingValue` |
| `reviewCount` | "reviews" count, JSON-LD `reviewCount` |
| `hours` | tabela/lista de horários, JSON-LD `openingHours` |
| `testimonials` | blocos de review (nome, texto, data, nota) — até 5 |
| `gallery` | URLs de imagens do negócio (preferir alta resolução) |
| `coordinates` | `@lat,lng` na URL, meta geo, JSON-LD `geo` |
| `placeId` | `ChIJ...` na URL ou data attributes |
| `mapsEmbedUrl` | construir embed a partir do place/address |
| `suburb` / `city` | parse do endereço (ex.: Mermaid Waters, Gold Coast) |

Também procurar `application/ld+json` com `@type` LocalBusiness / HairSalon / Restaurant / etc.

## Regras obrigatórias

- **NÃO invente** tagline, description, differentiators, preços de serviços ou SEO copy genérico.
- Use `[TODO_HUMAN]` (constante em `data/types.ts`) para esses campos.
- **NÃO** preencha com frases tipo "Committed to excellence" / "Your satisfaction is our priority".
- Remova reviews irrelevantes ou com menos de ~20 caracteres.
- Rejeite fotos claramente baixas (thumbnails minúsculos); marque gallery gaps como TODO se necessário.
- Após editar, rode mentalmente o checklist: rating > 0, phone/whatsapp, address, hours.

## Theme

Sugira `theme` com 6 hex + 2 fonts alinhados ao negócio real (ex.: salão costeiro ≠ clínica dental).
Evite: gradiente roxo-azul; cream+#terracotta genérico; Inter como única fonte.
Fonts sugeridas via Google Fonts names em `fontHeading` / `fontBody`.

## Saída ao usuário

Ao terminar, liste:

```
Extraído: name, address, phone, rating, N reviews, N fotos
TODO_HUMAN: tagline, description, differentiators, services/prices, seo
Próximo: confirmar paleta → preencher TODOs → npm run checklist
```
