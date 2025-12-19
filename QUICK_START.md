# Quick Start Guide

## Get Your Portfolio Live in 5 Minutes

### Step 1: Local Development

```bash
cd portfolio-site
npm install
npm run dev
```

Visit http://localhost:3000 to see your site!

### Step 2: Add Your Images

1. Copy your portfolio images to `public/images/`:
   - `ynsgm-logo.png`
   - `inner-animal-logo.png`
   - `south-wind-logo.png`
   - `gorilla-logo.png`
   - `character-illustration.png`
   - `design-workspace.png`

2. See `public/images/README.md` for detailed image specifications

### Step 3: Customize Content

#### Update Contact Information

Edit `components/Footer.tsx`:
- Change email address
- Update social media links
- Modify footer text

Edit `app/contact/page.tsx`:
- Update contact email
- Modify form submission endpoint (if using a backend service)

#### Personalize About Page

Edit `app/about/page.tsx`:
- Update bio and story
- Adjust skills and percentages
- Modify design philosophy

#### Customize Services & Pricing

Edit `app/services/page.tsx`:
- Adjust pricing ranges
- Modify service packages
- Update features lists

### Step 4: Deploy to Vercel

#### Option A: Through Vercel Dashboard (Easiest)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

**That's it!** Your site is now live!

#### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

### Step 5: Add Custom Domain (Optional)

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your domain
3. Update DNS settings as instructed
4. SSL certificate is automatically generated

## Common Customizations

### Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  'neural-dark': '#0A0E17',      // Main background
  'brand-cyan': '#00B8E6',       // Primary accent
  'design-purple': '#8B5CF6',    // Secondary accent
  // Add your colors here
}
```

### Update Site Metadata (SEO)

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Graphic Designer",
  description: "Your custom description",
  // Add more SEO fields
};
```

### Modify Navigation Links

Edit `components/Navbar.tsx`:

```typescript
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add or remove links
];
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Run linter
npm run lint
```

## Troubleshooting

### Images Not Showing

- Ensure images are in `public/images/` directory
- File names are case-sensitive
- Check file extensions (png vs PNG)

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

## Next Steps

1. ✅ Replace placeholder images with your actual work
2. ✅ Update all text content to match your brand
3. ✅ Test on mobile devices
4. ✅ Set up analytics (Google Analytics, Vercel Analytics)
5. ✅ Add your real contact form backend (if needed)
6. ✅ Create a favicon (place in `public/favicon.ico`)
7. ✅ Test all links and functionality
8. ✅ Share your portfolio URL!

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Full Documentation**: See `README.md`

## Getting Help

- Check the detailed `README.md` for comprehensive documentation
- Review code comments in each component
- Consult the Next.js and Tailwind CSS documentation
- Join the Vercel Discord community

---

**Congratulations!** You now have a professional portfolio website ready to showcase your work! 🎉
