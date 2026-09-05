import { constructMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/page-transition';
import SectionHeader from '@/components/shared/section-header';
import AnimatedContainer from '@/components/shared/animated-container';
import Image from 'next/image';
import Link from 'next/link';
import { Search, PenTool, Code, CheckSquare, Rocket, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Our Process',
  description: 'Learn about our proven 5-step web development process: Discovery, Design, Development, Testing, and Launch.',
  path: '/process'
});

const steps = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    icon: Search,
    description: 'We begin by understanding your business, goals, target audience, and competitive landscape. This foundation ensures everything we build serves a distinct purpose.',
    details: [
      'Requirements Gathering',
      'Competitor Analysis',
      'Target Audience Profiling',
      'Technical Feasibility Assessment',
      'Project Roadmap Creation'
    ]
  },
  {
    id: '02',
    title: 'Design & Prototyping',
    icon: PenTool,
    description: 'Our design team crafts visual concepts and interactive prototypes, focusing on user experience (UX) and user interface (UI) to ensure an intuitive and engaging design.',
    details: [
      'Wireframing & User Flows',
      'UI/UX Design',
      'Brand Integration',
      'Interactive Prototyping',
      'Design Review & Refinement'
    ]
  },
  {
    id: '03',
    title: 'Development',
    icon: Code,
    description: 'Using modern technologies like Next.js and Tailwind CSS, our engineers turn the approved designs into a fully functional, highly performant web application.',
    details: [
      'Frontend Development',
      'Backend & API Integration',
      'CMS Setup',
      'Animation Implementation',
      'Responsive Coding'
    ]
  },
  {
    id: '04',
    title: 'Testing & QA',
    icon: CheckSquare,
    description: 'Rigorous testing is conducted across multiple devices and browsers to ensure flawless performance, security, and accessibility compliance.',
    details: [
      'Cross-browser Testing',
      'Mobile Responsiveness QA',
      'Performance Auditing',
      'Accessibility (WCAG) Checks',
      'Security Vulnerability Scanning'
    ]
  },
  {
    id: '05',
    title: 'Launch & Support',
    icon: Rocket,
    description: 'We manage the deployment process for a smooth go-live experience. Post-launch, we provide ongoing support and monitoring to ensure sustained success.',
    details: [
      'Server Configuration & Deployment',
      'Domain & DNS Setup',
      'SEO Final Checks',
      'Client Training',
      'Post-Launch Monitoring'
    ]
  }
];

export default function ProcessPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pb-20 pt-32">
        <AnimatedContainer animation="fadeInUp" className="container mx-auto px-4 mb-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How We Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Our Proven Process
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
            We follow a structured, transparent, and collaborative approach to transform your ideas into exceptional digital realities.
          </p>
          <div className="relative max-w-4xl mx-auto h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/process-illustration.jpg" 
              alt="Our Development Process" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimatedContainer>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <AnimatedContainer 
                key={step.id} 
                animation="fadeInUp" 
                delay={idx * 0.15}
                className="relative mb-20 last:mb-0"
              >
                {/* Connecting Line */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-[39px] top-24 bottom-[-80px] w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-white shadow-lg text-2xl font-bold">
                    {step.id}
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                      {step.description}
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                        Key Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        <AnimatedContainer animation="fadeInUp" className="container mx-auto px-4 mt-20">
          <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 md:p-16 text-center text-white max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start the Process?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need a complete redesign or a brand new web application, our team is ready to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </AnimatedContainer>
      </main>
    </PageTransition>
  );
}
