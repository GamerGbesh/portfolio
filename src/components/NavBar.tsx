import { Link } from "react-scroll";

const navLinks = [
  { to: "home",         label: "Home",         offset: -30 },
  { to: "about",        label: "About",        offset: -30 },
  { to: "technologies", label: "Tech Stack",   offset: -30 },
  { to: "skills",       label: "Skills",       offset: -60 },
  { to: "achievements", label: "Achievements", offset: -30 },
  { to: "projects",     label: "Projects",     offset:  10 },
  { to: "contact",      label: "Contact",      offset: -30 },
];

const NavBar = () => {
  return (
    <div className="hidden sm:flex justify-center w-full fixed top-0 left-0 z-50 pt-4 px-4 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-4 md:gap-6 px-5 py-2 rounded-full border shadow-2xl"
        style={{
          background: "rgba(10, 10, 16, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Logo */}
        <span
          className="font-black text-sm tracking-[0.2em] uppercase select-none pr-3 border-r"
          style={{
            borderColor: "rgba(255, 255, 255, 0.1)",
            background: "linear-gradient(135deg, #63b3ed, #b794f4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PM
        </span>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={link.offset}
              spy={true}
              activeClass="nav-link-active"
              className="cursor-pointer px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-white/55 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <style>{`
        .nav-link-active {
          color: rgba(255, 255, 255, 0.95) !important;
          background: rgba(99, 179, 237, 0.15) !important;
          border: 1px solid rgba(99, 179, 237, 0.3);
        }
      `}</style>
    </div>
  );
};

export default NavBar;
