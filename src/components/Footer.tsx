import Link from "next/link";
import { Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-gray-200 section-padding">
      <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-xl font-bold mb-4">
            Steya Engineering
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Building Beyond Limits. Precision engineering for Africa’s future.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/services#civil-engineering">Civil Engineering</Link>
            </li>
            <li>
              <Link href="/services#structural-design">
                Structural Design
              </Link>
            </li>
            <li>
              <Link href="/services#project-management">
                Project Management
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
            Projects
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/projects">All Works</Link>
            </li>
            <li>
              <Link href="/projects?category=Infrastructure">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link href="/projects?category=Commercial">Commercial</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
            Connect
          </h4>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-bronze">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-bronze">
              <Instagram size={18} />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-bronze transition-colors"
          >
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}