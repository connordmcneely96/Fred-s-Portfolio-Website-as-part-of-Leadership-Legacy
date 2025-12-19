# Graphic Designer Portfolio Website

A modern, professional portfolio website for a graphic designer, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, glassmorphic design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js App Router
- 🎭 Smooth animations and transitions
- 🖼️ Optimized image handling
- 📄 Multiple pages: Home, About, Portfolio, Services, Contact
- 🎯 SEO optimized
- 🌈 Custom color scheme and branding

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to `public/images/` directory (see `public/images/README.md` for details)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-site/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio page
│   ├── services/            # Services & Pricing page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── loading.tsx          # Loading state
├── components/              # Reusable components
│   ├── Footer.tsx           # Site footer
│   ├── Loading.tsx          # Loading spinner
│   ├── Navbar.tsx           # Navigation bar
│   ├── PricingCard.tsx      # Pricing package card
│   ├── ProjectCard.tsx      # Portfolio project card
│   ├── ServiceCard.tsx      # Service offering card
│   └── StatCard.tsx         # Statistics card
├── public/
│   └── images/              # Image assets
├── lib/                     # Utility functions (if needed)
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Pages

### Home (`/`)
- Hero section with CTA buttons
- Statistics cards
- Services overview
- Featured projects
- Design process timeline
- Call-to-action section

### About (`/about`)
- Designer bio and story
- Skills with progress bars
- Tools & software
- Design philosophy and values
- Professional background

### Portfolio (`/portfolio`)
- Category filtering (All, Logos, Branding, etc.)
- Project grid with hover effects
- Project cards with tags
- Responsive masonry layout

### Services (`/services`)
- Comprehensive pricing packages:
  - Logo Design (Basic, Standard, Premium)
  - Branding & Identity
  - Social Media Content
  - Print Materials
  - Web Graphics
  - Illustration & Packaging
- What clients can expect
- Service details and features

### Contact (`/contact`)
- Contact form with validation
- Project type selection
- Budget range selector
- Contact information
- Response time details
- Quick info sidebar

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  'neural-dark': '#0A0E17',
  'brand-cyan': '#00B8E6',
  'design-purple': '#8B5CF6',
  // Add your custom colors
}
```

### Content

Update the following files to customize content:

- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page bio and skills
- `app/services/page.tsx` - Pricing packages
- `components/Footer.tsx` - Footer links and social media
- `components/Navbar.tsx` - Navigation links

### Images

Place your images in `public/images/` and update references:

- Logo files: `ynsgm-logo.png`, `inner-animal-logo.png`, etc.
- Background images: `design-workspace.png`
- See `public/images/README.md` for complete list

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Your site will be live in minutes!

### Manual Deployment

Build for production:

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for environment variables (if needed):

```env
# Example: Email service API key
NEXT_PUBLIC_EMAIL_API_KEY=your_api_key_here
```

## Performance Optimization

- Images are automatically optimized by Next.js
- Lazy loading enabled on all images
- Code splitting with App Router
- CSS purged by Tailwind in production
- Optimized fonts with Next.js font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues:
- Check the documentation in each directory's README
- Review the code comments for implementation details
- Consult Next.js and Tailwind CSS documentation

## Acknowledgments

- Inspired by modern design trends and portfolio best practices
- Built with Next.js, React, and Tailwind CSS
- Icons from Lucide React

---

**Note**: Remember to replace placeholder images with your actual portfolio work for the best visual impact!
