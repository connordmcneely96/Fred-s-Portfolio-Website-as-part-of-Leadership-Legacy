'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for reaching out! I\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@designer.com',
      link: 'mailto:hello@designer.com',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null,
    },
    {
      icon: MessageSquare,
      title: 'Availability',
      value: 'Open for new projects',
      link: null,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote / Worldwide',
      link: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,184,230,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Let&apos;s Work Together!</span>
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Fill out the form below and let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-circuit-silver hover:text-brand-cyan transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-circuit-silver text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-3 text-circuit-silver text-sm">
                <li className="flex items-start">
                  <span className="text-brand-cyan mr-2">✓</span>
                  5+ years professional experience
                </li>
                <li className="flex items-start">
                  <span className="text-brand-cyan mr-2">✓</span>
                  Fast turnaround times
                </li>
                <li className="flex items-start">
                  <span className="text-brand-cyan mr-2">✓</span>
                  Unlimited revisions on select packages
                </li>
                <li className="flex items-start">
                  <span className="text-brand-cyan mr-2">✓</span>
                  100% satisfaction guarantee
                </li>
                <li className="flex items-start">
                  <span className="text-brand-cyan mr-2">✓</span>
                  All file formats provided
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold gradient-text mb-8">Start Your Project</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neural-dark border border-circuit-silver/20 rounded-lg text-white placeholder-circuit-silver/50 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neural-dark border border-circuit-silver/20 rounded-lg text-white placeholder-circuit-silver/50 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-white font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neural-dark border border-circuit-silver/20 rounded-lg text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="logo">Logo Design</option>
                    <option value="branding">Brand Identity</option>
                    <option value="social">Social Media Content</option>
                    <option value="print">Print Design</option>
                    <option value="web">Web Graphics</option>
                    <option value="illustration">Illustration</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neural-dark border border-circuit-silver/20 rounded-lg text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  >
                    <option value="">Select your budget</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-300">$100 - $300</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000+">$1,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neural-dark border border-circuit-silver/20 rounded-lg text-white placeholder-circuit-silver/50 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {submitMessage && (
                  <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg">
                    <p className="text-brand-cyan text-center">{submitMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-container">
        <div className="glass-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Excited to Bring Your Ideas to Life</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            Every great project starts with a conversation. Let&apos;s discuss how we can work together
            to create designs that make an impact.
          </p>
        </div>
      </section>
    </>
  );
}
