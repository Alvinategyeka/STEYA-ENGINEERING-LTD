import RevealOnScroll from "./RevealOnScroll";
import { Building2, HardHat, Ruler } from "lucide-react";

const services = [
  {
    title: "Civil Engineering",
    accent: "border-l-blue-500",
    icon: <Ruler size={28} />,
    desc: "Roads, bridges, and water infrastructure built to last.",
  },
  {
    title: "Structural Design",
    accent: "border-l-bronze",
    icon: <HardHat size={28} />,
    desc: "Innovative, safe, and cost‑efficient structural solutions.",
  },
  {
    title: "Project Management",
    accent: "border-l-slate-500",
    icon: <Building2 size={28} />,
    desc: "Full lifecycle management from concept to handover.",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
            Our Expertise
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Comprehensive engineering services under one roof.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <RevealOnScroll key={i}>
              <div
                className={`group bg-white p-8 border-l-4 ${svc.accent} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <div className="text-bronze mb-6">{svc.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-bronze transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                <a
                  href={`/services#${svc.title
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className="inline-block mt-6 text-sm font-medium uppercase tracking-wider text-bronze border-b border-transparent hover:border-bronze"
                >
                  Learn More →
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}