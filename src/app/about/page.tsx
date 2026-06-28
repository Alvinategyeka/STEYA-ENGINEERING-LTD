import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

const team = [
  {
    name: "Eng. Andrew Kato",
    role: "Managing Director",
    img: "/team/andrew.jpg",
    bio: "25+ years in structural engineering, led iconic projects across East Africa.",
  },
  {
    name: "Eng. Sarah Nambi",
    role: "Chief Engineer",
    img: "/team/sarah.jpg",
    bio: "Specialises in seismic design and sustainable materials.",
  },
  {
    name: "Ms. Patricia Auma",
    role: "Head of Projects",
    img: "/team/patricia.jpg",
    bio: "PMP‑certified, delivering complex programmes on time and under budget.",
  },
];

const milestones = [
  { year: "1998", event: "Steya Engineering founded in Kampala." },
  { year: "2005", event: "Completed first major bridge project (Jinja Bridge)." },
  { year: "2012", event: "Expanded to Rwanda and Kenya." },
  { year: "2018", event: "Named East Africa’s Engineering Firm of the Year." },
  { year: "2024", event: "Delivered the iconic Kampala Skyline Tower." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-main text-center">
          <RevealOnScroll>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-4">
              Our Story
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Three decades of engineering excellence, driven by a passion for
              transforming Africa’s skyline.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Precision. Integrity. Innovation.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Steya Engineering was born from a simple belief: great
              infrastructure changes lives. Today we’re a team of 120+ engineers,
              project managers, and technical specialists, united by a commitment
              to quality and a deep respect for the communities we serve.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We combine global technical standards with local insight to deliver
              projects that are on time, on budget, and built to last.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <Image
                src="/about/office.jpg"
                alt="Steya Engineering office"
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-charcoal">
              Our Journey
            </h2>
          </RevealOnScroll>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
            {milestones.map((m, i) => (
              <RevealOnScroll key={i}>
                <div
                  className={`flex items-center mb-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 p-4">
                    <div
                      className={`bg-white p-6 rounded-sm shadow-sm ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="text-bronze font-bold text-lg">
                        {m.year}
                      </span>
                      <p className="text-gray-700 mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-bronze rounded-full border-4 border-white shadow flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding container-main">
        <RevealOnScroll className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-charcoal">
            Leadership
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <RevealOnScroll key={member.name}>
              <div className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-bronze transition-colors">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold">
                  {member.name}
                </h3>
                <p className="text-bronze text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-500 mt-2 text-sm max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}