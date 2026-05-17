# AGENTS.md

Project architecture reference for AI agents working on this codebase.

## Project Overview

Personal robotics portfolio for **Rugved Bader** — Robotics System Designer, Leverkusen, Germany. Built with TanStack Start on Netlify.

## Tech Stack

| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Framework   | TanStack Start (React 19, TanStack Router v1) |
| Build       | Vite 7                                        |
| Styling     | Tailwind CSS 4 + custom CSS classes           |
| UI          | Radix UI primitives + custom components       |
| Content     | Content Collections (type-safe markdown)      |
| Deployment  | Netlify                                       |

## Directory Structure

```
content/
  jobs/           # Work experience markdown files
  education/      # Education markdown files
  projects/       # Project card markdown files
src/
  components/
    Nav.tsx       # Sticky navbar (client-side scroll + mobile hamburger)
    ui/           # Radix UI primitives (badge, card, etc.)
  routes/
    __root.tsx    # Root layout: Google Fonts, Nav, <main>
    index.tsx     # Home: hero + about + skills + CTA
    projects.tsx  # Project grid from content-collections
    resume.tsx    # Timeline-based resume from content-collections
    contact.tsx   # Netlify Forms contact page
  styles.css      # All CSS: design tokens, layout classes, animations
content-collections.ts  # Zod schemas for jobs, education, blog, projects
```

## Design Conventions

- **Color palette**: deep navy (`#080e24`), neon cyan (`#00e0ff`), white text.
- **Typography**: Poppins loaded via Google Fonts in `__root.tsx` head links.
- **CSS approach**: utility Tailwind classes where convenient; custom named CSS classes (`.hero`, `.section`, `.project-card`, etc.) defined in `styles.css` for complex layout/animation. Avoid inline styles for anything reused.
- **Animations**: CSS keyframes `fadeUp`, `float`, `pulse` — applied via `.animate-fade-up`, `.animate-fade-up-1` etc.

## Content Collections Schema

- `jobs`: `jobTitle`, `company`, `location`, `startDate`, `endDate?`, `summary`, `tags[]`
- `education`: `school`, `summary`, `startDate`, `endDate?`, `tags[]`
- `projects`: `title`, `description`, `tags[]`, `github?`, `liveUrl?`, `image?`

## Key Non-Obvious Decisions

- **No blog route on home**: The home page (`index.tsx`) is a full portfolio landing page (hero + about + skills + CTA), not a blog index.
- **Contact form**: Uses Netlify Forms via `data-netlify="true"` and a static `/contact.html` for form registration. Submissions appear in the Netlify dashboard.
- **Nav scroll detection**: `Nav.tsx` adds `.nav-scrolled` class after 20px scroll — applies blur + border via CSS.
- **Content sort order for jobs**: `resume.tsx` sorts jobs by `startDate` descending so the most recent appears first.

## Development Commands

```bash
npm run dev     # Vite dev server at :3000
netlify dev     # Full Netlify emulation at :8888 (recommended)
npm run build   # Production build → dist/client
```
