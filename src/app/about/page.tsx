import { constructMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/page-transition';
import SectionHeader from '@/components/shared/section-header';
import AnimatedContainer from '@/components/shared/animated-container';
import Image from 'next/image';
import { Target, Lightbulb, Heart, Shield, Users, Zap, CheckCircle2 } from 'lucide-react';
import { FounderSection } from '@/components/sections/founder-section';

export const metadata = constructMetadata({
  title: 'About Us',
  description: 'Learn about our mission, vision, values, and our commitment to delivering exceptional web development solutions.',
  path: '/about'
});

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We build trust through transparent communication and honest practices.' },
  { icon: Heart, title: 'Passion', desc: 'We genuinely love what we do, and it shows in the quality of our work.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of the curve, utilizing modern technologies and techniques.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with our clients as a unified team.' },
  { icon: Zap, title: 'Agility', desc: 'We adapt quickly to changes and deliver results efficiently.' },
  { icon: Target, title: 'Excellence', desc: 'We never settle for good enough; we strive for perfection in every pixel.' }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pb-20 pt-32">
        <AnimatedContainer animation="fadeInUp" className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Building the web of tomorrow, today.
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                NextWebHosting is a premium web development agency dedicated to crafting exceptional digital experiences. We believe that a website should be more than just a digital brochure; it should be a powerful tool for growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of dedicated professionals combines technical expertise with creative vision to deliver solutions that are not only visually stunning but also highly functional, accessible, and performant.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/about-illustration.jpg" 
                alt="Our Team" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimatedContainer>

        <section className="bg-slate-50 dark:bg-slate-900 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <AnimatedContainer animation="fadeInUp">
                <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm h-full">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Mission</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To empower businesses of all sizes with cutting-edge web technology. We strive to create digital solutions that drive measurable results, enhance brand identity, and provide flawless user experiences across all devices.
                  </p>
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="fadeInUp" delay={0.2}>
                <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm h-full">
                  <Lightbulb className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Vision</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To be the leading standard in web development, recognized for our commitment to quality, innovation, and client success. We envision a digital landscape where every business has access to premium, highly optimized web solutions.
                  </p>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <SectionHeader 
            title="Our Core Values" 
            description="The principles that guide everything we do, from writing code to communicating with clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, idx) => (
              <AnimatedContainer 
                key={idx} 
                animation="fadeInUp" 
                delay={idx * 0.1}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white dark:bg-slate-900"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        {/* Founder & Leadership Section */}
        <FounderSection />

        <section className="bg-primary text-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedContainer animation="fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy & Standards</h2>
                <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                  We don't just write code; we engineer solutions. Our development philosophy is rooted in creating sustainable, scalable, and maintainable software.
                </p>
                <ul className="space-y-4">
                  {[
                    'Type-safe development with TypeScript',
                    'Mobile-first responsive design',
                    'WCAG 2.2 accessibility compliance',
                    'Strict performance optimization (Core Web Vitals)',
                    'Continuous integration and automated testing',
                    'SEO best practices built-in from day one'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-6 h-6 mr-3 text-accent" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>
              <AnimatedContainer animation="fadeInUp" delay={0.2} className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-4">A Culture of Learning</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  The tech landscape evolves rapidly. To provide the best solutions, we must evolve with it. Our team dedicates time every week to learning new frameworks, exploring emerging design trends, and contributing to open-source projects.
                </p>
                <p className="text-primary-foreground/90 leading-relaxed">
                  This commitment to continuous improvement ensures that your project benefits from the latest industry standards and most efficient technologies available.
                </p>
              </AnimatedContainer>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
