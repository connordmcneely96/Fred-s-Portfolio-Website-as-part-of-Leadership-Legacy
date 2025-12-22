'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ title, category, image, tags }: ProjectCardProps) {
  return (
    <Link href={`/portfolio#${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="group relative overflow-hidden rounded-xl cursor-pointer h-80 bg-neural-slate">
        <div className="absolute inset-0 bg-gradient-to-br from-neural-slate via-brand-cyan/5 to-design-purple/10" />

        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neural-dark via-neural-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-brand-cyan font-medium mb-3">{category}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-brand-cyan/20 border border-brand-cyan/30 rounded-full text-xs text-brand-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
