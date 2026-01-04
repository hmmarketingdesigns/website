import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Services from './Services';
import CaseStudies from './CaseStudies';
import Contact from './Contact';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Local SEO for Small Businesses | HM Marketing Designs</title>
        <meta
          name="description"
          content="HM Marketing Designs helps small businesses rank locally with proven SEO strategies that increase visibility, trust, and inbound leads."
        />
        <link rel="canonical" href="https://hmmarketingdesigns.com/" />
      </Helmet>

      <div className="bg-black min-h-screen">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h1 className="sr-only">
              National Local SEO Services, and websites design for Small Businesses and Service-Based Companies
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5f5] mb-6 leading-tight">
             When Customers Search for What You Offer, What Businesses Are They Finding?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Someone searches your service right now. They see the top results. Pick one that looks good for them. Calls and books an appointment. The customer is highly unlikely to scroll through pages or compare multiple businesses. If you're not at the top, you don't exist to them. Your competitors are just easier to find.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="rounded-xl bg-[#c9a24d] p-6 overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Home%20image2.webp"
                alt="Google Search Results showing top 3 local businesses"
                className="w-full rounded-lg block"
              />
            </div>
          </div>

          <div className="text-center">
            <button
  onClick={() => scrollToSection('contact')}
  className="
    relative inline-flex items-center justify-center
    px-12 py-4
    text-sm md:text-base
    font-semibold tracking-wide
    text-[#1a1a1a]
    rounded-full

    bg-gradient-to-b
    from-[#f3d98f]
    via-[#d4af37]
    to-[#a8872a]

    border border-[#8c6f1e]

    shadow-
      [inset_0_2px_0_rgba(255,255,255,0.55),
       inset_0_-3px_6px_rgba(0,0,0,0.35),
       0_10px_18px_rgba(0,0,0,0.6)]

    before:content-['']
    before:absolute
    before:inset-[2px]
    before:rounded-full
    before:pointer-events-none
    before:shadow-
      [inset_0_1px_0_rgba(255,255,255,0.35),
       inset_0_-1px_2px_rgba(0,0,0,0.25)]

    hover:from-[#f7e3a8]
    hover:via-[#e2bf4f]
    hover:to-[#b8962e]

    active:translate-y-[1px]
    active:shadow-
      [inset_0_1px_0_rgba(255,255,255,0.35),
       inset_0_-2px_4px_rgba(0,0,0,0.45),
       0_6px_12px_rgba(0,0,0,0.55)]

    transition-all duration-150
  "
>
  Fix My Ranking
</button>

          </div>
        </section>

        {/* SECTIONS WITH IDs FOR NAVIGATION */}
        <div id="services">
          <Services />
        </div>

        <div id="case-studies">
          <CaseStudies />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}






