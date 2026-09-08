import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  link: string;
  category: string;
  title: string;
  image: string;
  description?: string;
  tech?: string[];
}

export default function ProjectCard({ link, category, title, image, description, tech }: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full group block"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div
        className="relative w-full min-h-96 rounded-2xl overflow-hidden flex flex-col border transition-all duration-400"
        style={{
          background: "linear-gradient(160deg, rgba(13,13,20,0.98), rgba(18,18,30,0.95))",
          borderColor: "rgba(255,255,255,0.07)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
        }}
      >
        {/* Hover glow border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1px rgba(99,179,237,0.3), 0 8px 40px rgba(99,179,237,0.12)" }} />

        {/* Image */}
        <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-black/20 to-transparent" />

          {/* hover overlay */}
          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
            <span className="flex items-center gap-2 text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              <FiExternalLink className="text-lg" /> View Project
            </span>
          </div>

          {/* Category pill */}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(5,5,8,0.75)", color: "rgba(99,179,237,0.9)", border: "1px solid rgba(99,179,237,0.2)", backdropFilter: "blur(8px)" }}>
            {category}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-base font-bold text-white/90 leading-snug mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-white/45 leading-relaxed">{description}</p>
            )}
          </div>

          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}
