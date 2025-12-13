import { Element } from "react-scroll";
import { motion } from "motion/react";

function Home() {
  return (
    <Element name="home">
      <div className="min-h-screen snap-start flex items-center justify-center text-white home relative">
        <div className="absolute inset-0 z-0 animate-bgSymbols pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute text-white text-opacity-10 text-2xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                fontFamily: "monospace",
              }}
            >
              {
                ["{", "}", "<", ">", "(", ")", ";", "/"].sort(
                  () => 0.5 - Math.random()
                )[0]
              }
            </span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center px-6 z-10 max-w-4xl"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
            <img
              src="/assets/Me.jpg"
              alt="Philemon Mensah profile"
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-blue-500 shadow-2xl hover:scale-105 hover:border-purple-500 transition-all duration-500"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x mb-4">
            Hi, I'm <span className="text-blue-400">Philemon</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Backend Engineer & AI Systems Developer
            </span>
            <br />
            <span className="text-base text-gray-400 mt-2 block">
              Building production data pipelines, RAG systems, and scalable APIs
            </span>
          </p>
          <motion.a
            href="/docs/Mensah Philemon's CV.pdf"
            download
            title={"Philemon's CV"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-2xl font-bold text-base transition-all duration-300 hover:shadow-blue-500/50"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </Element>
  );
}

export default Home;
