import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./SocialIcons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div>
            <a href="#home" className="footer-brand">Meron Bimrew<span>.</span></a>
            <p>Computer Science Graduate & Frontend Developer</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/meronbimrew625-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={19} /></a>
            <a href="https://www.linkedin.com/in/meron-bimrew-51a941403/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={19} /></a>
            <a href="mailto:meronbimrew625@gmail.com" aria-label="Email"><Mail size={19} /></a>
            <a href="#home" aria-label="Back to top"><ArrowUp size={19} /></a>
          </div>
        </div>
        <p className="copyright">© 2026 Meron Bimrew. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
