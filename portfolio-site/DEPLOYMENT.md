# Deployment Guide

This guide covers deploying your portfolio website to Vercel and other platforms.

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio site"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio-site
   vercel
   ```

4. **Follow prompts** to configure your project

## Environment Variables

If you add any API integrations (email service, analytics, etc.), set environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add your variables:
   ```
   NEXT_PUBLIC_EMAIL_API_KEY=your_key_here
   CONTACT_FORM_ENDPOINT=your_endpoint_here
   ```

3. Redeploy for changes to take effect

## Custom Domain

### Add Custom Domain to Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Follow DNS configuration instructions
4. SSL certificate is auto-generated

### DNS Configuration

Point your domain to Vercel:

```
Type: CNAME
Name: www (or @)
Value: cname.vercel-dns.com
```

## Alternative Deployment Platforms

### Netlify

1. Connect your GitHub repo
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy

### AWS Amplify

1. Connect repository
2. Auto-detect Next.js settings
3. Deploy

### Self-Hosted (VPS/Cloud)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Compress all images in `public/images/`
   - Use WebP format when possible
   - Recommended: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

2. **Test Build Locally**
   ```bash
   npm run build
   npm start
   ```

3. **Check Bundle Size**
   ```bash
   npm run build
   # Review output for large bundles
   ```

### After Deploying

1. **Enable Analytics**
   - Vercel Analytics (built-in)
   - Google Analytics
   - Plausible Analytics

2. **Monitor Performance**
   - Use Lighthouse in Chrome DevTools
   - Check Core Web Vitals
   - Target scores: 90+ for all metrics

3. **Enable Caching**
   - Vercel handles this automatically
   - Ensure proper cache headers for static assets

## Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Production**: Push to `main` branch
- **Preview**: Push to any other branch

### Preview Deployments

Every pull request gets a unique preview URL:
```
https://portfolio-git-feature-branch-username.vercel.app
```

## Post-Deployment Checklist

- [ ] Site loads correctly on desktop and mobile
- [ ] All navigation links work
- [ ] Contact form submits (if connected to backend)
- [ ] Images load properly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (https://)
- [ ] SEO meta tags present
- [ ] Social media preview works
- [ ] Analytics tracking active
- [ ] Performance scores 90+ on Lighthouse

## Troubleshooting

### Build Fails

**Check Node Version**
```bash
node --version  # Should be 18+
```

**Clear Cache and Rebuild**
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `public/images/` directory
- Check file names match code references (case-sensitive)
- Verify image formats are supported (PNG, JPG, SVG, WebP)

### Slow Performance

- Optimize images (compress, resize)
- Check for large dependencies
- Enable Vercel Analytics to identify bottlenecks

## Updating Your Site

### Making Changes

1. Edit files locally
2. Test changes: `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
4. Vercel auto-deploys in ~1-2 minutes

### Rollback Deployment

In Vercel dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

## Monitoring

### Vercel Analytics

- Automatically tracks:
  - Page views
  - Performance metrics
  - Geographic distribution
  - Device types

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay

## Backup

### Regular Backups

1. Your code is backed up on GitHub
2. Vercel keeps all deployment history
3. Export Vercel project settings occasionally

### Data Backup

If you add a database or CMS later:
- Set up automatic backups
- Test restoration process
- Keep local development data synced

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Community**: Vercel Discord, Next.js GitHub Discussions

---

**Ready to deploy?** Just push to GitHub and connect to Vercel - your site will be live in minutes!
