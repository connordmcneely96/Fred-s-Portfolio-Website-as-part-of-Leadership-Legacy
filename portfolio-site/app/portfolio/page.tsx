'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

type Category = 'All' | 'Logos' | 'Branding' | 'Social Media' | 'Print' | 'Illustrations';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Logos', 'Branding', 'Social Media', 'Print', 'Illustrations'];

  const projects = [
    {
      title: 'YNSGM Luxury Brand',
      category: 'Logos' as const,
      image: '/images/ynsgm-logo.png',
      tags: ['Logo Design', 'Luxury Branding', 'Gold Foil'],
      description: 'Elegant luxury brand identity with gold shield emblem.',
    },
    {
      title: 'Inner Animal Activewear',
      category: 'Logos' as const,
      image: '/images/inner-animal-logo.png',
      tags: ['Logo Design', 'Sports', 'Modern'],
      description: 'Dynamic activewear brand with bold tiger imagery.',
    },
    {
      title: 'South Wind Hat Co.',
      category: 'Logos' as const,
      image: '/images/south-wind-logo.png',
      tags: ['Logo Design', 'Vintage', 'Apparel'],
      description: 'Rustic vintage logo for heritage hat company.',
    },
    {
      title: 'Minimalist Gorilla',
      category: 'Logos' as const,
      image: '/images/gorilla-logo.png',
      tags: ['Logo Design', 'Minimalist', 'Icon'],
      description: 'Clean, minimalist gorilla face logo design.',
    },
    {
      title: 'Character Illustration',
      category: 'Illustrations' as const,
      image: '/images/character-illustration.png',
      tags: ['Digital Art', 'Character Design', 'Illustration'],
      description: 'Whimsical character illustration with vibrant colors.',
    },
    {
      title: 'Tech Startup Branding',
      category: 'Branding' as const,
      image: '/images/design-workspace.png',
      tags: ['Brand Identity', 'Tech', 'Modern'],
      description: 'Complete brand identity package for innovative tech startup.',
    },
    {
      title: 'Instagram Content Pack',
      category: 'Social Media' as const,
      image: '/images/design-workspace.png',
      tags: ['Social Media', 'Instagram', 'Content'],
      description: 'Cohesive social media templates and post designs.',
    },
    {
      title: 'Event Poster Series',
      category: 'Print' as const,
      image: '/images/design-workspace.png',
      tags: ['Print Design', 'Poster', 'Event'],
      description: 'Eye-catching poster series for music event campaign.',
    },
    {
      title: 'Restaurant Menu Design',
      category: 'Print' as const,
      image: '/images/design-workspace.png',
      tags: ['Print Design', 'Menu', 'Restaurant'],
      description: 'Elegant menu design for upscale dining establishment.',
    },
    {
      title: 'Fitness Brand Identity',
      category: 'Branding' as const,
      image: '/images/design-workspace.png',
      tags: ['Branding', 'Fitness', 'Health'],
      description: 'Energetic brand identity for fitness coaching business.',
    },
    {
      title: 'LinkedIn Carousel Posts',
      category: 'Social Media' as const,
      image: '/images/design-workspace.png',
      tags: ['Social Media', 'LinkedIn', 'Professional'],
      description: 'Professional carousel designs for B2B content marketing.',
    },
    {
      title: 'Product Packaging',
      category: 'Print' as const,
      image: '/images/design-workspace.png',
      tags: ['Packaging', 'Product Design', 'Print'],
      description: 'Creative packaging design for organic skincare line.',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,184,230,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver leading-relaxed">
              A collection of work that showcases creativity, precision, and strategic design thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-container py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-brand text-white shadow-lg shadow-brand-cyan/30'
                  : 'bg-neural-slate text-circuit-silver hover:text-brand-cyan border border-circuit-silver/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-circuit-silver text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gradient-to-b from-transparent to-neural-slate/30">
        <div className="glass-card p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Start Your Project?</span>
          </h2>
          <p className="text-circuit-silver text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create designs that elevate your brand and captivate your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-primary">
              View Services & Pricing
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
