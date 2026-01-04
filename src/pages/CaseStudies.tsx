import { useLocation } from "react-router-dom";

export default function CaseStudies() {
  const location = useLocation();
  const isPage = location.pathname === "/case-studies";

  return (
    <>
      {isPage && (
        <Helmet>
          <title>Case Studies | HM Marketing Designs</title>
          <meta
            name="description"
            content="Real-world examples showing how HM Marketing Designs improves visibility and inbound demand."
          />
          <meta name="robots" content="noindex,follow" />
          <link rel="canonical" href="https://hmmarketingdesigns.com/case-studies" />
        </Helmet>
      )}

      {/* rest of component unchanged */}
    </>
  );
}

