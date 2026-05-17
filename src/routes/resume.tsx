import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <div className="page-wrapper">
      <div className="section">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label animate-fade-up">Career</p>
          <h1 className="section-title animate-fade-up-1" style={{ marginBottom: '0.5rem' }}>Resume</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
            Rugved Bader &nbsp;·&nbsp; Leverkusen, Germany &nbsp;·&nbsp; Robotics System Designer
          </p>
          <a
            href="mailto:rugved.bader@example.com"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Summary */}
        <div className="card animate-fade-up-2" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--neon)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>
            Career Summary
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, fontSize: '0.95rem' }}>
              Robotics System Designer specializing in reinforcement learning, simulation environments, and autonomous navigation. Currently completing a Master's thesis at INVITE GmbH where I build RL pipelines for robotic grasping in NVIDIA Isaac Sim & Isaac Lab. Experienced with ROS2 Nav2, SLAM, USD workflows, and modular hardware/software system design. Passionate about bridging simulation and real-world deployment.
            </p>
            <img
              src="/headshot-on-white.jpg"
              alt="Rugved Bader"
              style={{ width: '100px', height: '120px', borderRadius: '0.5rem', objectFit: 'cover', border: '1px solid var(--border)', flexShrink: 0 }}
            />
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">Experience</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Work History</h2>
          <div className="section-divider" />
          <div className="timeline">
            {jobs.map((job) => (
              <div key={`${job.company}-${job.jobTitle}`} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-title">{job.jobTitle}</div>
                    <div className="timeline-org">{job.company} &nbsp;·&nbsp; {job.location}</div>
                  </div>
                  <span className="timeline-date">
                    {job.startDate} – {job.endDate || 'Present'}
                  </span>
                </div>
                <p className="timeline-body">{job.summary}</p>
                <div className="timeline-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">Background</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Education</h2>
          <div className="section-divider" />
          <div className="timeline">
            {allEducations.map((edu) => (
              <div key={edu.school} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-title">{edu.school}</div>
                    <div className="timeline-org">{edu.summary}</div>
                  </div>
                  <span className="timeline-date">
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </div>
                <div className="timeline-tags">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="section-label">Expertise</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Technical Skills</h2>
          <div className="section-divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
            {[
              'Isaac Sim', 'Isaac Lab', 'NVIDIA Omniverse', 'USD Assets',
              'ROS2', 'Nav2', 'SLAM', 'Gazebo',
              'Reinforcement Learning', 'PPO', 'SAC', 'TD3',
              'Digital Twins', 'Python', 'System Design', 'Troubleshooting',
            ].map((skill) => (
              <div key={skill} className="skill-item">
                <span className="skill-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="site-footer">
        © {new Date().getFullYear()} Rugved Bader · Leverkusen, Germany
      </footer>
    </div>
  )
}
