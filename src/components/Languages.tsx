export default function Languages() {
  const languages = [
    {
      src: "/assets/languages/python-programming-language.webp",
      alt: "Python",
    },
    { src: "/assets/languages/sql.png", alt: "SQL/PostgreSQL" },
    { src: "/assets/languages/ts.png", alt: "TypeScript" },
    { src: "/assets/languages/docker.png", alt: "Docker" },
    { src: "/assets/languages/git.png", alt: "Git" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
          Technologies
        </h2>
        <p className="text-gray-400 text-base">
          Languages and tools I work with
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 max-w-5xl">
        {languages.map(({ src, alt }) => (
          <div key={alt} className="flex flex-col items-center space-y-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-800/80 p-6 rounded-2xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110">
                <img src={src} alt={alt} className="w-16 h-16 object-contain" />
              </div>
            </div>
            <span className="text-base font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
              {alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
