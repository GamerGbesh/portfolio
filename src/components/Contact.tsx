import { Element } from "react-scroll";
import { motion } from "motion/react";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact() {
  const phone = "+233 55 920 3950";
  const email = "peymensah@gmail.com";

  return (
    <Element name="contact">
      <div className="min-h-screen snap-start flex flex-col items-center justify-center text-white px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 md:p-10 flex flex-col items-center hover:border-blue-500/50 transition-all duration-500"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <h3 className="text-lg md:text-xl mb-5 text-gray-400 text-center">
            Let's build something amazing together
          </h3>
          <p className="text-center max-w-xl mb-6 text-gray-300 leading-relaxed text-sm">
            Open to backend engineering roles, AI/ML projects, and technical
            collaborations. Feel free to reach out for opportunities or just to
            connect!
          </p>

          <div className="w-full mb-6 space-y-3 bg-gray-800/50 rounded-2xl p-5 border border-gray-700/30">
            <div className="flex items-center gap-3 text-base">
              <FiMail className="text-blue-400 text-xl flex-shrink-0" />
              <a
                href={`mailto:${email}`}
                className="text-gray-200 hover:text-blue-400 transition-colors duration-200 break-all"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-base">
              <FiPhone className="text-green-400 text-xl flex-shrink-0" />
              <span className="text-gray-200">{phone}</span>
            </div>
          </div>

          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full mb-8 font-bold text-base shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 flex items-center gap-2"
          >
            <FiMessageCircle className="text-lg" /> Send Message
          </motion.a>

          <div className="flex space-x-6 mt-2">
            <motion.a
              href="https://www.linkedin.com/in/philemon-mensah-b7124030b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-3xl"
              title="LinkedIn"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/GamerGbesh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-3xl"
              title="GitHub"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://www.snapchat.com/add/gbeshko?share_id=8SPs9zxLbG8&locale=en-EN"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:opacity-80 transition-opacity duration-200"
              title="Snapchat"
            >
              <img
                src="/assets/social/snapchat.png"
                alt="Snapchat"
                className="w-8 h-8 rounded-full"
              />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:opacity-80 transition-opacity duration-200 bg-transparent border-none p-0 cursor-pointer"
              onClick={() => {
                alert(`My WhatsApp number is ${phone}`);
              }}
              title="WhatsApp"
            >
              <img
                src="/assets/social/WhatsApp.svg.webp"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
