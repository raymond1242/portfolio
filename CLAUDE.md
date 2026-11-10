# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Raymond Negron (Software Developer). Single-page Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS 3. Bootstrapped with `create-next-app`, deployed on Vercel. Site copy is in English. Requires Node.js 20.9 or later.

## Commands

npm is the package manager (`package-lock.json` is committed).

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also type-checks)
npm run start    # serve the production build
npm run lint     # eslint . (flat config in eslint.config.mjs, eslint-config-next/core-web-vitals)
npm audit --omit=dev   # production dependency audit; it should report 0 vulnerabilities
```

There is no test framework. To verify a change, run `npm run lint` and `npm run build`.

## Next.js 16 and dependency constraints

- Next.js 16 differs from older versions you may know. Its docs ship with the package at `node_modules/next/dist/docs/`, so check them before using an unfamiliar API or config option.
- `AGENTS.md` is managed by Next.js. When an AI agent runs `next dev`, Next writes that file and restores it if it is removed. Commit it as-is and do not edit it. To stop Next from writing it, set `agentRules: false` in `next.config.mjs`.
- `next build` rewrites `tsconfig.json` (for example `jsx: react-jsx` and `.next/dev/types`). Keep those changes.
- Pinned on purpose:
  - **ESLint 9.x, not 10.** The plugins that `eslint-config-next@16` relies on (`eslint-plugin-react`, `jsx-a11y` and `import`) only support up to ESLint 9.
  - **`@ant-design/icons` 5.x, at 5.6 or later.** Version 5.3 and earlier fails type-checking with React 19. Version 6.x calls `createContext` at module load, which breaks the build in Server Components, and every component here is a Server Component.
- Turbopack rejects `.ico`/`.png` assets that are not RGBA. Re-encode one with `ffmpeg -i in.ico -pix_fmt rgba -c:v png -f ico out.ico`.
- `npm audit` without `--omit=dev` still reports moderate advisories in lint tooling (`typescript-eslint` → `minimatch`/`glob`). None of them ship to the site, and none has a non-breaking fix yet.

## Architecture

- **One page, many sections.** [src/app/page.tsx](src/app/page.tsx) renders `<Header />`, the hero section inline, and then `<Experience />`, `<Projects />` and `<Skills />` in that order. [src/app/layout.tsx](src/app/layout.tsx) adds `<Footer />` and the Inter font, and sets the page `metadata`.
- **Section components live in `src/components/<Name>.tsx`** and are imported with the `@/components/...` alias. Keep them out of `src/app/`: any `page.tsx` there becomes a public route.
- **Content is hardcoded data inside each component.** To change portfolio content, edit the array at the top of the relevant component:
  - `experiences` in [Experience.tsx](src/components/Experience.tsx) (company, role, image, location, date, optional `tag`, description, technologies)
  - `projects` in [Projects.tsx](src/components/Projects.tsx). Cards alternate image left/right based on the index's parity.
  - `skillCategories` in [Skills.tsx](src/components/Skills.tsx)
  - `navItems` in [Header.tsx](src/components/Header.tsx)
  - Hero text: inline in [src/app/page.tsx](src/app/page.tsx). Social links: in [Footer.tsx](src/components/Footer.tsx).
- **Assets** are served from `public/`: images go in `public/images/{experience,projects,skills}/`, the profile photo is `public/images/me.webp`, and the downloadable CV is `public/cv/resume.pdf`, which the hero "Download CV" button links to. Reference them with absolute paths (`/images/...`).
- **Image conventions:** raster images are stored as WebP, pre-resized to about 2x their largest display size. They were converted with `cwebp` (`brew install webp`). Examples: `cwebp -q 82 -m 6 -resize 1600 0 in.png -o out.webp` for screenshots and `-q 90 -resize 160 0` for skill icons. Logos and icons that already exist as SVG stay SVG. Every `next/image` that uses `fill` or a fluid width (`w-full`) needs an accurate `sizes` prop that matches its Tailwind layout. Without one, the browser downloads a viewport-wide image. Update `sizes` whenever a component's grid or padding changes.
- **In-page navigation:** section `id`s (`home`, `experience`, `projects`, `skills`) must match the `href`s in `navItems`. Navigation uses plain `<a href="#...">` anchors with no JS. Smooth scrolling and the offset below the sticky header come from `scroll-behavior` and `scroll-padding-top` on `html` in [globals.css](src/app/globals.css). The whole page is Server Components; there are no client components.
- **Icons** come from `@ant-design/icons`. `next.config.mjs` enables `optimizePackageImports` for it, so named imports are fine. Images use `next/image`.

## Styling conventions

Styling is Tailwind utility classes only; there are no CSS modules or component libraries. The current look is minimalist and monochrome (the `feat: change style to a minimalist one` commit). Earlier commits used dark mode, glow and animated backgrounds; that style was removed on purpose. Match these existing patterns:

- Palette: white backgrounds with the `neutral-*` scale (`neutral-900` for headings, `neutral-400`/`500` for secondary text, `neutral-100` for borders and chips). Color is used sparingly for small icon accents only.
- Section shell: `py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto`, with a small uppercase label (`text-sm font-medium text-neutral-400 uppercase tracking-wider`) above an `h2` (`text-4xl lg:text-5xl font-bold text-neutral-900`).
- Cards: `rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-400/80 transition-all duration-300`.
- Tech tags: `rounded-full bg-neutral-100 text-neutral-600 text-xs` pills.
- Responsive design is mobile-first with the `lg:` breakpoint as the main desktop switch (`md:` for 3-column grids).
- [globals.css](src/app/globals.css) only sets the body colors, smooth scrolling with its header offset, and `::selection`.

## Known quirks

- [src/app/fonts.ts](src/app/fonts.ts) exports Roboto, Dosis and Poppins, but nothing imports them. Only Inter (from `layout.tsx`) is used.
- `sass` is not installed, so use plain CSS or Tailwind and do not add `.scss` files.
- `metadata.description` in `layout.tsx` is still the create-next-app placeholder.

## Commits

Commit messages follow Conventional Commits: `feat:`, `fix:`, `perf:`, `refactor:`, `chore:` and `docs:`, with an optional scope such as `perf(images):`. Keep unrelated changes in separate commits.
