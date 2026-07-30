import Header from "@/components/Header/Header";
import AboutTatSection from "@/components/Tatyana/AboutSection";
import HeroTatyanaSection from "@/components/Tatyana/HeroSection";
import PerfectForSection from "@/components/Tatyana/PerfectForSection";
import css from "./page.module.css";
import VideoSection from "@/components/Tatyana/VideoSection/VideoSection";

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
