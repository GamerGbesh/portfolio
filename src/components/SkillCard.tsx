interface Props {
  name: string;
  description: string;
  image: string;
}

export default function SkillCard({ name, description, image }: Props) {
  return (
    <div className="w-full sm:w-11/12 lg:w-4/5 mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl flex flex-col md:flex-row items-center overflow-hidden shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-purple-500/20 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative p-6 md:p-5 flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <img
            src={image}
            alt={name}
            className="w-24 h-24 md:w-20 md:h-20 rounded-full shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10 border-2 border-gray-700/50 group-hover:border-blue-500/50"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:py-5 md:pr-6 md:pl-0 text-center md:text-left flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
          {name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
