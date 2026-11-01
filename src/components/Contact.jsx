import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./SocialIcons";

const contacts = [
  {
    label: "Email",
    detail: "meronbimrew625@gmail.com",
    href: "mailto:meronbimrew625@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    detail: "github.com/meronbimrew625-coder",
    href: "https://github.com/meronbimrew625-coder",
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "Connect with me professionally",
    href: "https://www.linkedin.com/in/meron-bimrew-51a941403/",
    Icon: LinkedInIcon,
    external: true,
  },
 
];

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading contact-heading">
        <span className="section-kicker">Let's connect</span>
        <h2 className="s-title">Get In Touch</h2>
        <p className="section-subtitle">Have an opportunity or a project in mind? I would be happy to hear from you.</p>
      </div>

      <div className="contact-cards">
        {contacts.map(({ label, detail, href, Icon, external }) => (
          <a
            href={href}
            className="contact-card"
            key={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            <div className="contact-icon"><Icon size={24} /></div>
            <div className="contact-card-copy">
              <h3>{label}</h3>
              <p>{detail}</p>
            </div>
            <ArrowUpRight className="contact-arrow" size={18} />
          </a>
        ))}
      </div>

      <a href="mailto:meronbimrew625@gmail.com" className="primary-button contact-cta">
        <Mail size={18} /> Send Me an Email
      </a>
    </section>
  );
}

export default Contact;
