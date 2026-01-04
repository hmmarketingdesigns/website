import React, { useState, useEffect } from 'react';

export default function CaseStudies() {
  const [viewingCaseStudy, setViewingCaseStudy] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  // Force page to load at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewingCaseStudy]);

  // Prevent background scroll while image is expanded
  useEffect(() => {
    if (!expandedImage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [expandedImage]);

  const cardBase =
    "rounded-lg border border-[#d4af37] bg-black/40 " +
    "p-6 md:p-7 " +
    "min-h-[170px] " +
    "transition-colors";

  const comingSoonBase =
    "rounded-lg border border-white/10 bg-[#0f0f0f] " +
    "p-6 md:p-7 " +
    "min-h-[170px] " +
    "opacity-60";

  const heatmaps = [
    {
      src: "https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Lawn%20mower%20repair2.webp",
      alt: "Lawn Mower Repair - Ranking #1"
    },
    {
      src: "https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Motorcycle%20repair2.webp",
      alt: "Motorcycle Repair - Ranking #3"
    },
    {
      src: "https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Small%20engine%20repair2.webp",
      alt: "Small Engine Repair - Ranking #1"
    },
    {
      src: "https://raw.githubusercontent.com/hmmarketingdesigns/Images/main/Atv2.webp", // ← Add your ATV repair heatmap URL here
      alt: "ATV Repair - Ranking #4"
    }
  ];

  // If viewing case study, show full case study page
  if (viewingCaseStudy) {
    return (
      <>
        <section className="bg-black text-white py-24 min-h-screen">
          <div className="max-w-5xl mx-auto px-6">
            {/* Back Button */}
            <button
              type="button"
              onClick={() => setViewingCaseStudy(false)}
              className="mb-8 text-[#d4af37] hover:underline"
            >
              ← Back to Case Studies
            </button>

            <div className="space-y-12 text-gray-200 leading-relaxed">
              {/* Business Name */}
              <section>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Nick's Little Engine Shop</h1>
                <p className="text-sm text-[#d4af37] italic">Case study in progress - Updated December 2025</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">The Challenge</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business did not have a website online when approached due to website provider issues</li>
                  <li>Business wanted to pivot from lawnmower store to small engine repair services</li>
                  <li>No online presence for service offerings (motorcycles, ATVs)</li>
                  <li>Google Business Profile was not optimized</li>
                  <li>Old citations pointing to outdated information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">Work Performed</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Built custom website from scratch with full SEO optimization (June/July 2025)</li>
                  <li>Client received full ownership of domain and hosting</li>
                  <li>Implemented contact form automation</li>
                  <li>Gained access to Google Business Profile (November 14,2025)</li>
                  <li>Completed and optimized profile for small engine repair services</li>
                  <li>Added correct service categories for business pivot</li>
                  <li>Citation management (ongoing)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-4">Outcome</h2>
                
                <p className="mb-4 text-gray-300">
                  <strong>Rankings as of December 2025 (within 90-day SEO period):</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Lawn Mower Repair:</strong> #1</li>
                  <li><strong>Small Engine Repair:</strong> #1</li>
                  <li><strong>Motorcycle Repair:</strong> #3</li>
                  <li><strong>ATV Repair:</strong> #4</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#d4af37]">Business Impact:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Went from no online presence to ranking in top positions</li>
                  <li>Successfully pivoted business focus from retail to repair services</li>
                  <li>Increase in customer inquiries and bookings</li>
                </ul>

                <p className="mt-6 text-sm text-gray-400 italic">
                  Note: This case study is ongoing and currently within the 90-day SEO optimization period. Rankings and results will continue to be monitored and updated as the project progresses.
                </p>
              </section>

              {/* Heatmaps - Clickable at Bottom */}
              <section>
                <h2 className="text-3xl font-semibold mb-6">Local Ranking Heatmaps</h2>

                <div className="grid gap-6 md:grid-cols-3">
                  {heatmaps.map((heatmap, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setExpandedImage(heatmap)}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={heatmap.src}
                        alt={heatmap.alt}
                        className="w-full h-auto rounded-lg border border-white/10 bg-[#111]"
                      />
                      <p className="text-xs text-gray-400 mt-2 text-center">Click to expand</p>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* IMAGE EXPANSION MODAL */}
        {expandedImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4">
            {/* Click outside to close */}
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setExpandedImage(null)}
              className="absolute inset-0 cursor-default"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setExpandedImage(null)}
              className="absolute top-8 right-8 text-white text-2xl hover:text-[#d4af37] z-10"
            >
              ✕
            </button>

            {/* Expanded Image */}
            <div className="relative z-10 max-w-7xl max-h-[90vh] overflow-auto">
              <img
                src={expandedImage.src}
                alt={expandedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-white mt-4 text-sm">{expandedImage.alt}</p>
            </div>
          </div>
        )}
      </>
    );
  }

  // Default: Show case studies grid
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Case Studies</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-world examples showing how local businesses regained visibility,
            rankings, and inbound demand.
          </p>
        </div>

        {/* 6 SQUARES (1 LIVE + 5 COMING SOON) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case Study 1 (LIVE) */}
          <button
            type="button"
            onClick={() => setViewingCaseStudy(true)}
            className={`${cardBase} text-left hover:bg-[#0f0f0f] cursor-pointer`}
          >
            <h3 className="text-xl font-semibold mb-3">
              Local Small Engine Repair Shop
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Website rebuild, Google Business Profile correction, and SEO foundation
              focused on the business's current repair services.
            </p>
            <p className="mt-4 text-sm font-medium text-[#d4af37]">
              View case study →
            </p>
          </button>

          {/* Coming Soon #2 */}
          <div className={comingSoonBase}>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Coming Soon</h3>
            <p className="text-sm text-gray-400">Additional case studies will be added.</p>
          </div>

          {/* Coming Soon #3 */}
          <div className={comingSoonBase}>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Coming Soon</h3>
            <p className="text-sm text-gray-400">Additional case studies will be added.</p>
          </div>

          {/* Coming Soon #4 */}
          <div className={comingSoonBase}>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Coming Soon</h3>
            <p className="text-sm text-gray-400">Additional case studies will be added.</p>
          </div>

          {/* Coming Soon #5 */}
          <div className={comingSoonBase}>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Coming Soon</h3>
            <p className="text-sm text-gray-400">Additional case studies will be added.</p>
          </div>

          {/* Coming Soon #6 */}
          <div className={comingSoonBase}>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Coming Soon</h3>
            <p className="text-sm text-gray-400">Additional case studies will be added.</p>
          </div>
        </div>
      </div>
    </section>
  );
}