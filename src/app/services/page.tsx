import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { Building2, HardHat, Ruler, ArrowRight } from "lucide-react";

const services = [
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    icon: <Ruler size={32} />,
    accent: "border-l-blue-500",
    description:
      "From highways to water supply systems, our civil engineering team delivers robust infrastructure that stands the test of time. We handle feasibility studies, detailed design, and construction supervision for projects of any scale.",
    highlights: [
      "Roads & bridges",
      "Water & wastewater treatment",
      "Stormwater management",
      "Geotechnical investigations",
    ],
    image: "/services/civil.jpg",
  },
  {
    id: "structural-design",
    title: "Structural Design",
    icon: <HardHat size={32} />,
    accent: "border-l-bronze",
    description:
      "We combine creativity with rigorous analysis to create safe, efficient, and beautiful structures. Our portfolio includes high‑rise buildings, industrial facilities, and complex retrofits.",
    highlights: [
      "High‑rise & commercial buildings",
      "Seismic retrofitting",
      "Steel & concrete structures",
      "BIM & 3D modeling",
    ],
    image: "/services/structural.jpg",
  },
  {
    id: "project-management",
    title: "Project Management",
    icon: <Building2 size={32} />,
    accent: "border-l-slate-500",
    description:
      "Full‑lifecycle project management that keeps your vision on track and on budget. We act as your trusted partner from concept to handover, mitigating risks and maximising value.",
    highlights: [
      "Cost & schedule control",
      "Contract administration",
      "Quality assurance",
      "Stakeholder coordination",
    ],
    image: "/services/management.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-main text-center">
          <RevealOnScroll>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-4">
              Our Expertise
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              End‑to‑end engineering services tailored to the most demanding
              projects.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding container-main ${
            index % 2 === 0 ? "" : "bg-gray-50"
          }`}
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <RevealOnScroll>
              <div className="relative h-[400px] overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </RevealOnScroll>

            <div className={`${index % 2 !== 0 ? "lg:order-first" : ""}`}>
              <RevealOnScroll>
                <div className={`border-l-4 ${service.accent} pl-6`}>
                  <div className="text-bronze mb-4">{service.icon}</div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <ArrowRight size={14} className="text-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 px-8 py-3 border border-bronze text-bronze text-sm uppercase tracking-wider hover:bg-bronze hover:text-white transition-all duration-300"
                  >
                    Enquire Now
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-charcoal text-white text-center">
        <div className="container-main max-w-2xl">
          <RevealOnScroll>
            <h2 className="font-serif text-4xl font-bold mb-4">
              Not sure which service fits your project?
            </h2>
            <p className="text-gray-300 mb-8">
              Our team will help you define the perfect scope — at no cost.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-bronze text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}