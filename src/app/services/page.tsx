import { constructMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/page-transition';
import SectionHeader from '@/components/shared/section-header';
import AnimatedContainer from '@/components/shared/animated-container';
import Link from 'next/link';
import {
  Code2, Briefcase, LayoutDashboard, Rocket, Utensils, Building2,
  Dumbbell, Stethoscope, Scale, GraduationCap, Building,
  Paintbrush, Wrench, Search, Zap, Server, Globe, Box, HeadphonesIcon,
  ArrowRight
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Services',
  description: 'Explore our comprehensive web development services tailored for your business needs.',
  path: '/services'
});

const serviceCategories = [
  {
    title: 'Web Development',
    description: 'Custom websites designed for specific industry needs.',
    services: [
      { name: 'Business Websites', icon: Briefcase, desc: 'Professional sites to establish your corporate presence.', features: ['Custom Design', 'CMS Integration', 'Mobile Responsive', 'SEO Ready'] },
      { name: 'Portfolio Websites', icon: LayoutDashboard, desc: 'Showcase your work with stunning portfolio layouts.', features: ['Image Galleries', 'Case Studies', 'Contact Forms', 'Fast Loading'] },
      { name: 'Landing Pages', icon: Code2, desc: 'High-converting landing pages for your marketing campaigns.', features: ['A/B Testing Ready', 'Lead Capture', 'Analytics Setup', 'Conversion Optimized'] },
      { name: 'Startup Websites', icon: Rocket, desc: 'Dynamic sites to launch your new venture.', features: ['Scalable Architecture', 'Integration Ready', 'Modern Tech Stack', 'MVP Focused'] },
      { name: 'Restaurant Sites', icon: Utensils, desc: 'Appetizing designs with menu and reservation features.', features: ['Online Menus', 'Reservation System', 'Location Maps', 'Social Media Integration'] },
      { name: 'Real Estate Sites', icon: Building2, desc: 'Property listings with advanced search capabilities.', features: ['Property Search', 'Virtual Tours', 'Agent Profiles', 'Lead Generation'] },
      { name: 'Gym & Fitness', icon: Dumbbell, desc: 'Energetic designs with class schedules and booking.', features: ['Class Schedules', 'Membership Portal', 'Trainer Profiles', 'Video Integration'] },
      { name: 'Dental Clinics', icon: Stethoscope, desc: 'Professional sites with appointment scheduling.', features: ['Appointment Booking', 'Patient Forms', 'Service Pages', 'Review Integration'] },
      { name: 'Law Firms', icon: Scale, desc: 'Trust-building designs for legal practices.', features: ['Practice Areas', 'Attorney Profiles', 'Secure Contact', 'Client Portal'] },
      { name: 'Educational Sites', icon: GraduationCap, desc: 'Platforms for schools, courses, and e-learning.', features: ['Course Catalogs', 'Student Portal', 'Event Calendars', 'LMS Integration'] },
      { name: 'Corporate Sites', icon: Building, desc: 'Enterprise-grade websites for large organizations.', features: ['Multi-language', 'Complex Architecture', 'Strict Security', 'Compliance Ready'] },
    ]
  },
  {
    title: 'Development Services',
    description: 'Keep your website fresh, secure, and up-to-date.',
    services: [
      { name: 'Website Redesign', icon: Paintbrush, desc: 'Modernize your outdated website.', features: ['UX/UI Audit', 'Brand Refresh', 'Content Migration', 'Performance Boost'] },
      { name: 'Maintenance', icon: Wrench, desc: 'Ongoing support and technical updates.', features: ['Security Patches', 'Regular Backups', 'Uptime Monitoring', 'Content Updates'] },
    ]
  },
  {
    title: 'Optimization',
    description: 'Improve visibility and speed.',
    services: [
      { name: 'SEO Optimization', icon: Search, desc: 'Rank higher on search engines.', features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Tracking'] },
      { name: 'Performance Tuning', icon: Zap, desc: 'Lightning-fast load times.', features: ['Image Optimization', 'Code Minification', 'Caching Setup', 'Core Web Vitals'] },
    ]
  },
  {
    title: 'Infrastructure',
    description: 'Solid foundation for your digital presence.',
    services: [
      { name: 'Deployment', icon: Box, desc: 'Smooth transition from development to live.', features: ['CI/CD Pipeline', 'Staging Environment', 'Zero Downtime', 'Version Control'] },
      { name: 'Cloud Hosting', icon: Server, desc: 'Reliable and scalable hosting solutions.', features: ['High Availability', 'Auto-scaling', 'DDoS Protection', 'SSL Certificates'] },
      { name: 'Domain Management', icon: Globe, desc: 'Hassle-free domain registration and DNS.', features: ['Domain Registration', 'DNS Configuration', 'Email Setup', 'Renewals'] },
      { name: 'Consultation', icon: HeadphonesIcon, desc: 'Expert advice for your digital strategy.', features: ['Tech Stack Review', 'Architecture Planning', 'Security Audit', 'Growth Strategy'] },
    ]
  }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pb-20 pt-32">
        <AnimatedContainer animation="fadeInUp" className="container mx-auto px-4 mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Offerings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Comprehensive Web Solutions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From complete web development to specialized optimization and infrastructure services, 
            we provide everything you need to succeed online.
          </p>
        </AnimatedContainer>

        <div className="container mx-auto px-4">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-24 last:mb-0">
              <SectionHeader 
                title={category.title} 
                description={category.description} 
                align="left"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {category.services.map((service, idx) => (
                  <AnimatedContainer 
                    key={idx} 
                    animation="fadeInUp" 
                    delay={idx * 0.1}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatedContainer animation="fadeInUp" delay={0.2} className="container mx-auto px-4 mt-20">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Contact us today for a free consultation and project estimate.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-primary font-semibold hover:bg-slate-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </AnimatedContainer>
      </main>
    </PageTransition>
  );
}
