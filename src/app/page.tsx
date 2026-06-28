import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import ProjectsFilter from "@/components/ProjectsFilter";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <ProjectsFilter />
      <Testimonials />
      <CTA />
    </>
  );
}