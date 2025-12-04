import Footer from "@/components/footer";
import Header from "@/components/header";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import ScrollToTop from "@/components/scroll-to-top";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facility-web | Conseil en Stratégie Produit & Go-to-Market (PMM)",

  description:
    "Expertise en Stratégie Produit, Positionnement (PMM) et exécution Go-to-Market. Alignez votre offre sur le marché et accélérez votre croissance mesurable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link rel="preconnect" href="//static.axept.io" />
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-slate-50 text-slate-800`}
      >
        <Script
          id="axeptio-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.axeptioSettings = {
                clientId: "68ea0cff8b304d62e761db24",
                cookiesVersion: "facility-web-fr-EU",
                googleConsentMode: {
                  default: {
                    analytics_storage: "denied",
                    ad_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied",
                    wait_for_update: 500
                  }
                }
              };
               
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");
            `,
          }}
        />
        <SpeedInsights />
        <ReactQueryProvider>
          <Toaster />
          <div className="flex flex-col justify-between min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
              <ScrollToTop />
            </div>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
