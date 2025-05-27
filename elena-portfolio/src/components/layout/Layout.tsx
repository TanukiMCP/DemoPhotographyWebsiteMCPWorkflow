import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { PageTransition } from '@/components/animations';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <main className={`flex-1 pt-16 lg:pt-20 ${className}`}>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;