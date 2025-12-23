import logo from '../../assets/rurboo.svg';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and tagline */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <img src={logo} alt="RURBOO" className="h-10" />
            <div className="text-sm text-gray-400">
              Rural India's Mobility Partner
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            © 2025 RURBOO. All rights reserved.
            <br />
            Made with ❤️ for Rural India
          </div>
        </div>
      </div>
    </footer>
  );
}