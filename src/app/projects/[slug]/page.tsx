import { notFound } from "next/navigation";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    slug: "kampala-skyline-tower",
    title: "Kampala Skyline Tower",
    category: "Commercial",
    location: "Kampala, Uganda",
    year: "2024",
    client: "Skyline Properties Ltd",
    description:
      "A 32-storey mixed-use tower featuring state-of-the-art structural engineering. Our team delivered the full structural design and construction supervision, ensuring compliance with international seismic standards.",
    images: [
      "/projects/kampala-1.jpg",
      "/projects/kampala-2.jpg",
      "/projects/kampala-3.jpg",
    ],
    stats: [
      { label: "Height", value: "142 m" },
      { label: "Floor Area", value: "48,000 m²" },
      { label: "Completion", value: "18 months" },
    ],
  },
  {
    slug: "jinja-bridge-rehabilitation",
    title: "Jinja Bridge Rehabilitation",
    category: "Infrastructure",
    location: "Jinja, Uganda",
    year: "2023",
    client: "Ministry of Works",
    description:
      "Complete structural assessment and rehabilitation of the historic Jinja Bridge. We strengthened the steel trusses, replaced expansion joints, and extended the bridge lifespan by 50 years.",
    images: [
      "/projects/jinja-1.jpg",
      "/projects/jinja-2.jpg",
      "/projects/jinja-3.jpg",
    ],
    stats: [
      { label: "Span", value: "525 m" },
      { label: "Traffic Lanes", value: "4" },
      { label: "Project Duration", value: "14 months" },
    ],
  },
  // Add more projects as needed
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      {/* Hero image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 container-main">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-bronze transition-colors mb-4"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">
            {project.title}
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            {project.location} · {project.category}
          </p>
        </div>
      </div>

      {/* Project details */}
      <section className="section-padding container-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <RevealOnScroll>
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                About the Project
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-sm"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} gallery ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Sidebar stats */}
          <div className="space-y-6">
            <RevealOnScroll>
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Project Facts
                </h3>
                <ul className="space-y-3">
                  {project.stats.map((stat) => (
                    <li
                      key={stat.label}
                      className="flex justify-between border-b border-gray-200 pb-2"
                    >
                      <span className="text-gray-500">{stat.label}</span>
                      <span className="font-semibold text-charcoal">
                        {stat.value}
                      </span>
                    </li>
                  ))}
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Year</span>
                    <span className="font-semibold text-charcoal">
                      {project.year}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Client</span>
                    <span className="font-semibold text-charcoal">
                      {project.client}
                    </span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <Link
                href="/contact"
                className="block w-full text-center bg-bronze text-white py-4 text-sm uppercase tracking-[0.2em] hover:bg-charcoal transition-colors duration-300"
              >
                Start a Similar Project
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}