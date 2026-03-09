<img src="/public/cover.jpg" alt="Cover image for Amir Houshmand portfolio" width="100%" />

This repository contains Amir Houshmand's personal portfolio site, built with Next.js 15, React 19, Tailwind CSS v4, and Motion.

## Features

- One-page portfolio layout.
- Experience, skills, and project highlights.
- Responsive and accessible design.
- Static export ready for GitHub Pages.
- [Motion-Primitives](https://motion-primitives.com) for animated components.

## Getting Started

For detailed setup instructions, refer to the [Installation Guide](./INSTALLATION.md).

```bash
git clone https://github.com/ibelick/nim.git
cd nim
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

You can deploy your site to any hosting platform that supports Next.js. For the easiest deployment experience, consider using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fibelick%2Fnim&env=NEXT_PUBLIC_SITE_URL&project-name=nim&repository-name=nim&redirect-url=https%3A%2F%2Ftwitter.com%2Fibelick&demo-title=Nim&demo-description=Nim%20is%20a%20free%20and%20open-source%20minimal%20personal%20website%20template%20built%20with%20Next.js%2015%2C%20React%2019%2C%20and%20Motion-Primitives.&demo-url=https%3A%2F%2Fnim.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fibelick%2Fnim%2Frefs%2Fheads%2Fmain%2F.github%2Fassets%2Freadme.png&teamSlug=ibelick)

### GitHub Pages

This project is now configured for static export, so it can be deployed to GitHub Pages.

- Push the repository to GitHub.
- In GitHub, open `Settings -> Pages` and set `Source` to `GitHub Actions`.
- The included workflow will build the static site from `out/` and publish it automatically.
- If you use a custom domain, update `NEXT_PUBLIC_SITE_URL` in `.github/workflows/deploy.yml`.

#### Local preview of `out/`

```bash
npm run build
npm run preview:out
```

Then open `http://localhost:4321`.

## About

The site is configured as a static portfolio and can be deployed to GitHub Pages or any static hosting provider that supports Next.js export output.
