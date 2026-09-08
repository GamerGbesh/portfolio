import { Element } from "react-scroll";
import { motion } from "motion/react";
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  const phone = "+233 55 920 3950";
  const email = "peymensah@gmail.com";

  return (
    <Element name="contact">
      <div className="min-h-screen snap-start flex flex-col items-center justify-center text-white px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg z-10"
        >
          {/* gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl blur-sm opacity-30"
            style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", padding: "1px" }}
          />

          <div
            className="relative rounded-3xl p-8 md:p-10 flex flex-col items-center border"
            style={{
              background: "rgba(10, 10, 16, 0.92)",
              borderColor: "rgba(255, 255, 255, 0.09)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent text-center">
              Get In Touch
            </h2>
            <p className="text-white/45 text-sm text-center mb-8 max-w-xs">
              Open to backend engineering roles, AI/ML projects, and technical collaborations.
            </p>

            {/* Contact details */}
            <div className="w-full space-y-3 mb-8">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 hover:border-blue-500/40 group"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <FiMail className="text-blue-400 text-lg flex-shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors break-all">{email}</span>
              </a>

              <div
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <FiPhone className="text-cyan-400 text-lg flex-shrink-0" />
                <span className="text-sm text-white/60">{phone}</span>
              </div>
            </div>

            {/* CTA button */}
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white mb-8 w-full justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              }}
            >
              <FiSend className="text-base" /> Send Message
            </motion.a>

            {/* Divider */}
            <div className="divider-glow w-full mb-7" />

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <motion.a
                href="https://www.linkedin.com/in/philemon-mensah-b7124030b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center border text-white/50 hover:text-blue-400 hover:border-blue-500/40 transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                title="LinkedIn"
              >
                <FiLinkedin className="text-lg" />
              </motion.a>

              <motion.a
                href="https://github.com/GamerGbesh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center border text-white/50 hover:text-white hover:border-white/30 transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                title="GitHub"
              >
                <FiGithub className="text-lg" />
              </motion.a>

              <motion.a
                href="https://www.snapchat.com/add/gbeshko?share_id=8SPs9zxLbG8&locale=en-EN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 hover:border-yellow-400/40"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                title="Snapchat"
              >
                <img src="/assets/social/snapchat.png" alt="Snapchat" className="w-5 h-5 rounded-full" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.2, y: -2 }}
                onClick={() => alert(`My WhatsApp number is ${phone}`)}
                className="w-10 h-10 rounded-xl flex items-center justify-center border cursor-pointer transition-all duration-200 hover:border-green-400/40"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                title="WhatsApp"
              >
                <img src="/assets/social/WhatsApp.svg.webp" alt="WhatsApp" className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
