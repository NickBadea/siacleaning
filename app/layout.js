import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Curățenie profesională în Craiova | SIA Cleaning",
  description:
    "Firmă de curățenie în Craiova. Oferim curățenie rezidențială, birouri, Airbnb și post-construcție. Intervenții rapide și prețuri corecte.",
  keywords: [
    "curatenie Craiova",
    "firma curatenie Craiova",
    "curatenie apartament Craiova",
    "curatenie birouri Craiova",
    "curatenie dupa renovare Craiova"
  ],
  openGraph: {
    title: "Curățenie profesională în Craiova | SIA Cleaning",
    description:
      "Servicii profesionale de curățenie în Craiova pentru locuințe și firme.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              name: "SIA Cleaning",
              areaServed: "Craiova",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Craiova",
                addressCountry: "RO",
              },
              telephone: "0770457197",
              email: "siacleaning@gmail.com",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <div className="h-24" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
