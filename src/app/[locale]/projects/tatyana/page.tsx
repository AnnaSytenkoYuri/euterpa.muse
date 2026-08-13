import Header from "@/components/Header/Header";
import AboutTatSection from "@/components/Tatyana/AboutSection";
import HeroTatyanaSection from "@/components/Tatyana/HeroSection";
import PerfectForSection from "@/components/Tatyana/PerfectForSection";
import css from "./page.module.css";
import VideoSection from "@/components/Tatyana/VideoSection/VideoSection";
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
    namespace: "TatyanaMetadata",
  });

  return {
    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/projects/tatyana`,
    },

    alternates: {
      canonical: `/${locale}/projects/tatyana`,
      languages: {
        en: "/en/projects/tatyana",
        de: "/de/projects/tatyana",
        uk: "/uk/projects/tatyana",
      },
    },
  };
}

export default function TatYanaPage() {
  return (
    <>
      <div className={css.heroWrapper}>
        <Header />
        <HeroTatyanaSection />
      </div>
      <AboutTatSection />
        <div className="container">
      <div className={css.contentContainer}>
          <div className={css.videoColumn}>
            <VideoSection />
          </div>

          <div className={css.cardColumn}>
            <PerfectForSection />
          </div>
        </div>
      </div>
    </>
  );
}
