# VIMĀNA Collective

The VIMĀNA Collective website is a Next.js 14 storefront and brand site inspired by Sri Lankan heritage, craftsmanship, and thoughtful living.

## Getting started

Requirements:

- Node.js 18.17 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Serve the production build
```

## Project structure

- `src/app/` — Pages, layouts, metadata, sitemap, robots, and the contact API route
- `src/components/` — Reusable navigation, product, gallery, animation, and form components
- `src/config/site.ts` — Site name, contact links, URL, and navigation
- `src/data/products.ts` — Product catalogue, categories, availability, and display order
- `public/images/` — Brand and product images

The site currently includes:

- Home, Our Story, Collection, Heritage, and Contact pages
- Product detail routes at `/products/[slug]`
- Category and availability-aware product listings
- Responsive navigation and animated reveals using Framer Motion
- WhatsApp, Instagram, and Facebook contact links
- A contact form that sends email through Resend when configured, or opens WhatsApp as a fallback

## Customising the site

Before launch, update the placeholder values in [`src/config/site.ts`](src/config/site.ts), especially:

- `whatsappNumber` — international format, digits only
- `email` and `location` — optional values shown on the Contact page
- `url` — set `NEXT_PUBLIC_SITE_URL` to the production URL
- Instagram and Facebook links

Replace the sample entries in [`src/data/products.ts`](src/data/products.ts) with real products. Product images should live in `public/images/products/` and their paths should be added to each product's `images` array.

The story and heritage pages also contain clearly marked placeholder copy that should be replaced with approved brand text and photography.

## Contact email delivery

The contact API uses [Resend](https://resend.com/). Add these variables to `.env.local` for server-side email delivery:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=hello@example.com
CONTACT_FROM_EMAIL=VIMĀNA Website <website@example.com>
```

`CONTACT_FROM_EMAIL` must use a sender address or domain authorised in Resend. If these variables are not configured, submitting the form opens WhatsApp with the visitor's message instead.

## Deployment

Build locally before deploying:

```bash
npm run build
npm run start
```

The app can be deployed to any platform that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` and the Resend variables in the deployment environment, and keep secrets out of source control.

## Current limitations

- Products are maintained in TypeScript rather than through an admin dashboard or CMS.
- The catalogue and several brand sections still use sample or placeholder content.
- No checkout or payment flow is included.
