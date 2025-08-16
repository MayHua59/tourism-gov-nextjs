This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Deployment Guide


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
## 

Test Commit


## 2025-08-16 MOHT Dev Version

deployment 

```bash
pm2 start ecosystem.config.js --env production --env-file .env
```



### htaccess သာ ၇ေးမထားရင်

path လမ်းကြောင်းအတိအကျ

index.html အတိအကျ ထည့်မရေးရင် 

Forbidden ပဲ ပြမယ်။


```
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Disable default cPanel PHP index handling
    DirectoryIndex disabled

    # Force HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    

    # Proxy requests for tourism.gov.mm to Next.js on port 3001
    RewriteCond %{HTTP_HOST} ^dev\.tourism\.gov\.mm$ [NC]
    RewriteRule ^(.*)$ http://127.0.0.1:3002/$1 [P,L]
    
</IfModule>

# --- ACME DCV bypass (Let's Encrypt) ---
RewriteEngine On
RewriteRule ^\.well-known/acme-challenge/ - [L]
# ---------------------------------------

# php -- BEGIN cPanel-generated handler, do not edit
# Set the “ea-php82” package as the default “PHP” programming language.
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php82 .php .php8 .phtml
</IfModule>
# php -- END cPanel-generated handler, do not edit
````




## Learn More

## Another Commit

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
