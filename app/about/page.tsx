'use client';

import {
  Palette,
  Layers,
  Type,
  Image as ImageIcon,
  Sparkles,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 90 },
    { name: 'Adobe InDesign', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Typography', level: 88 },
    { name: 'Layout Design', level: 92 },
    { name: 'Color Theory', level: 90 },
    { name: 'Branding', level: 93 },
  ];

  const tools = [
    { name: 'Adobe Creative Cloud', icon: Palette },
    { name: 'Canva Pro', icon: Layers },
    { name: 'Figma', icon: ImageIcon },
    { name: 'Typography Tools', icon: Type },
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Creativity First',
      description: 'Every project is an opportunity to push creative boundaries and deliver unique solutions.',
    },
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Design with intention, ensuring every element serves a strategic purpose for your brand.',
    },
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Committed to delivering work that exceeds expectations and makes a lasting impact.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Always learning, evolving, and staying ahead of design trends and best practices.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text-purple">About Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver leading-relaxed">
              Transforming ideas into visual stories that captivate and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 h-96 flex items-center justify-center bg-gradient-to-br from-design-purple/20 to-design-pink/20">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-purple-pink flex items-center justify-center">
                <Palette className="w-16 h-16 text-white" />
              </div>
              <p className="text-circuit-silver">Designer Photo Placeholder</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-purple">
              The Journey
            </h2>
            <div className="space-y-4 text-circuit-silver leading-relaxed">
              <p>
                I fell in love with graphic design the moment I realized that art could solve problems.
                What started as a fascination with logos and color palettes evolved into a deep passion
                for creating visual experiences that connect brands with their audiences.
              </p>
              <p>
                Over the years, I&apos;ve had the privilege of working with diverse clients—from startups
                finding their visual identity to established brands refreshing their image. Each project
                has taught me that great design isn&apos;t just about making things look beautiful; it&apos;s
                about understanding people, telling stories, and creating meaningful connections.
              </p>
              <p>
                My approach combines strategic thinking with creative exploration. I believe in the power
                of collaboration, the importance of feedback, and the magic that happens when a design
                perfectly captures what words cannot express.
              </p>
              <p>
                When I&apos;m not designing, you&apos;ll find me seeking inspiration in art galleries,
                exploring typography specimens, or experimenting with new creative techniques. This
                constant curiosity keeps my work fresh and my ideas flowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container bg-gradient-to-b from-transparent to-neural-slate/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Skills & Expertise</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            Years of experience mastering the tools and techniques that bring ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-brand-cyan">{skill.level}%</span>
                </div>
                <div className="h-3 bg-neural-slate rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-purple-pink rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Tools & Software</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            Powered by industry-leading software to deliver professional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="glass-card p-8 text-center hover:glow-effect transition-all duration-300 group"
            >
              <tool.icon className="w-12 h-12 mx-auto mb-4 text-design-purple group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold">{tool.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-gradient-to-b from-neural-slate/30 to-transparent">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Design Philosophy</span>
          </h2>
          <p className="text-circuit-silver text-lg max-w-2xl mx-auto">
            The principles that guide every project I undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="glass-card p-8 hover:glow-effect transition-all duration-300">
              <value.icon className="w-12 h-12 text-design-purple mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-circuit-silver leading-relaxed">{value.description}</p>
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
              <span className="gradient-text-purple">Let&apos;s Create Together</span>
            </h2>
            <p className="text-circuit-silver text-lg mb-8 max-w-2xl mx-auto">
              Excited to bring your ideas to life with thoughtful, impactful design.
            </p>
            <a href="/contact" className="btn-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
