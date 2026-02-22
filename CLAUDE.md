# CLAUDE.md - Reinhard Showcase Website

## Project
Public-facing property showcase for Reinhard von Hollander's real estate development business.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Deployed on Vercel (free tier)
- Contact form: currently simulated (swap in Formspree later)

## Commands
- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture
- App Router: pages in `src/app/`, components in `src/components/`
- Demo data: `src/data/properties.ts` with types in `src/data/types.ts`
- Utility functions: `src/lib/utils.ts`
- All images served via next/image from Unsplash (remote patterns in next.config.ts)

## Key Patterns
- Server components by default; only `"use client"` when needed (Navbar, FilterBar, PropertyGallery, ContactForm)
- Metadata exported per page for SEO
- `generateStaticParams` on [slug] pages for static generation
- Mobile-first responsive design with Tailwind breakpoints
- Tailwind v4 uses `@theme inline` in globals.css (not tailwind.config.ts)

## Color Palette
- Primary (navy): `#1B2A4A`
- Accent (gold): `#C8A962`
- Background: `#FAFAF8`
- Text: `#2D2D2D`

## Related Project
- Reinhard Project Tracker (private, Railway): internal CRUD app for managing properties
