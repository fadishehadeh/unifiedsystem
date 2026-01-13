import React from 'react';
import { Building2 } from 'lucide-react';
import ThemeSwitcher from '../Theme/ThemeSwitcher';

interface OfficeLocatorLayoutProps {
  children: React.ReactNode;
}

const OfficeLocatorLayout: React.FC<OfficeLocatorLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simplified Header - Display Only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        {/* Top Bar */}
        <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Building2 className="h-4 w-4" />
                <span>Ministry of Commerce and Industry - Qatar</span>
              </div>
              <div className="flex items-center gap-2">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-qatari dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-6">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <Building2 className="h-8 w-8" />
                  MOCI Office Locator
                </h1>
                <p className="text-sm text-white/80 mt-1">
                  Find Your Office in the New Building
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-clickable Navigation Menu - Display Only */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center py-3" aria-label="Main navigation (display only)">
              <div className="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-500 cursor-not-allowed">
                <span className="opacity-50">Home</span>
                <span className="opacity-50">About</span>
                <span className="opacity-50">Services</span>
                <span className="opacity-50">E-Services</span>
                <span className="opacity-50">Media Centre</span>
                <span className="opacity-50">Resources</span>
                <span className="opacity-50">Contact</span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-[180px]" role="main">
        {children}
      </main>

      {/* Simplified Footer - Display Only */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                About MOCI
              </h3>
              <p className="text-sm text-gray-400">
                Ministry of Commerce and Industry - State of Qatar
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Phone: +974 4455 5555</p>
                <p>Email: info@moci.gov.qa</p>
                <p>Address: Doha, Qatar</p>
              </div>
            </div>

            {/* Quick Links - Non-clickable */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <div className="text-sm text-gray-500 space-y-1 cursor-not-allowed">
                <p className="opacity-50">Services</p>
                <p className="opacity-50">E-Services</p>
                <p className="opacity-50">Media Centre</p>
                <p className="opacity-50">Contact Us</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ministry of Commerce and Industry - State of Qatar. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Office Locator - Internal Use Only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OfficeLocatorLayout;

