import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function Services() {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
          {isServicesPage && (
        <Helmet>
         <title>Local SEO Services | HM Marketing Designs</title>
             <meta
               name="description"
               content="Local SEO services designed to increase visibility, rankings, and inbound leads for small businesses."
             />
              <link
               rel="canonical"
            href="https://hmmarketingdesigns.com/services"
              />
          </Helmet>
         )}


      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f5f5f5] mb-6">
              <span className="block">Services that help boost your visibility online</span>
              <span className="block">and get you more customers</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Get your business in front of customers who are actively looking for what you offer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="relative rounded-xl bg-[#c9a24d] p-[2px]">
              <div className="rounded-lg bg-black p-6 sm:p-8 md:p-10 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-[#f5e6b0] mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <span>Refine What You Have</span>
                  <span className="text-lg sm:text-2xl">
                    <span className="inline sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                  <span>Rank Higher</span>
                  <span className="text-lg sm:text-2xl">
                    <span className="inline sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                  <span>More Customers</span>
                </h2>

                <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
                  We optimize your Google Business Profile, fix your website&apos;s SEO structure, and manage your directory listings to get you ranking when customers search.
                </p>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
                  More visibility means more calls and more paying customers.
                </p>

                <div className="mb-8">
                  <h3 className="text-lg sm:text-xl font-serif text-[#f5e6b0] mb-4">What You Get:</h3>
                  <ul className="space-y-3 text-base text-gray-200 text-left inline-block max-w-full">
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Starting benchmark of your current rankings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Weekly progress reports showing improvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Guaranteed ranking within 90 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>All technical work handled for you</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#c9a24d]/30 pt-6">
                  <h3 className="text-lg sm:text-xl font-serif text-[#f5e6b0] mb-4">Choose Your Package:</h3>
                  <div className="space-y-2 text-base text-gray-200">
                    <p>
                      <span className="text-[#c9a24d] font-medium">First Page Package</span> – Top 10 visibility
                    </p>
                    <p>
                      <span className="text-[#c9a24d] font-medium">Premium Package</span> – Top 3 placement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl bg-[#c9a24d] p-[2px]">
              <div className="rounded-lg bg-black p-6 sm:p-8 md:p-10 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-[#f5e6b0] mb-6">
                  A Website That Will Bring You More Customers
                </h2>

                <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
                  Your website loads fast, works on any device, and makes it easy for customers to contact you. You own everything, just a yearly domain fee, no one holds it hostage. No constant maintenance like other platforms require. Need changes down the road? I&apos;m available hourly, but the site doesn&apos;t need ongoing work to keep running.
                </p>

                <div className="mb-8">
                  <h3 className="text-lg sm:text-xl font-serif text-[#f5e6b0] mb-4">What You Get:</h3>
                  <ul className="space-y-3 text-base text-gray-200 text-left inline-block max-w-full">
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Custom-built website tailored to your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Fast-loading, mobile-friendly design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Proper technical structure and on-page SEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Clear layout focused on turning visitors into leads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c9a24d] mr-3 flex-shrink-0">•</span>
                      <span>Full ownership of the website, domain, and hosting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={scrollToContact}
              className="
                relative inline-flex items-center justify-center
                px-8 sm:px-12 py-3 sm:py-4
                text-base md:text-lg
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
              "
            >
              Ready To Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

