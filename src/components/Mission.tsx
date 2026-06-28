"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { label: "Projects Completed", value: 340 },
  { label: "Years Experience", value: 28 },
  { label: "Expert Engineers", value: 120 },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / 80;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
}

export default function Mission() {
  return (
    <section className="section-padding container-main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <RevealOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Precision in every detail.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            For nearly three decades, Steya Engineering has delivered landmark
            infrastructure, commercial, and residential projects across East
            Africa. Our approach blends world‑class technical expertise with a
            deep respect for the communities we serve.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-bronze">
                  <Counter target={stat.value} />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="relative h-[500px] overflow-hidden rounded-sm">
          <img
            src="/about/mission.jpg"
            alt="Engineers on site"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}