import { FiExternalLink } from "react-icons/fi";

interface Props {
  link: string;
  category: string;
  title: string;
  image: string;
  description?: string;
  tech?: string[];
}

export default function ProjectCard({
  link,
  category,
  title,
  image,
  description,
  tech,
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full group block"
    >
      <div className="relative w-full min-h-96 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 flex flex-col hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
            <span className="flex items-center gap-2 text-white text-base font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <FiExternalLink className="text-xl" /> View Project
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 text-white flex-1 flex flex-col justify-between">
          <div>
            <p className="text-xs text-blue-400 uppercase tracking-wider mb-1.5 font-semibold">
              {category}
            </p>
            <h3 className="text-lg font-bold leading-tight text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                {description}
              </p>
            )}
          </div>

          {/* Tech Stack Tags */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-700/50">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium bg-blue-950/50 text-blue-300 rounded-lg border border-blue-800/40 hover:border-blue-600/60 hover:bg-blue-900/50 transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
