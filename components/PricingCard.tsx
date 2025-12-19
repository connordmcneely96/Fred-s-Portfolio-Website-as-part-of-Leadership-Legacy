'use client';

import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  priceRange: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ title, priceRange, features, popular = false }: PricingCardProps) {
  return (
    <div
      className={`glass-card p-8 relative ${
        popular ? 'border-2 border-brand-cyan glow-effect' : ''
      } hover:glow-effect transition-all duration-300`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-brand px-4 py-1 rounded-full text-sm font-semibold text-white">
            Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold gradient-text">{priceRange}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-brand-cyan w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-circuit-silver text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full btn-primary">
        Get Started
      </button>
    </div>
  );
}
