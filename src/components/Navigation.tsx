import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  function scrollTo(id: string) {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

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
            onClick={() => scrollTo("services")}
            className="hover:text-[#d4af37]"
          >
            Services
          </button>

          <Link to="/case-studies" className="hover:text-[#d4af37]">
            Case Studies
          </Link>

          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-[#d4af37]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

