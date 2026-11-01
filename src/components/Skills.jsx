import {
  Code2, Palette, Braces, Atom, Layers3, Database, Smartphone, GitBranch
} from "lucide-react";

function Skills() {
  const skills = [
    { name: "HTML", Icon: Code2, description: "Semantic and accessible page structure" },
    { name: "CSS", Icon: Palette, description: "Responsive layouts and visual design" },
    { name: "JavaScript", Icon: Braces, description: "Interactive web experiences" },
    { name: "React", Icon: Atom, description: "Reusable component-based interfaces" },
    { name: "Next.js", Icon: Layers3, description: "Modern React application development" },
    { name: "PHP", Icon: Code2, description: "Server-side web development" },
    { name: "MySQL", Icon: Database, description: "Relational database fundamentals" },
    { name: "Git & GitHub", Icon: GitBranch, description: "Version control and collaboration" },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-kicker">What I work with</span>
        <h2 className="s-title">Technical Skills</h2>
        <p className="section-subtitle">Tools and technologies I use to build web applications.</p>
      </div>

      <div className="skills-container">
        {skills.map(({ name, Icon, description }) => (
          <article className="skill-card" key={name}>
            <div className="skill-image"><Icon size={30} strokeWidth={1.8} /></div>
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
