import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CaseStudies() {
  const location = useLocation();
  const isCaseStudiesPage = location.pathname === '/case-studies';

  return (
    <>
      {isCaseStudiesPage && (
        <Helmet>
          <title>Case Studies | HM Marketing Designs</title>
          <meta
            name="description"
            content="Real-world examples showing how HM Marketing Designs improves visibility and inbound demand."
          />
          <meta name="robots" content="index,follow" />
        </Helmet>
      )}

      <div className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* SECTION HEADER (matches Contact Us) */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#f5f5f5] mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See exactly how real businesses regained visibility, rankings, and inbound demand.
            </p>
          </div>

          {/* BOXED CONTENT */}
          <div className="border border-[#d4af37] rounded-lg px-10 py-12 text-center mb-10">
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Our clients get ranked based on their goals. Some aim for top 10 visibility to establish their presence. Others push for the top 3
              positions where most customers click and call.

              See how we took a local business from invisible to ranking for their most important keywords to bring them consistent flow of customers
            </p>
          </div>

          {/* CTA OUTSIDE THE BOX */}
          <div className="text-center">
            <Link
              to="/case-studies"
              className="
                inline-flex items-center justify-center
                px-12 py-4
                text-sm md:text-base
                font-semibold tracking-wide
                text-[#1a1a1a]
                rounded-full
                bg-gradient-to-b from-[#f3d98f] via-[#d4af37] to-[#a8872a]
                border border-[#8c6f1e]
                shadow-[inset_0_2px_0_rgba(255,255,255,0.55),0_10px_18px_rgba(0,0,0,0.6)]
                hover:from-[#f7e3a8] hover:via-[#e2bf4f] hover:to-[#b8962e]
                transition-all duration-150
              "
            >
              Our Case Studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}



