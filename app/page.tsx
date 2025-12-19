'use client';

import Link from 'next/link';
import {
  Briefcase,
  Users,
  Clock,
  Award,
  Palette,
  Share2,
  Printer,
  Image as ImageIcon,
  Edit,
  Type,
  ArrowRight
} from 'lucide-react';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Briefcase },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Fast Turnaround', icon: Clock },
  ];

  const services = [
    {
      title: 'Brand Identity & Logo Design',
      description: 'Create memorable brand identities that capture your essence. From conceptual logos to complete visual systems.',
      icon: Palette,
    },
    {
      title: 'Social Media Content',
      description: 'Eye-catching social media graphics that stop the scroll. Posts, stories, and carousels designed to engage.',
      icon: Share2,
    },
    {
      title: 'Print Design',
      description: 'Professional print materials including business cards, flyers, posters, and brochures that make an impact.',
      icon: Printer,
    },
    {
      title: 'Web Graphics & UI Elements',
      description: 'Modern web graphics, banners, and UI components that enhance user experience and brand consistency.',
      icon: ImageIcon,
    },
    {
      title: 'Photo Editing & Retouching',
      description: 'Professional photo enhancement, color correction, and creative manipulation for stunning visual results.',
      icon: Edit,
    },
    {
      title: 'Typography & Layout Design',
      description: 'Beautiful typography and layout design for publications, presentations, and digital content.',
      icon: Type,
    },
  ];

  const featuredProjects = [
    {
      title: 'YNSGM Luxury Brand',
      category: 'Logo Design',
      image: '/images/ynsgm-logo.png',
      tags: ['Branding', 'Luxury', 'Gold'],
    },
    {
      title: 'Inner Animal Activewear',
      category: 'Sports Branding',
      image: '/images/inner-animal-logo.png',
      tags: ['Logo', 'Fitness', 'Modern'],
    },
    {
      title: 'South Wind Hat Co.',
      category: 'Vintage Branding',
      image: '/images/south-wind-logo.png',
      tags: ['Logo', 'Vintage', 'Apparel'],
    },
    {
      title: 'Character Illustration',
      category: 'Digital Art',
      image: '/images/character-illustration.png',
      tags: ['Illustration', 'Digital', 'Character'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Understand the Brand',
      description: 'Deep dive into your vision, values, and target audience to create designs that truly represent your brand.',
    },
    {
      step: '02',
      title: 'Develop Concepts',
      description: 'Brainstorm and sketch multiple creative concepts, exploring different visual directions and styles.',
    },
    {
      step: '03',
      title: 'Refine Visual Direction',
      description: 'Collaborate with you to refine the chosen concept, perfecting every detail for maximum impact.',
    },
    {
      step: '04',
      title: 'Deliver Final Assets',
      description: 'Provide polished, production-ready files in all formats you need, with full usage rights.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,184,230,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 section-container text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">Graphic Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver mb-8 max-w-3xl mx-auto leading-relaxed">
              Specializing in <span className="text-brand-cyan font-semibold">branding</span>,{' '}
              <span className="text-brand-cyan font-semibold">logo design</span>,{' '}
              <span className="text-brand-cyan font-semibold">social media content</span>, and{' '}
              <span className="text-brand-cyan font-semibold">print design</span>.
              Let&apos;s bring your vision to life with stunning visual experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-brand-cyan rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-cyan rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container bg-gradient-to-b from-transparent to-neural-slate/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services & Capabilities</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            From concept to completion, I provide comprehensive design solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            A showcase of recent projects that demonstrate creativity, precision, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-gradient-to-b from-neural-slate/30 to-transparent">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Design Process</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            A structured approach to creating exceptional designs that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-6 h-full hover:glow-effect transition-all duration-300">
                <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-circuit-silver text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-brand-cyan" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let&apos;s Build Something Amazing</span>
            </h2>
            <p className="text-circuit-silver text-lg mb-8 max-w-2xl mx-auto">
              Ready to elevate your brand with exceptional design? Let&apos;s collaborate and create
              something extraordinary together.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
