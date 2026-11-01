import { GraduationCap, BriefcaseBusiness, Laptop2 } from "lucide-react";

function About() {
  const highlights = [
    {
      Icon: GraduationCap,
      title: "Education",
      text: "BSc in Computer Science, Debre Tabor University (2026).",
    },
    {
      Icon: BriefcaseBusiness,
      title: "Internship Experience",
      text: "IT Division internship at Hibret Bank, with exposure to networking and IT support activities.",
    },
    {
      Icon: Laptop2,
      title: "Continuous Learning",
      text: "Currently learning Software Development at IBT School of Canada and strengthening my practical development skills.",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="section-kicker">A little about me</span>
        <h2 className="s-title">About Me</h2>
        <p className="section-subtitle">Motivated by learning, creating and solving problems through technology.</p>
      </div>

      <div className="about-intro">
        <p>
          I am a 2026 Computer Science graduate from Debre Tabor University who enjoys
          turning ideas into useful digital experiences. I focus on creating clean,
          responsive interfaces and continuously improving through hands-on projects.
        </p>
      </div>

      <div className="about-paragraphs">
        {highlights.map(({ Icon, title, text }) => (
          <article className="about-card" key={title}>
            <div className="feature-icon"><Icon size={23} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
