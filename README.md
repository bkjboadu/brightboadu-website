# Bright Boadu Portfolio

A production-ready personal portfolio for Bright Boadu built with Next.js 15, TypeScript, Tailwind CSS, App Router, Framer Motion, and Vercel-friendly defaults.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Contact form delivery

The contact form works locally without extra setup and can send real email in production when these Vercel environment variables are configured:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=hello@brightboadu.com
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Keep the default framework preset as `Next.js`.
4. Optionally add `RESEND_API_KEY` and `CONTACT_EMAIL` in Project Settings if you want the contact form to deliver email notifications.
5. Deploy.

## Notes

- Update `lib/site.ts` with final social links or contact email if needed.
- Replace the placeholder OG image in `public/og-image.png` with a real 1200x630 share image.
