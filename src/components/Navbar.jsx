import { Home, UserRound, Code2, FolderGit2, Mail, Sun, Moon } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const links = [
    { label: "Home", href: "#home", Icon: Home },
    { label: "About", href: "#about", Icon: UserRound },
    { label: "Skills", href: "#skills", Icon: Code2 },
    { label: "Projects", href: "#projects", Icon: FolderGit2 },
    { label: "Contact", href: "#contact", Icon: Mail },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="logo" href="#home" aria-label="Meron Bimrew home">MB.</a>

        <div className="nav-links">
          {links.map(({ label, href, Icon }) => (
            <a href={href} key={label}>
              <Icon size={16} strokeWidth={2} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
