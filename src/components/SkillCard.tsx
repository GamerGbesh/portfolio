import { motion } from "motion/react";

interface Props {
  name: string;
  description: string;
  image: string;
}

export default function SkillCard({ name, description, image }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full sm:w-11/12 lg:w-4/5 mx-auto rounded-2xl flex flex-col md:flex-row items-center overflow-hidden border group"
      style={{
        background: "linear-gradient(135deg, rgba(13,13,20,0.95), rgba(18,18,30,0.9))",
        borderColor: "rgba(255,255,255,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Image */}
      <div className="relative p-6 md:p-7 flex-shrink-0">
        {/* glow disc */}
        <div className="absolute inset-0 m-auto w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{ background: "radial-gradient(circle, rgba(99,179,237,0.5), rgba(183,148,244,0.3))" }} />
        <div className="relative p-[2px] rounded-full"
          style={{ background: "linear-gradient(135deg,rgba(99,179,237,0.4),rgba(183,148,244,0.4))" }}>
          <img
            src={image}
            alt={name}
            className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-full object-cover bg-gray-900 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 md:py-6 md:pr-8 md:pl-2 text-center md:text-left border-t md:border-t-0 md:border-l"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <h3 className="text-lg font-bold text-white mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent">
          {name}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
