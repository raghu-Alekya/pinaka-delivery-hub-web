# Pinaka Delivery Hub Website

React (Vite) single-page site for Pinaka Delivery Hub: homepage, about, features, contact, login, and registration.

## Requirements

- Node.js 20 or later
- npm
- Git

## Work on your local machine

### 1. Clone the repository

```bash
git clone https://github.com/<YOUR_GITHUB_USER>/pinaka-delivery-hub-website.git
cd pinaka-delivery-hub-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Edits under `src/` reload automatically.

### 4. Project layout

| Path | Purpose |
| --- | --- |
| `src/App.jsx` | Routes |
| `src/components/Header.jsx` | Shared header |
| `src/components/Footer.jsx` | Shared footer |
| `src/components/Layout.jsx` | Header + page + footer |
| `src/pages/` | Home, About, Features, Contact, Login, Register |
| `public/css/style.css` | Site styles |
| `public/assets/` | Images (hero, logos, screenshots) |

Put images in `public/assets/` so they are available as `/assets/filename` in the browser.

### 5. Production build (local check)

```bash
npm run build
npm run preview
```

`npm run build` writes static files to `dist/`. `npm run preview` serves that folder so you can verify the production bundle before upload.

## Deploy to your server

This app is a **static SPA**. The server only needs to serve files. Do not run `npm run dev` on the server.

### 1. Build on your local machine

```bash
npm run build
```

Upload the **contents** of `dist/` (not the `dist` folder name itself) to the web root, for example:

- Apache/cPanel: `public_html/`
- Nginx: `/var/www/your-site/`

Typical files:

- `index.html`
- `assets/*.js` (hashed bundle)
- `css/style.css`
- `favicon.svg`
- `.htaccess` (Apache rewrite for React Router)

Also copy images into the server `assets/` folder if they are not already there (`public/assets/` on your machine).

### 2. Apache (FTP / cPanel)

1. Connect with FTP or File Manager.
2. Upload everything inside `dist/` into `public_html`.
3. Confirm `.htaccess` is present so `/about`, `/login`, and other routes work on refresh.

The included `.htaccess` sends unknown paths to `index.html`. `mod_rewrite` must be enabled.

### 3. Nginx

Set the site root to the uploaded files and use:

```nginx
server {
  listen 80;
  server_name your-domain.com;
  root /var/www/your-site;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

Reload Nginx after saving the config.

### 4. After each code change

On your local machine:

```bash
npm run build
```

Upload the new `dist/` files again. The JavaScript filename changes when the code changes, so replace old hashed files in `assets/`.

### 5. Subfolder deploy

If the site is not at the domain root (for example `https://example.com/pinaka/`), set Vite `base` in `vite.config.js` before building:

```js
export default defineConfig({
  plugins: [react()],
  base: '/pinaka/',
})
```

Then run `npm run build` and upload into that subfolder.

## Notes

- Login and register forms are UI only until a backend API is connected.
- Do not put PostgreSQL credentials or the database IP in this frontend. The browser should call an API; the API server talks to PostgreSQL.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production files in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
