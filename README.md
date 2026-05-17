# Rugved Bader — Robotics Portfolio

Personal portfolio website for Rugved Bader, a Robotics System Designer based in Leverkusen, Germany. Built with TanStack Start and deployed on Netlify.

## Stack

- **Framework**: TanStack Start (React 19, TanStack Router v1)
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4 + custom CSS (deep blue / neon-cyan palette)
- **Content**: Content Collections (type-safe markdown)
- **Deployment**: Netlify (with Netlify Forms for contact)

## Running Locally

```bash
npm install
npm run dev        # dev server at http://localhost:3000
```

Or with the Netlify CLI (recommended — enables Netlify Forms locally):

```bash
netlify dev        # http://localhost:8888
```

## Deploying to Netlify

1. Push the repository to GitHub / GitLab.
2. In the Netlify dashboard, create a new site from that repo.
3. Build command: `npm run build`
4. Publish directory: `dist/client`

Netlify Forms are configured on the `/contact` page — submissions appear in the Netlify dashboard under **Forms**.

## Content

All portfolio content lives in `/content/`:

| Folder        | What it holds                        |
|---------------|--------------------------------------|
| `jobs/`       | Work experience (markdown + frontmatter) |
| `education/`  | Education history                    |
| `projects/`   | Project showcase cards               |

Edit the `.md` files there to update resume or project data. The site rebuilds automatically on Netlify when changes are pushed.
