import AboutCTA from "@/components/About/AboutCTA";
import AboutHero from "@/components/About/AboutHero";
import Biography from "@/components/About/Biography";
import Gallery from "@/components/About/Gallery";
import Philosophy from "@/components/About/Philosophy";
import Header from "@/components/Header/Header";
import css from "./AboutPage.module.css";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutMetadata",
  });

  return {
    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/about`,
    },

    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        de: "/de/about",
        uk: "/uk/about",
      },
    },
  };
}

export default function AboutPage() {
  return (
    <main>
      <div className={css.heroWrapper}>
        <Header />
        <AboutHero />
      </div>
      <Biography />
      <Gallery />
      <Philosophy />
      <AboutCTA />
    </main>
  );
}
