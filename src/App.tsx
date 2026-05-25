import coverPhoto from './assets/gabriel-cover.jpeg'
import './App.css'

const contacts = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5555991382404',
    icon: 'WA',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-gemelli/',
    icon: 'in',
  },
  {
    label: 'E-mail',
    href: 'mailto:gemelligabriel380@gmail.com',
    icon: '@',
  },
]

type SkillIconName = 'java' | 'python' | 'html' | 'css' | 'javascript' | 'git'

const skills: { name: string; icon: SkillIconName }[] = [
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Git', icon: 'git' },
]

const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Fluent' },
]

const projects = [
  {
    title: 'Calculator',
    description:
      'A calculator project focused on clean interface logic, basic operations, and consistent user interaction.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/gemelligabriel/Calculadora',
  },
  {
    title: 'Weather Forecast',
    description:
      'A weather forecast application that practices consuming weather data and presenting useful information clearly.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/gemelligabriel/Previsao-do-Tempo',
  },
  {
    title: 'CRM System',
    description:
      'A customer relationship management project focused on organizing contacts, workflow, and business data in a clear interface.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/gemelligabriel/crm-system',
  },
]

function SkillIcon({ icon }: { icon: SkillIconName }) {
  if (icon === 'java') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-steam" d="M28 9c8 7-8 10 1 17 6 5 14 7 4 16" />
        <path className="icon-steam" d="M38 6c7 8-7 10 1 17" />
        <path className="icon-fill warm" d="M18 38h28l-4 15H22z" />
        <path className="icon-line" d="M18 38h28l-4 15H22zM46 41h5c4 0 4 8-3 8h-4" />
        <path className="icon-line" d="M18 56c8 4 24 4 32-1" />
      </svg>
    )
  }

  if (icon === 'python') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-fill blue" d="M18 12h22a8 8 0 0 1 8 8v8H28a8 8 0 0 0-8 8v4H10V20a8 8 0 0 1 8-8z" />
        <path className="icon-fill yellow" d="M46 52H24a8 8 0 0 1-8-8v-8h20a8 8 0 0 0 8-8v-4h10v20a8 8 0 0 1-8 8z" />
        <path className="icon-line" d="M18 12h22a8 8 0 0 1 8 8v8H28a8 8 0 0 0-8 8v4H10V20a8 8 0 0 1 8-8zM46 52H24a8 8 0 0 1-8-8v-8h20a8 8 0 0 0 8-8v-4h10v20a8 8 0 0 1-8 8z" />
        <circle cx="24" cy="20" r="2.5" />
        <circle cx="40" cy="44" r="2.5" />
      </svg>
    )
  }

  if (icon === 'html' || icon === 'css') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className={`icon-fill ${icon === 'html' ? 'coral' : 'blue'}`} d="M14 9h36l-4 43-14 5-14-5z" />
        <path className="icon-line" d="M14 9h36l-4 43-14 5-14-5z" />
        <path className="icon-line" d={icon === 'html' ? 'M23 22h18M24 32h15l-1 11-6 2-6-2' : 'M23 22h19l-2 10H26l-1 10 7 3 7-3 1-5'} />
        <text x="32" y="20" textAnchor="middle" className="icon-text">
          {icon === 'html' ? '5' : '3'}
        </text>
      </svg>
    )
  }

  if (icon === 'javascript') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-fill yellow" d="M12 12h40v40H12z" />
        <path className="icon-line" d="M12 12h40v40H12z" />
        <text x="32" y="42" textAnchor="middle" className="icon-text big">
          JS
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path className="icon-fill coral" d="M32 7 57 32 32 57 7 32z" />
      <path className="icon-line" d="M32 7 57 32 32 57 7 32z" />
      <path className="icon-line" d="M24 24l16 16M32 32V20M32 32h11" />
      <circle cx="24" cy="24" r="4" />
      <circle cx="32" cy="32" r="4" />
      <circle cx="43" cy="32" r="4" />
    </svg>
  )
}

function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path className="brand-mark-shadow" d="M12 11h36a7 7 0 0 1 7 7v36H19a7 7 0 0 1-7-7z" />
      <path className="brand-mark-bg" d="M8 7h36a7 7 0 0 1 7 7v36H15a7 7 0 0 1-7-7z" />
      <path className="brand-mark-line" d="M8 7h36a7 7 0 0 1 7 7v36H15a7 7 0 0 1-7-7z" />
      <text x="27" y="40" textAnchor="middle" className="brand-mark-letter">
        G
      </text>
      <path className="brand-mark-code" d="M43 24l6 5-6 5" />
    </svg>
  )
}

function App() {
  return (
    <main className="portfolio-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a href="#home" className="brand-link" aria-label="Go to home">
          <BrandMark />
        </a>
        <div className="nav-actions">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Junior Developer | PUCRS Software Engineering</p>
          <h1>Gabriel Gemelli Bonadiman</h1>
          <div className="intro-text">
            <p>
              Hi, my name is Gabriel Gemelli Bonadiman and I am a junior
              developer passionate about technology, problem solving, and
              continuous learning.
            </p>
            <p>
              I enjoy building modern web applications, exploring new
              technologies, and improving my skills in both frontend and backend
              development.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Contact me
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/gemelligabriel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="photo-stage" aria-label="Gabriel profile photo">
          <div className="orbit orbit-one" aria-hidden="true"></div>
          <div className="orbit orbit-two" aria-hidden="true"></div>
          <figure className="photo-card">
            <img src={coverPhoto} alt="Gabriel Gemelli Bonadiman wearing a suit" />
            <figcaption>
              <span>Available for junior roles</span>
              <strong>Frontend + Backend learner</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="info-band about-band">
        <div>
          <p className="section-kicker">About</p>
          <h2>Curious, adaptable, and building momentum.</h2>
        </div>
        <p>
          I study Software Engineering at PUCRS and bring an international
          perspective from a one-year High School exchange program in the United
          States. I work comfortably across Portuguese, English, and Spanish.
        </p>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Main Techs</p>
          <h2>Tools I use to build and learn</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <button className="skill-token" type="button" key={skill.name}>
              <span className="skill-icon">
                <SkillIcon icon={skill.icon} />
              </span>
              {skill.name}
            </button>
          ))}
        </div>
      </section>

      <section className="language-section">
        <div className="section-heading">
          <p className="section-kicker">Languages</p>
          <h2>Communication range</h2>
        </div>
        <div className="language-grid">
          {languages.map((language) => (
            <article className="language-card" key={language.name}>
              <span>{language.name}</span>
              <strong>{language.level}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer">
                View project
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>How to reach me</h2>
        </div>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              className="contact-card"
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              key={contact.label}
            >
              <span>{contact.icon}</span>
              {contact.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
