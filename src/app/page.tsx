import EventsSection from "@/components/EventsSection/EventsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import LessonsSection from "@/components/LessonsSection/LeassonsSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import css from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className={css.heroWrapper}>
      <Header />
      <HeroSection />
    </div>
      <LessonsSection />
      <ProjectsSection />
      <EventsSection />
      <Footer />
    </>
  );
}
