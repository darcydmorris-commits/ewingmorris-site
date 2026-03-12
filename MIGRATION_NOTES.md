# Migration Notes

## What Was Removed

The following legacy static prototype files were removed because they are no longer part of the current App Router implementation:

- `index.html`
- `about.html`
- `wealth-management.html`
- `activism-special-situations.html`
- `team.html`
- `insights.html`
- `careers.html`
- `contact.html`
- `legal.html`
- `styles.css`
- `script.js`

These files represented an earlier static prototype and were removed so the Next.js project is now the single source of truth.

## What Remains

The repository now contains only the current Next.js / TypeScript / Tailwind project structure:

- `app/`
- `components/`
- `content/`
- `public/`
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`
- `next-env.d.ts`
- `README.md`

## What Still Needs Verification

Once dependencies can be installed, verify the following first:

1. `pnpm install`
2. `pnpm dev`
3. `pnpm build`
4. `pnpm lint`
5. `pnpm typecheck`

## Highest-Risk Areas to Test First

- `app/layout.tsx`
  - Confirms App Router shell, metadata, and global CSS load correctly.
- `components/SiteHeader.tsx`
  - Confirms active navigation behavior and route linking.
- `components/ContactForm.tsx`
  - Confirms client-side form behavior and mailto submission in the browser.
- `app/page.tsx`
  - Confirms the homepage renders the main compositional system correctly.
- `app/legal/page.tsx`
  - Confirms placeholder legal/privacy language is acceptable for pre-review use only.
- `content/*`
  - Confirms content imports resolve cleanly and there are no typing mismatches.

## Environment Constraint During This Pass

Dependencies could not be installed in this environment because package-registry access is blocked, so compile-time validation has not yet been run.
