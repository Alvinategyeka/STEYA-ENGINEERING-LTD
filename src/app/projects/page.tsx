import ProjectsFilter from "@/components/ProjectsFilter";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-main text-center">
          <RevealOnScroll>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-4">
              Our Work
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore a selection of our most ambitious engineering projects
              across East Africa.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 px-10 py-3 border border-bronze text-bronze text-sm uppercase tracking-[0.2em] hover:bg-bronze hover:text-white transition-all duration-300"
            >
              Start a Project
            </Link>
          </RevealOnScroll>
        </div>
      </section>
      <ProjectsFilter />
    </>
  );
}