import EventsSection from "@/components/EventsSection/EventsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import LessonsSection from "@/components/LessonsSection/LeassonsSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LessonsSection />
        <ProjectsSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}
