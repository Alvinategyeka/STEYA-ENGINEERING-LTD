"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Steya’s attention to detail and on‑time delivery exceeded all expectations.",
    author: "Jane M.",
    role: "Project Director, Acme Corp",
    img: "/avatars/jane.jpg",
  },
  {
    quote: "They transformed a complex blueprint into a magnificent reality.",
    author: "David K.",
    role: "CEO, Horizon Developers",
    img: "/avatars/david.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-charcoal text-white relative">
      <div className="container-main text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl font-bold mb-12">
          What Clients Say
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
              “{testimonials[current].quote}”
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[current].img}
                alt={testimonials[current].author}
                className="w-14 h-14 rounded-full object-cover border-2 border-bronze"
              />
              <div className="text-left">
                <p className="font-bold">{testimonials[current].author}</p>
                <p className="text-sm text-gray-400">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? "bg-bronze" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}