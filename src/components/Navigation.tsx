import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-black border-none shadow-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Floating%20Golden%20Logo.1.png"
            width="294"
            height="210"
            className="w-[141px] h-auto flex-none"
            alt="HM Marketing Designs Logo"
          />
        </Link>
        
        <div className="flex gap-6 text-sm text-gray-300">
          <button
            type="button"
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-[#d4af37]"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-[#d4af37]"
          >
            Case Studies
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-[#d4af37]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
