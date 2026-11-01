import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./SocialIcons";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
        <p className="hero-intro">Hello, I'm</p>
        <h1>Meron Bimrew</h1>
        <h2>Frontend Developer</h2>

        <p className="description">
          I am a Computer Science graduate passionate about building modern,
          responsive and user-friendly web applications with React and Next.js.
        </p>

        <div className="hero-meta">
          <span>2026 Computer Science Graduate</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">Get In Touch <ArrowUpRight size={18} /></a>
          <a href="#projects" className="secondary-button">Explore Projects <ArrowDown size={17} /></a>
        </div>

        <div className="hero-socials" aria-label="Social links">
          <a href="https://github.com/meronbimrew625-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
          <a href="https://www.linkedin.com/in/meron-bimrew-51a941403/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={20} /></a>
          <a href="mailto:meronbimrew625@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-orbit">
          <div className="profile-circle">
            <img src={profile} alt="Portrait of Meron Bimrew" />
          </div>
          <div className="orbit-label"><span /> Frontend Developer</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
