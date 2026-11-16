# Dr. Priyanka Gupta — Author Website

A responsive React and Vite website for Dr. Priyanka Gupta. The site includes a home page, book listing and detail routes, author biography, contact form, and custom not-found page.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Temporary Cloudflare Tunnel

To share the local Vite server publicly from Windows:

1. Install [`cloudflared`](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) and ensure it is available on `PATH`.
2. In the project directory, start Vite:

   ```powershell
   npm run dev -- --host 0.0.0.0
   ```

3. In a second terminal, start the temporary tunnel:

   ```powershell
   cloudflared tunnel --url http://localhost:5173
   ```

Use the generated `trycloudflare.com` URL while both terminals remain running. This quick tunnel is temporary; use a named tunnel and a Cloudflare-managed domain for a persistent deployment.

## Content to replace before launch

- Replace `public/images/author-placeholder.svg` with an approved author photograph, and update the image path in `src/data/author.js`.
- The supplied book covers are converted to WebP files in `public/images/books/` and referenced from `src/data/books.js`.
- Add approved book descriptions, categories, introductions, reading takeaways, and reasons to read in `src/data/books.js`.
- Add each verified Amazon URL to its book's `amazonUrl` in `src/data/books.js`. The purchase links remain inactive until then.
- Add the YouTube, LinkedIn, Instagram, and Facebook profile URLs in `src/data/socialLinks.js`.
- Add the professional email and WhatsApp number in `src/data/author.js`. The WhatsApp action uses the prefilled enquiry message stored alongside the number.
- Connect the contact form in `src/pages/Contact.jsx` to an approved email or backend service before accepting submissions. Until then, it validates fields locally and does not send or store messages.
- Replace `your-domain.example` in `public/robots.txt` and `public/sitemap.xml` with the production domain.

The book description, category, review, cover, profile, and contact details shown as placeholders are intentionally not invented.
