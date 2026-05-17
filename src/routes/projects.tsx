import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Github, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="page-wrapper">
      <div className="section">
        <p className="section-label animate-fade-up">Portfolio</p>
        <h1 className="section-title animate-fade-up-1">Projects</h1>
        <div className="section-divider animate-fade-up-1" />
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.7 }}>
          A collection of robotics, simulation, and RL projects spanning digital twins, autonomous navigation, and reinforcement learning pipelines.
        </p>

        <div className="projects-grid">
          {allProjects.map((project) => (
            <div key={project._meta.path} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} Rugved Bader · Leverkusen, Germany
      </footer>
    </div>
  )
}
