import { Helmet } from "react-helmet";

export default function Seo({ 
  title = "Pizza Italo",
  description = "Bahawalnagar’s favorite pizza & fast food restaurant.",
  keywords = "pizza, italian pizza, burgers, fast food",
  image = "/logo.png",
  url = "https://pizza-italo.vercel.app"
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional JSON-LD Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Pizza Italo",
          "image": "logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chishtian Rd, near Punjab Bank",
            "addressLocality": "Bahawalnagar",
            "addressCountry": "PK"
          },
          "telephone": "+923333110002"
        }
        `}
      </script>
    </Helmet>
  );
}
