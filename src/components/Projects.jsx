import { ArrowUpRight, ExternalLink, ShoppingBag, Clapperboard, Music2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    title: "Addis Eats",
    subtitle: "Food Ordering Application",
    description: "A food ordering web application where users can explore food options and place orders through a modern interface.",
    technologies: ["Next.js", "React", "JavaScript", "CSS"],
    url: "https://finalizednexjsaddiseatsproject.vercel.app/",
    Icon: ShoppingBag,
    number: "01",
  },
  {
    title: "Movie Explorer",
    subtitle: "Data-Driven Application",
    description: "A movie discovery application built with React, presenting movie information dynamically in an easy-to-explore experience.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    url: "https://movie-explorer-five-cyan.vercel.app/",
    Icon: Clapperboard,
    number: "02",
  },
  {
    title: "Ellalody",
    subtitle: "Music Player",
    description: "A music player application built with Next.js, focused on music discovery, playlists and an engaging listening experience.",
    technologies: ["Next.js", "React", "JavaScript", "CSS"],
    url: "https://ellalodymusicplayerall.vercel.app/",
    Icon: Music2,
    number: "03",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-kicker">Selected work</span>
        <h2 className="s-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of applications I have designed and developed.</p>
      </div>

      <div className="projects-container">
        {projects.map(({ title, subtitle, description, technologies, url, Icon, number }) => (
          <article className="project-card" key={title}>
            <div className="project-visual">
              <span className="project-number">{number}</span>
              <div className="project-symbol"><Icon size={48} strokeWidth={1.4} /></div>
              <span className="project-visual-caption">PROJECT / {number}</span>
            </div>

            <div className="project-content">
              <p className="project-subtitle">{subtitle}</p>
              <h3>{title}</h3>
              <p className="project-description">{description}</p>

              <div className="tags">
                {technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>

              <div className="project-actions">
                <a href={url} className="view-project" target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note"><GithubIcon size={16} /> More source code is available on my <a href="https://github.com/meronbimrew625-coder" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={14} /></a>.</p>
    </section>
  );
}

export default Projects;
