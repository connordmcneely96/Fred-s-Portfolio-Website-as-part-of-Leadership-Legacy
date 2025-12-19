import Link from 'next/link';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neural-slate border-t border-circuit-silver/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center font-bold text-xl">
                GD
              </div>
              <span className="text-xl font-bold gradient-text">Designer</span>
            </div>
            <p className="text-circuit-silver text-sm leading-relaxed">
              Professional graphic designer creating stunning visual experiences
              for brands and businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-circuit-silver hover:text-brand-cyan transition-colors text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-circuit-silver hover:text-brand-cyan transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-circuit-silver hover:text-brand-cyan transition-colors text-sm"
                >
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-circuit-silver hover:text-brand-cyan transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:hello@designer.com"
                className="w-10 h-10 rounded-lg bg-neural-dark hover:bg-brand-cyan/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-brand-cyan" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neural-dark hover:bg-brand-cyan/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-brand-cyan" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neural-dark hover:bg-brand-cyan/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-brand-cyan" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neural-dark hover:bg-brand-cyan/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-brand-cyan" />
              </a>
            </div>
            <p className="text-circuit-silver text-sm">
              Let&apos;s create something amazing together!
            </p>
          </div>
        </div>

        <div className="border-t border-circuit-silver/10 mt-8 pt-8 text-center">
          <p className="text-circuit-silver text-sm">
            &copy; {currentYear} Graphic Designer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
