import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.jpg';
import { JoinWaitlist } from './JoinWaitlist';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Admin/Driver URL
  const driverUrl = "https://rurboo-admin.web.app";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="RURBOO Logo"
              className="h-12 md:h-14 w-auto rounded-md"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#rides" className="text-gray-700 hover:text-blue-600 transition-colors">
              Rides
            </a>
            <a href="#safety" className="text-gray-700 hover:text-blue-600 transition-colors">
              Safety
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={driverUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Become a Driver
              </Button>
            </a>
            <JoinWaitlist className="bg-blue-600 hover:bg-blue-700 text-white">
              Join Waitlist
            </JoinWaitlist>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#rides"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rides
              </a>
              <a
                href="#safety"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Safety
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>

              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <a href={driverUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                  >
                    Become a Driver
                  </Button>
                </a>
                <JoinWaitlist className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Join Waitlist
                </JoinWaitlist>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
