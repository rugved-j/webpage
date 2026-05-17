import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = [
  'Robotics System Design',
  'ROS2 & Nav2',
  'SLAM & Navigation',
  'Isaac Sim',
  'Isaac Lab',
  'NVIDIA Omniverse',
  'Reinforcement Learning',
  'PPO / SAC / TD3',
  'Digital Twins',
  'USD Assets',
  'Python',
  'Gazebo',
  'Modular Architecture',
  'System Troubleshooting',
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities in NRW, Germany
          </div>
          <h1 className="hero-name">
            Hi, I'm <span>Rugved Bader</span>
          </h1>
          <p className="hero-tagline">
            Robotics System Designer &nbsp;|&nbsp; RL & Simulation Specialist &nbsp;|&nbsp; Leverkusen, Germany
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: 'rgba(13,21,53,0.5)', padding: '5rem 0' }}>
        <div className="section" style={{ padding: '0 2rem' }}>
          <p className="section-label animate-fade-up">About Me</p>
          <h2 className="section-title animate-fade-up-1">Designing robots that think</h2>
          <div className="section-divider animate-fade-up-1" />
          <div className="about-grid animate-fade-up-2">
            <div className="about-text">
              <p>
                I'm a Robotics System Designer based in Leverkusen, Germany, currently completing my Master's thesis at INVITE GmbH — a Bayer AG subsidiary — where I'm building reinforcement learning pipelines for robot grasping using NVIDIA Isaac Sim and Isaac Lab.
              </p>
              <p>
                My work sits at the intersection of simulation, deep RL, and modular system architecture. I design digital twin environments, scale USD assets for Omniverse workflows, and implement and benchmark RL algorithms (PPO, SAC, TD3) to push the boundary of sim-to-real transfer.
              </p>
              <p>
                On the navigation side, I'm well-versed in ROS2 Nav2 with hands-on experience in SLAM-based mapping and autonomous path planning using Gazebo. I also enjoy community impact work — I've volunteered with AIESEC's Outgoing Global Volunteer team, connecting students with international opportunities.
              </p>
              <p>
                Outside the lab: robotics simulation, deep RL, digital twins, balcony gardening, and community development keep me busy.
              </p>
            </div>
            <img
              src="/headshot-on-white.jpg"
              alt="Rugved Bader"
              className="about-photo"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="section">
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <div className="section-divider" />
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-item">
                <span className="skill-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'rgba(13,21,53,0.5)', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Looking for a Robotics Engineer?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            I'm actively looking for opportunities with robotics companies in NRW — including Syntegon, MULTIVAC, Harro Höfliger, and Schubert. Let's build something together.
          </p>
          <div className="hero-cta">
            <Link to="/resume" className="btn-primary">View Resume</Link>
            <Link to="/contact" className="btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        © {new Date().getFullYear()} Rugved Bader · Leverkusen, Germany
      </footer>
    </>
  )
}
