import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Floating%20Golden%20Logo.png"
              alt="HM Marketing Designs Logo"
              className="h-[105px] w-auto flex-none"
            />
          </div>

          {/* BUSINESS INFO */}
          <div className="text-center md:text-left text-sm text-gray-300 space-y-2 md:pl-6">
            <p className="font-semibold text-[#f5f5f5]">
              HM Marketing Designs
            </p>
            <p>
              Business Hours:
              <br />
              Monday – Friday
              <br />
              9:00 AM – 5:30 PM
            </p>
            <p>
              Email:
              <br />
              <a
                href="mailto:hmmarketingdesigns@gmail.com"
                className="text-[#d4af37] hover:underline"
              >
                hmmarketingdesigns@gmail.com
              </a>
            </p>
          </div>

          {/* SITE LINKS */}
          <div className="text-center md:text-left text-sm text-gray-300 space-y-2">
            <p className="font-semibold text-[#f5f5f5]">
              Links
            </p>

            <Link to="/" className="block text-[#d4af37] hover:underline">
              Home
            </Link>

            <Link to="/services" className="block text-[#d4af37] hover:underline">
              Services
            </Link>

            <Link to="/case-studies" className="block text-[#d4af37] hover:underline">
              Case Studies
            </Link>

            <a
              href="/privacy-policy.html"
              className="block text-[#d4af37] hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* CONNECT */}
          <div className="text-center md:text-left text-sm text-gray-300 space-y-3">
            <p className="font-semibold text-[#f5f5f5]">
              Connect
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61586140072044"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex justify-center md:justify-start"
            >
              <Facebook className="w-6 h-6 text-[#1877F2]" />
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HM Marketing Designs. All rights reserved.
        </div>

      </div>
    </footer>
  );
}


