import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const isCaseStudiesPage =
    location.pathname === '/case-studies' || location.pathname === '/case-study';

  return (
    <nav className="bg-black border-none shadow-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Floating%20Golden%20Logo2.png"
            alt="HM Marketing Designs Logo"
            width="147"
            height="105"
            className="h-[105px] w-auto md:w-auto"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm text-gray-300">
          {isCaseStudiesPage ? (
            <Link
              to="/"
              className="hover:text-[#d4af37]"
            >
              Home
            </Link>
          ) : (
            <>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({ behavior: 'auto' })
                }
                className="hover:text-[#d4af37]"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'auto' })
                }
                className="hover:text-[#d4af37]"
              >
                Case Studies
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })
                }
                className="hover:text-[#d4af37]"
              >
                Contact
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

