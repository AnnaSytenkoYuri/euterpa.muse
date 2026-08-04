import AboutCTA from "@/components/About/AboutCTA";
import AboutHero from "@/components/About/AboutHero";
import Biography from "@/components/About/Biography";
import Experience from "@/components/About/Experience";
import Gallery from "@/components/About/Gallery";
import Philosophy from "@/components/About/Philosophy";
import Header from "@/components/Header/Header";
import css from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main>
      <div className={css.heroWrapper}>
        <Header />
        <AboutHero />
      </div>
      <Biography />
      <Experience />
      <Philosophy />
      <Gallery />
      <AboutCTA />
    </main>
  );
}
