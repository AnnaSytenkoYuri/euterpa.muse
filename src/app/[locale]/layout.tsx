import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import "../globals.css";

import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

import { routing } from "../../../i18n/routing";
import { getTranslations } from "next-intl/server";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const baseUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
        uk: "/uk",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "Euterpa.muse",
      locale,
      url: `/${locale}`,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Euterpa.muse",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.jpg"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html
    lang={locale}
    className={instrumentSans.variable}
    >
      <body>
        <NextIntlClientProvider>
          {children}
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}