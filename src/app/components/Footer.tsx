import logo from '@/assets/logo.jpg';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-800 pb-8 mb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="RURBOO" className="h-12 w-auto rounded-md" />
              <span className="text-xl font-bold tracking-tight">RURBOO</span>
            </div>
            <div className="text-sm text-gray-400">
              Rural India's Mobility Partner
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex gap-8 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Rurboo Technologies. All rights reserved.</p>
          <p>Made with ❤️ for Rural India</p>
        </div>
      </div>
    </footer>
  );
}