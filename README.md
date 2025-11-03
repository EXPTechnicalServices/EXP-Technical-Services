# EXP Technical Services — Website

Vite + React + Tailwind static site. Deploys perfectly to **Vercel** free tier.

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
1. Create a **new GitHub repo** (e.g., `exp-technical-services`), push these files.
2. Go to **vercel.com** → *Add New Project* → Import your repo.
3. Vercel will auto-detect Vite.
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

Optional: add a custom domain in Vercel project settings.
