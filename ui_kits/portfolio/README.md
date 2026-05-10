# Portfolio UI Kit — Tom Huyghe

The portfolio is a single-page, dark, bilingual site. The kit recreates the surfaces a senior-engineer portfolio actually needs.

## Files

- `index.html` — the assembled page, with a working FR / EN toggle, language persistence in `localStorage`, and a smooth-scroll nav.
- `Nav.jsx` — sticky top nav, scroll-aware blur, language toggle.
- `Hero.jsx` — full-bleed dark hero with portrait + headline + dual CTA.
- `About.jsx` — short bio, location pin, status pill.
- `SkillsSplit.jsx` — two-column "Embedded vs Web" skill ledger.
- `ProjectCard.jsx` — single project card with texture hero, meta, summary, tag chips.
- `ProjectGrid.jsx` — staggered 60/40 desktop grid wrapping project cards.
- `Contact.jsx` — contact CTA with mail link + social row.
- `Footer.jsx` — single-line footer.
- `copy.js` — the FR / EN copy dictionary; the page reads from this.

## Audiences

The hero pivots between the two audiences subtly. There is no separate "for recruiters" / "for clients" route — instead, the project grid sorts MedTech projects first when the viewer landed via a recruiter source (e.g. `?from=linkedin-medtech`), and the skill ledger always shows both sides equally.

## What this kit deliberately doesn't include

- Blog / writing — Tom's writing surface is LinkedIn for now.
- Case-study deep dives — out of v1 scope; project cards link to GitHub or a one-paragraph modal.
- Dark/light toggle — dark only.
