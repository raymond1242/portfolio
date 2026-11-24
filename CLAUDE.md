# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Raymond Negron (Software Engineer). Single-page Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS 4. Bootstrapped with `create-next-app`, deployed on Vercel. Site copy is in English. Requires Node.js 20.9 or later.

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
  - **`tailwind-animations` at an exact version.** It is midudev's animation plugin; the older `@midudev/tailwind-animations` name is deprecated and only re-exports it. Version 1.x is CSS-only and requires Tailwind 4.
- Turbopack rejects `.ico`/`.png` assets that are not RGBA. Re-encode one with `ffmpeg -i in.ico -pix_fmt rgba -c:v png -f ico out.ico`.
- `npm audit` without `--omit=dev` still reports moderate advisories in lint tooling (`typescript-eslint` → `minimatch`/`glob`). None of them ship to the site, and none has a non-breaking fix yet.

## Architecture

- **One page, many sections.** [src/app/page.tsx](src/app/page.tsx) renders `<Header />`, the hero section inline, and then `<Experience />`, `<Education />`, `<Projects />` and `<Skills />` in that order. [src/app/layout.tsx](src/app/layout.tsx) adds `<Footer />` and the Inter font, and sets the page `metadata`.
- **Section components live in `src/components/<Name>.tsx`** and are imported with the `@/components/...` alias. Keep them out of `src/app/`: any `page.tsx` there becomes a public route.
- **Content is hardcoded data inside each component.** To change portfolio content, edit the array at the top of the relevant component:
  - `experiences` in [Experience.tsx](src/components/Experience.tsx) (company, role, image, location, date, optional `tag`, description, technologies), newest first
  - `education` in [Education.tsx](src/components/Education.tsx)
  - `projects` in [Projects.tsx](src/components/Projects.tsx). Cards alternate image left/right based on the index's parity.
  - `skillCategories` in [Skills.tsx](src/components/Skills.tsx)
  - `navItems` in [Header.tsx](src/components/Header.tsx)
  - Hero text: inline in [src/app/page.tsx](src/app/page.tsx). Social links: in [Footer.tsx](src/components/Footer.tsx).
- **The CV is the source of truth for content.** The title, hero summary, experiences, education and project descriptions follow `public/cv/resume.pdf`. When the CV changes, also update the "Software Engineer" title, which appears in `Header.tsx`, the hero, `Footer.tsx` and `metadata` in `layout.tsx`. Dates use year ranges with an en dash, like the CV (`2026 – Present`). There is one deliberate exception, which is the owner's choice: the site also lists **Bluepoint AI** and **Bitmaker**, which the CV omits. Keep them when syncing with the CV.
- **Assets** are served from `public/`: images go in `public/images/{experience,projects,skills}/`, the profile photo is `public/images/me.webp`, and the downloadable CV is `public/cv/resume.pdf`, which the hero "Download CV" button links to. Reference them with absolute paths (`/images/...`).
- **Image conventions:** raster images are stored as WebP, pre-resized to about 2x their largest display size. They were converted with `cwebp` (`brew install webp`). Examples: `cwebp -q 82 -m 6 -resize 1600 0 in.png -o out.webp` for screenshots and `-q 90 -resize 160 0` for skill icons. Logos and icons that already exist as SVG stay SVG. Newer skill icons are [Simple Icons](https://simpleicons.org) SVGs (CC0), with the brand's hex color added as `fill` on the root `<svg>`. Simple Icons no longer carries AWS product logos such as DynamoDB. Experience images are screenshots of each company's website (1440px wide, `object-top` so the logo and header show). Every `next/image` that uses `fill` or a fluid width (`w-full`) needs an accurate `sizes` prop that matches its Tailwind layout. Without one, the browser downloads a viewport-wide image. Update `sizes` whenever a component's grid or padding changes. A fixed-size `next/image` (with `width`/`height` props) also needs matching size classes, as the skill icons have `w-10 h-10 object-contain`. Tailwind's preflight sets `img { height: auto }`, which resizes non-square images and triggers next/image's "width or height modified, but not the other" warning in dev.
- **In-page navigation:** section `id`s (`home`, `experience`, `education`, `projects`, `skills`) must match the `href`s in `navItems`. Navigation uses plain `<a href="#...">` anchors with no JS. "Home" is shown on desktop only, because on mobile the logo links home and dropping it keeps the nav on one line at 360px or wider. Smooth scrolling and the offset below the sticky header come from `scroll-behavior` and `scroll-padding-top` on `html` in [globals.css](src/app/globals.css): `4rem` on mobile, where the header's bottom edge sits at about 106px, and `2rem` on desktop, where it sits at about 74px. Re-check those values if the header's height changes.
- **Header style:** [Header.tsx](src/components/Header.tsx) is a floating frosted-glass bar. It is `sticky` with a `top`/`mt` offset, `bg-white/60` with `backdrop-blur-xl`, a subtle border and a soft shadow. It is a `rounded-full` pill on desktop and a two-row `rounded-2xl` card on mobile, because logo, name and nav don't fit on one row there. Its width is the viewport minus side margins, capped at `max-w-276` (69rem), so that with `lg:pl-6` the logo lines up with the sections' content edge. Nav links get a pill hover background on desktop. Below 360px the nav drops to 13px text to stay on one line. The whole page is Server Components; there are no client components.
- **Sticky header:** `<main>` must use `overflow-x-clip`, never `overflow-x-hidden`. `hidden` turns `<main>` into a scroll container, which silently disables `position: sticky` on the header. It would also break the scroll reveal animations, whose `view()` timeline tracks the nearest scroll container.
- **Animations** come from [tailwind-animations](https://github.com/midudev/tailwind-animations), imported in [globals.css](src/app/globals.css). They are pure CSS, with no JS and no client components. The hero animates on page load with `animate-fade-in-up` plus a `animate-delay-*` stagger, and the photo uses `animate-blurred-fade-in`. Below the hero, section titles, experience and project cards, education rows and skill columns use the custom `reveal` utility, defined once in `globals.css`. It is a scroll-driven animation (`animation-timeline: view()`), so its progress follows the scroll position, and an element fades back out if it leaves through the bottom of the viewport. Its range (`cover 0% cover 25%`) makes every element fully opaque before its top reaches the upper 60% of the viewport. Tune the effect in that one utility. In a custom utility, `animation-range` and `animation-delay` must come after the `animation` shorthand, which resets them. A global `prefers-reduced-motion: reduce` rule turns every animation off. Only the keyframes in use are emitted to the CSS bundle.
- **Visual checks:** Google Chrome is installed. Headless `--screenshot` ignores URL hashes, so to test anchor navigation or measure layout, drive Chrome with `playwright-core` (`executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`) against `npm run start`. Install it in a scratch directory, not in the project.
- **Icons** are inline SVG components in [icons.tsx](src/components/icons.tsx), with no icon library. Their paths come from Ant Design Icons (MIT), which the site used before. They render at `1em` in `currentColor`, so size and color come from `text-*` classes. They are `aria-hidden`, so a link that holds only an icon needs an `aria-label`, as in the footer. To add one, copy its single `<path>` from `@ant-design/icons-svg`. The shared `Icon` helper assumes that set's `64 64 896 896` viewBox. Images use `next/image`.

## Styling conventions

Styling is Tailwind utility classes only; there are no CSS modules or component libraries. Tailwind 4 is configured CSS-first: there is no `tailwind.config.ts`, Tailwind runs through `@tailwindcss/postcss` (see `postcss.config.js`), and it detects class names automatically in files that are not gitignored. The current look is minimalist and monochrome (the `feat: change style to a minimalist one` commit). Earlier commits used dark mode, glow and animated backgrounds; that style was removed on purpose. Motion stays subtle: entrance animations only, no looping or attention-grabbing effects. Match these existing patterns:

- Palette: white backgrounds with the `neutral-*` scale (`neutral-900` for headings, `neutral-400`/`500` for secondary text, `neutral-100` for borders and chips). Color is used sparingly for small icon accents only.
- Section shell: `py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto`, with a small uppercase label (`text-sm font-medium text-neutral-400 uppercase tracking-wider`) above an `h2` (`text-4xl lg:text-5xl font-bold text-neutral-900`).
- Cards: `rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-400/80 transition-all duration-300`.
- Tech tags: `rounded-full bg-neutral-100 text-neutral-600 text-xs` pills.
- Responsive design is mobile-first with the `lg:` breakpoint as the main desktop switch. Experience cards are a centered `flex-wrap`, half width at `md:` and one third at `lg:`, so an incomplete last row stays centered. At 768px three columns are too narrow, at 224px each. Skills use 2 columns at `sm:` and 4 at `lg:`, with `lg:gap-6`. A larger gap wraps "GitHub Actions" at 1024px. The site has been checked for no horizontal overflow from 320px to 1920px.
- [globals.css](src/app/globals.css) imports Tailwind and `tailwind-animations`. It also defines the `reveal` utility, the reduced-motion rule, the body colors, smooth scrolling with its header offset, and `::selection`.
- Tailwind 4 defaults the border color to `currentcolor` (v3 used `gray-200`), so always pair `border*`/`divide*` with a color class such as `border-neutral-100`.

## Known quirks

- Tailwind 4 utilities live in the `@layer utilities` cascade layer, and unlayered CSS always beats layered CSS, whatever its specificity. A third-party stylesheet that injects unlayered rules can silently override utilities. The old `@ant-design/icons` did this with `.anticon { color: inherit }`.

- [src/app/fonts.ts](src/app/fonts.ts) exports Roboto, Dosis and Poppins, but nothing imports them. Only Inter (from `layout.tsx`) is used.
- `sass` is not installed, so use plain CSS or Tailwind and do not add `.scss` files.

## Commits

Commit messages follow Conventional Commits: `feat:`, `fix:`, `perf:`, `refactor:`, `chore:` and `docs:`, with an optional scope such as `perf(images):`. Keep unrelated changes in separate commits.
