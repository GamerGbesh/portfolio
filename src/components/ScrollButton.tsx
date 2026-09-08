import { Link } from "react-scroll";

export default function ScrollButton() {
  return (
    <Link to="home" smooth duration={500} offset={-30}>
      <button
        className="fixed right-6 bottom-6 w-10 h-10 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 z-40"
        style={{
          background: "rgba(13,13,20,0.85)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
        title="Back to top"
      >
        ↑
      </button>
    </Link>
  );
}
