import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
          <CheckCircle size={56} style={{ color: 'var(--neon)', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Message Sent!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn-outline">
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <div className="section">
        <p className="section-label animate-fade-up">Say Hello</p>
        <h1 className="section-title animate-fade-up-1">Contact</h1>
        <div className="section-divider animate-fade-up-1" />

        <div className="contact-grid animate-fade-up-2">
          {/* Left: info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm actively looking for robotics engineering roles in NRW, Germany. If you're working on automation, simulation, or RL-driven robotics — I'd love to talk.
            </p>

            <div className="social-links">
              <a href="mailto:rugved.bader@example.com" className="social-link">
                <Mail size={18} />
                rugved.bader@example.com
              </a>
              <a
                href="https://linkedin.com/in/rugvedbader"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={18} />
                linkedin.com/in/rugvedbader
              </a>
              <a
                href="https://github.com/rugvedbader"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={18} />
                github.com/rugvedbader
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(
                  formData as unknown as Record<string, string>,
                ).toString(),
              }).then(() => setSubmitted(true))
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" required className="form-input" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" name="subject" className="form-input" placeholder="What's this about?" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" required rows={6} className="form-input" placeholder="Your message..." />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} Rugved Bader · Leverkusen, Germany
      </footer>
    </div>
  )
}
