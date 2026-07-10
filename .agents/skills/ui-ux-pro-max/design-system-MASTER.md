# Design System: Salt & Strand Studio

Adapted from ui-ux-pro-max (--motion 8 --variance 8) + anti-slop coastal direction.
Rejected raw output (calendar blue + Kinetic Brutalism) as mismatched for colour salon.

## Pattern
Hero-Centric + Social Proof | CTA above fold

## Style
Motion-Driven + Kinetic Typography (hero) + Editorial Grid (sections)
NOT Kinetic Brutalism / acid yellow / neon

## Colors (coastal salt-washed)
| Role | Hex | Notes |
|------|-----|-------|
| Primary | `#0E2A2F` | Deep coastal ink |
| Secondary | `#5C6B66` | Driftwood grey-green |
| Accent | `#C45C4A` | Coral tip (single risk) |
| Background | `#F3F5F4` | Salt — fresh, not cream |
| Foreground | `#121A1B` | Near-black ink |
| Muted | `#D7E0DC` | Foam |

## Typography
- Heading: Fraunces (soft optical, hair/colour personality)
- Body: Figtree (clean, readable)
- Mood: editorial, coastal, premium

## Motion (tier 8)
- transform/opacity only
- duration: fast 200ms, reveal 500ms, complex ≤400ms enter
- stagger 40ms
- spring easing preferred
- Ken Burns + parallax on hero (GPU)
- prefers-reduced-motion respected
- No bounce/spin/GSAP Flip

## Anti-patterns
- Cream + terracotta AI cluster
- Purple-blue SaaS gradients
- Floating rating badge on hero
- Emoji icons, identical 3-col cards
