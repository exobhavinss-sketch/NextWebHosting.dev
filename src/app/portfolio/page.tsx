import { constructMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/page-transition';
import AnimatedContainer from '@/components/shared/animated-container';
import PortfolioClient from './portfolio-client';

export const metadata = constructMetadata({
  title: 'Our Portfolio',
  description: 'Explore our latest web development projects across various industries including healthcare, real estate, and hospitality.',
  path: '/portfolio'
});

export default function PortfolioPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pb-20 pt-32">
        <AnimatedContainer animation="fadeInUp" className="container mx-auto px-4 mb-12 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence with custom, high-performance web solutions.
          </p>
        </AnimatedContainer>

        <div className="container mx-auto px-4">
          <PortfolioClient />
        </div>
      </main>
    </PageTransition>
  );
}
