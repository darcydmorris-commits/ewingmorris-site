# Ewing Morris Website

Production-oriented public website for Ewing Morris, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Repository Structure

- `app/`
  - Route entries for all public pages
  - `layout.tsx` for the shared shell and site metadata
  - `globals.css` for Tailwind import and shared visual tokens
- `components/`
  - Reusable presentation and layout components
- `content/`
  - CMS-ready content files for team members, strategies, insights, principles, and FAQs
- `public/`
  - Reserved for brand assets, imagery, downloadable files, and social metadata assets
- `package.json`
  - Project scripts and dependencies
- `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`
  - Framework and build configuration

## Pages Included

- `/`
- `/about`
- `/strategies`
- `/wealth-management`
- `/activism-special-situations`
- `/team`
- `/insights`
- `/careers`
- `/contact`
- `/legal`

## How to Run Locally

1. Ensure Node.js is installed.
2. Install dependencies:

```bash
corepack pnpm install
```

3. Start the development server:

```bash
corepack pnpm dev
```

4. Open `http://localhost:3000`.

## How to Build for Production

```bash
corepack pnpm build
corepack pnpm start
```

## How to Deploy

This project is structured for standard Next.js deployment targets including:

- Vercel
- Netlify
- self-hosted Node environments

## Where to Edit Copy and Content

- Page-level copy: `app/**/page.tsx`
- Shared navigation/footer copy: `components/SiteHeader.tsx`, `components/SiteFooter.tsx`
- Team content: `content/team.ts`
- Strategy content: `content/strategies.ts`
- Insight content: `content/insights.ts`
- Principles and FAQs: `content/firm.ts`

## How to Swap Placeholder Data

- Replace initials-based team placeholders in `components/TeamCard.tsx` with approved headshots from `public/`
- Replace sample insights in `content/insights.ts` with actual article metadata or CMS-fed content
- Replace placeholder legal/privacy language in `app/legal/page.tsx` after compliance review
- Add brand assets, portraits, PDFs, and Open Graph images to `public/`

## Suggested Next Steps

1. Install dependencies and run `pnpm dev`, `pnpm build`, `pnpm lint`, and `pnpm typecheck`.
2. Add approved brand assets and real team photography.
3. Replace the mailto-based consultation flow with a secure form handler or CRM integration.
4. Expand the legal page into final disclosure and privacy content after compliance review.
5. Add analytics, structured data enhancements, and final SEO assets.
6. Consider connecting the content files to a CMS such as Sanity, Contentful, or an MDX workflow.
