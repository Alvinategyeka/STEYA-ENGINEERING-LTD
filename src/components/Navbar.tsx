"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const projectThumbs = [
  {
    title: "Kampala Skyline Tower",
    category: "Commercial",
    img: "/projects/kampala.jpg",
    href: "/projects/kampala-skyline-tower",
  },
  {
    title: "Jinja Bridge",
    category: "Infrastructure",
    img: "/projects/jinja.jpg",
    href: "/projects/jinja-bridge-rehabilitation",
  },
  {
    title: "Luxury Residences",
    category: "Residential",
    img: "/projects/residences.jpg",
    href: "/projects/luxury-residences",
  },
  {
    title: "Industrial Park",
    category: "Industrial",
    img: "/projects/industrial.jpg",
    href: "/projects/industrial-park",
  },
];

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 300);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="container-main flex items-center justify-between h-20 px-6">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-charcoal tracking-tight"
        >
          Steya<span className="text-bronze">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              onMouseEnter={
                link.label === "Projects" ? handleMouseEnter : undefined
              }
              onMouseLeave={
                link.label === "Projects" ? handleMouseLeave : undefined
              }
            >
              <Link
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-wider text-charcoal hover:text-bronze transition-colors group"
              >
                {link.label}
                {link.label === "Projects" && (
                  <span className="ml-1 inline-block">
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bronze group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mega Menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 py-10"
          >
            <div className="container-main grid grid-cols-4 gap-6 px-6">
              {projectThumbs.map((proj) => (
                <Link
                  key={proj.title}
                  href={proj.href}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-md mb-3 aspect-[4/3]">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-bronze uppercase tracking-widest">
                    {proj.category}
                  </p>
                  <h4 className="font-serif text-lg font-bold group-hover:text-bronze transition-colors">
                    {proj.title}
                  </h4>
                </Link>
              ))}
              <Link
                href="/projects"
                className="flex items-center justify-center border border-gray-200 rounded-md hover:border-bronze hover:text-bronze transition-colors"
              >
                View All Projects →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}