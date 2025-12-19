'use client';

import PricingCard from '@/components/PricingCard';
import { CheckCircle, Clock, Zap, Star } from 'lucide-react';

export default function Services() {
  const pricingPackages = [
    {
      title: 'Logo Design - Basic',
      priceRange: '$75 - $150',
      features: [
        '2-3 initial concepts',
        '2 rounds of revisions',
        'Final files in PNG & JPG',
        'Basic brand guidelines',
        '5-7 business day delivery',
      ],
    },
    {
      title: 'Logo Design - Standard',
      priceRange: '$200 - $350',
      features: [
        '4-5 initial concepts',
        '3 rounds of revisions',
        'All file formats (AI, EPS, PNG, SVG, JPG)',
        'Color & black/white versions',
        'Social media kit',
        'Brand style guide',
        '7-10 business day delivery',
      ],
      popular: true,
    },
    {
      title: 'Logo Design - Premium',
      priceRange: '$400 - $650',
      features: [
        'Unlimited concepts',
        'Unlimited revisions',
        'Complete file package',
        'Brand identity guide',
        'Business card design',
        'Social media templates',
        'Stationery mockups',
        'Priority support',
      ],
    },
    {
      title: 'Mini Brand Kit',
      priceRange: '$150 - $250',
      features: [
        'Simple logo design',
        'Color palette (3-5 colors)',
        'Font recommendations',
        'Basic usage guidelines',
        'Social media profile kit',
      ],
    },
    {
      title: 'Full Brand Identity',
      priceRange: '$500 - $1,200',
      features: [
        'Complete logo suite',
        'Comprehensive brand guidelines',
        'Color palette & typography system',
        'Business card & letterhead',
        'Social media templates',
        'Email signature design',
        'Brand pattern/texture library',
        'Marketing material templates',
      ],
      popular: true,
    },
    {
      title: 'Social Media - Single Post',
      priceRange: '$20 - $40',
      features: [
        '1 custom designed post',
        'Platform optimized sizing',
        '1 revision round',
        'Source files included',
        '24-48 hour delivery',
      ],
    },
    {
      title: 'Social Media - Carousel',
      priceRange: '$40 - $75',
      features: [
        '5-10 slide carousel design',
        'Cohesive visual flow',
        '2 revision rounds',
        'All slides in separate files',
        'Platform ready formats',
      ],
    },
    {
      title: 'Monthly Social Pack',
      priceRange: '$180 - $350',
      features: [
        '8-12 custom posts per month',
        'Mix of post types (single, carousel)',
        'Consistent brand styling',
        'Story template designs',
        '3 revision rounds',
        'Content calendar planning',
      ],
    },
    {
      title: 'Digital Flyer',
      priceRange: '$40 - $75',
      features: [
        'Custom flyer design',
        'Print & digital versions',
        '2 rounds of revisions',
        'High-resolution files',
        'Web-optimized version',
      ],
    },
    {
      title: 'Event Poster',
      priceRange: '$75 - $150',
      features: [
        'Eye-catching poster design',
        'Multiple size options',
        'Print-ready files (CMYK, 300 DPI)',
        'Digital versions for web',
        '3 revision rounds',
      ],
    },
    {
      title: 'Tri-Fold Brochure',
      priceRange: '$120 - $220',
      features: [
        'Professional brochure layout',
        '6-panel design (both sides)',
        'Custom graphics & layout',
        'Print-ready PDF',
        'Multiple revision rounds',
      ],
    },
    {
      title: 'Hero Banner Design',
      priceRange: '$50 - $100',
      features: [
        'Website hero section design',
        'Desktop & mobile versions',
        'Optimized file sizes',
        '2 revision rounds',
        '48-72 hour delivery',
      ],
    },
    {
      title: 'Full Website Visual Pack',
      priceRange: '$200 - $450',
      features: [
        'Hero banner',
        'Section backgrounds',
        'Icon set (10-15 icons)',
        'CTA button designs',
        'Image treatments',
        'Complete UI kit',
      ],
    },
    {
      title: 'Vector Illustration - Simple',
      priceRange: '$50 - $100',
      features: [
        'Simple vector illustration',
        'Basic detail level',
        '2 revision rounds',
        'AI & PNG files',
        'Commercial use rights',
      ],
    },
    {
      title: 'Detailed Illustration',
      priceRange: '$150 - $400',
      features: [
        'Complex, detailed artwork',
        'Character or scene illustration',
        'Multiple revision rounds',
        'All file formats',
        'Full commercial rights',
        'Multiple color variations',
      ],
    },
    {
      title: 'Simple Label Design',
      priceRange: '$60 - $120',
      features: [
        'Product label design',
        'Die-line setup',
        'Print-ready files',
        '2 revision rounds',
        'Multiple size variations',
      ],
    },
    {
      title: 'Full Packaging Layout',
      priceRange: '$150 - $400',
      features: [
        'Complete package design',
        'Box/container template',
        '3D mockups',
        'Print specifications',
        'Multiple variations',
        'Vendor-ready files',
      ],
    },
  ];

  const expectations = [
    {
      icon: CheckCircle,
      title: 'Professional Quality',
      description: 'Every project is crafted with attention to detail and industry-best practices.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Realistic timelines with consistent communication throughout the project.',
    },
    {
      icon: Zap,
      title: 'Responsive Communication',
      description: 'Quick responses to your questions and feedback during business hours.',
    },
    {
      icon: Star,
      title: 'Unlimited Support',
      description: 'Post-project support for file questions and minor adjustments.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text-purple">Services & Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver leading-relaxed">
              Transparent pricing for professional design services. Choose the package that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid - Logo Design */}
      <section className="section-container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Logo Design</h2>
          <p className="text-circuit-silver">Create a memorable brand identity that stands out.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPackages.slice(0, 3).map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>

      {/* Branding & Identity */}
      <section className="section-container bg-gradient-to-b from-transparent to-neural-slate/30">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Branding & Identity</h2>
          <p className="text-circuit-silver">Comprehensive brand systems that tell your story.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingPackages.slice(3, 5).map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>

      {/* Social Media Content */}
      <section className="section-container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Social Media Content</h2>
          <p className="text-circuit-silver">Engaging visuals that stop the scroll and build engagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPackages.slice(5, 8).map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>

      {/* Print Materials */}
      <section className="section-container bg-gradient-to-b from-transparent to-neural-slate/30">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Print Materials</h2>
          <p className="text-circuit-silver">Professional print designs that make a lasting impression.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPackages.slice(8, 11).map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>

      {/* Website Graphics */}
      <section className="section-container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Website Graphics</h2>
          <p className="text-circuit-silver">Web-optimized visuals that enhance user experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingPackages.slice(11, 13).map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>

      {/* Illustration & Packaging */}
      <section className="section-container bg-gradient-to-b from-transparent to-neural-slate/30">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Illustration & Packaging</h2>
          <p className="text-circuit-silver">Custom artwork and packaging that captures attention.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPackages.slice(13, 17).map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>

      {/* What Clients Can Expect */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">What Clients Can Expect</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            Working with me means partnering with a dedicated professional committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expectations.map((item) => (
            <div key={item.title} className="glass-card p-6 text-center hover:glow-effect transition-all duration-300">
              <item.icon className="w-12 h-12 text-design-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-circuit-silver text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-purple-pink opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-purple">Ready to Get Started?</span>
            </h2>
            <p className="text-circuit-silver text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and find the perfect package for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/portfolio" className="btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
