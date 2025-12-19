'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="glass-card p-8 hover:glow-effect transition-all duration-300 group cursor-pointer">
      <div className="w-16 h-16 rounded-lg bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-white w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
        {title}
      </h3>
      <p className="text-circuit-silver leading-relaxed">{description}</p>
    </div>
  );
}
