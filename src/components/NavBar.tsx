import { Link } from "react-scroll";

const navLinks = [
  { to: "home", label: "Home", offset: -30 },
  { to: "about", label: "About Me", offset: -30 },
  { to: "skills", label: "Skills", offset: -60 },
  { to: "achievements", label: "Achievements", offset: -30 },
  { to: "projects", label: "Projects", offset: 10 },
  { to: "contact", label: "Contact", offset: -30 },
];

const NavBar = () => {
  return (
    <div className="hidden sm:flex justify-center w-full fixed top-0 left-0 z-50">
      <div className="flex items-center w-full max-w-5xl mx-auto px-6 py-3 mt-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
        {/* Logo/Initials */}
        <div className="mr-8 font-bold text-lg tracking-widest text-blue-400 drop-shadow-lg select-none">
          PM
        </div>
        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-sm sm:text-base font-medium w-full">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={link.offset}
              spy={true}
              activeClass="text-blue-400 border-b-2 border-blue-400"
              className="cursor-pointer hover:text-blue-400 transition-all duration-300 px-1 pb-0.5 border-b-2 border-transparent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
