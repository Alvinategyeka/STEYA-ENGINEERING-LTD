"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { Plus } from "lucide-react";

const categories = [
  "All",
  "Infrastructure",
  "Commercial",
  "Residential",
  "Industrial",
];

const projects = [
  {
    title: "Kampala Skyline Tower",
    cat: "Commercial",
    img: "/projects/kampala.jpg",
    location: "Kampala, Uganda",
  },
  {
    title: "Jinja Bridge Rehabilitation",
    cat: "Infrastructure",
    img: "/projects/jinja.jpg",
    location: "Jinja, Uganda",
  },
  {
    title: "Luxury Hillside Residences",
    cat: "Residential",
    img: "/projects/residences.jpg",
    location: "Entebbe, Uganda",
  },
  {
    title: "Namanve Industrial Park",
    cat: "Industrial",
    img: "/projects/industrial.jpg",
    location: "Namanve, Uganda",
  },
  {
    title: "Kigali Convention Centre",
    cat: "Commercial",
    img: "/projects/kigali.jpg",
    location: "Kigali, Rwanda",
  },
  {
    title: "Mombasa Port Expansion",
    cat: "Infrastructure",
    img: "/projects/mombasa.jpg",
    location: "Mombasa, Kenya",
  },
];

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  return (
    <section className="section-padding container-main">
      <RevealOnScroll className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
          Featured Projects
        </h2>
      </RevealOnScroll>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 text-sm uppercase tracking-wider border transition-colors ${
              activeFilter === cat
                ? "border-bronze bg-bronze text-white"
                : "border-gray-300 text-gray-600 hover:border-bronze"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filtered.map((proj) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-bronze text-xs uppercase tracking-widest">
                  {proj.cat}
                </p>
                <h3 className="text-white font-serif text-xl font-bold">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm">{proj.location}</p>
                <span className="mt-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white group-hover:bg-bronze group-hover:border-bronze transition-all">
                  <Plus size={18} />
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}