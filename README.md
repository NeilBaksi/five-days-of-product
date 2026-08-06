# Five Days of Product

**Digital Product Management, one day at a time.**

A companion site for a five-day Digital Product Management course — the lecturer's
material, rewritten so anyone can pick up the fundamentals fast. Seven pages: an
overview, a frameworks reference, and one page per day of the course.

🔗 Live: https://neilbaksi.github.io/five-days-of-product/

## Stack

- **React 19** + **Vite 8** + **TypeScript** (strict)
- **Tailwind CSS v3** — design tokens in [`tailwind.config.ts`](./tailwind.config.ts)
- **react-router-dom** (HashRouter — deep-link safe on GitHub Pages)
- **framer-motion** for orchestrated motion · **lucide-react** for icons

## Design

MBS-inspired academic-corporate palette (deep royal blue + berry), authored in
OKLCH with neutrals tinted toward the brand hue. Light mode, editorial/Swiss layout,
Philosopher + Mulish + JetBrains Mono. Design brief in
[`.impeccable.md`](./.impeccable.md). WCAG 2.1 AA baseline throughout.

## Content is data

All copy lives in [`src/data/`](./src/data) — `nav.ts`, `frameworks.ts`, `days.ts`.
Pages render these shapes, so adding real lecture content means editing data, not JSX.
Empty slots are marked with a `<Placeholder>` block until real content lands.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/five-days-of-product/
npm run build    # tsc -b && vite build → dist/
npm run preview  # serve the production build
```

## Deploy

Pushes to `main` trigger [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml),
which builds and publishes `dist/` to GitHub Pages. Set the repo's **Pages → Source**
to **GitHub Actions** once.
