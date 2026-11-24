import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterModal from "../components/RegisterModal";

export const metadata: Metadata = {
  title: "eCommerce Agency: Management & Marketing | Dazzle Commerce",
  description:
    "Dazzle Commerce is a full-service eCommerce agency for consumer brands selling direct and on marketplaces. SEO, paid media, CRO, retention and development.",
  metadataBase: new URL("https://dazzlecommerce.com"),
  alternates: { canonical: "https://dazzlecommerce.com/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dazzlecommerce.com/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Agency: Management & Marketing | Dazzle Commerce",
    description:
      "Dazzle Commerce is a full-service eCommerce agency for consumer brands selling direct and on marketplaces. SEO, paid media, CRO, retention and development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Agency: Management & Marketing | Dazzle Commerce",
    description:
      "Dazzle Commerce is a full-service eCommerce agency for consumer brands selling direct and on marketplaces. SEO, paid media, CRO, retention and development.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#content" className="skip-link screen-reader-text">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <RegisterModal />
      </body>
    </html>
  );
}
