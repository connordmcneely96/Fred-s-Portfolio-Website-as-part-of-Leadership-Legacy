'use client';

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  number: string;
  label: string;
  icon: LucideIcon;
}

export default function StatCard({ number, label, icon: Icon }: StatCardProps) {
  return (
    <div className="glass-card p-6 hover:glow-effect transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <Icon className="text-brand-cyan w-8 h-8 group-hover:scale-110 transition-transform" />
      </div>
      <div className="text-4xl font-bold gradient-text mb-2">{number}</div>
      <div className="text-circuit-silver text-sm">{label}</div>
    </div>
  );
}
