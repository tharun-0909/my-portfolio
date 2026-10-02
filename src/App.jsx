import React from "react";

const projects = [
  {
    number: "01",
    name: "Amazon Recommendation System",
    category: "E-COMMERCE · PERSONALIZATION",
    description:
      "A full-stack shopping experience with secure user and admin roles, product discovery, cart and orders, plus recommendations informed by browsing and product activity.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/tharun-0909/amazon-project1",
    demo: "https://amazon-project1.vercel.app/",
    mark: "AR",
  },
  {
    number: "02",
    name: "CareConnect",
    category: "SERVICES · OPERATIONS",
    description:
      "A home-services marketplace and operations workspace for discovering providers, creating and tracking service requests, and supporting role-based workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/tharun-0909/CareConnect",
    demo: "https://care-connect-gilt-ten.vercel.app/",
    mark: "CC",
  },
  {
    number: "03",
    name: "Full-Stack Blog",
    category: "PUBLISHING · CONTENT",
    description:
      "A responsive publishing platform with role-based access, author article management, secure authentication, and image uploads powered by Cloudinary.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/tharun-0909/blogapp",
    demo: "https://blogapp-kappa-dun.vercel.app/",
    mark: "BL",
  },
];

const skills = [
  { label: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "BACKEND", items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "DATA & AUTH", items: ["MongoDB", "Mongoose", "JWT"] },
  { label: "PRODUCT", items: ["UI Design", "AI-assisted development"] },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tharun Gandla home">
          <span className="brand-mark">TG</span>
          <span>THARUN GANDLA</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              FULL-STACK DEVELOPER · MERN &amp; GENERATIVE AI
            </div>
            <h1>
              Building for
              <br />
              the <span className="accent-text">next</span> web.
            </h1>
            <p className="hero-intro">
              I&apos;m Tharun — a full-stack developer turning thoughtful ideas
              into useful, polished web experiences with the MERN stack and AI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="button button-quiet"
                href="/tharun-resume.jpg"
                download="Tharun-Gandla-Resume.jpg"
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-location">
              <span className="location-pin" aria-hidden="true">⌖</span>
              Hyderabad, India <span className="location-divider">/</span> CSE
              Undergraduate
            </div>
          </div>

          <div className="hero-art" aria-label="MERN stack developer">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="hero-core">
              <span className="core-caption">DESIGN · BUILD · SHIP</span>
              <span className="core-monogram">TG<span>.</span></span>
              <span className="core-stack">MERN STACK</span>
            </div>
            <span className="orbit-label label-top">REACT.JS</span>
            <span className="orbit-label label-right">NODE.JS</span>
            <span className="orbit-label label-bottom">MONGODB</span>
            <span className="orbit-label label-left">EXPRESS</span>
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✳</span>
            <span className="art-index">01 / 03</span>
          </div>

          <a className="scroll-cue" href="#work">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">SELECTED WORK <span>01 — 03</span></p>
              <h2>Things I&apos;ve <span className="accent-text">built.</span></h2>
            </div>
            <p className="section-note">
              Real-world projects, built end to end with the MERN stack.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual visual-${project.number}`}>
                  <span className="project-number">{project.number} / 03</span>
                  <span className="project-monogram">{project.mark}</span>
                  <span className="visual-orbit visual-orbit-one" />
                  <span className="visual-orbit visual-orbit-two" />
                  <span className="visual-cross">+</span>
                  <span className="visual-caption">FULL-STACK APPLICATION</span>
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list" aria-label="Technologies used">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live project <Arrow diagonal />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Source code <Arrow diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-intro">
            <p className="section-kicker">A LITTLE ABOUT ME <span>02 — 03</span></p>
            <h2>Curious by nature.<br /><span className="accent-text">Builder by choice.</span></h2>
            <p className="about-copy">
              I&apos;m a Computer Science student at Anurag University who enjoys
              taking a product from its first idea to a working, deployed
              application. I build across the stack, care about the details of
              the user experience, and explore how generative AI can make
              building better software even more effective.
            </p>
            <a className="text-link" href="mailto:tharungandla06@gmail.com">
              More than a project? Let&apos;s connect <Arrow diagonal />
            </a>
          </div>

          <div className="skills-panel">
            <div className="skills-panel-heading">
              <span>MY TOOLKIT</span>
              <span className="panel-spark">✳</span>
            </div>
            {skills.map((group) => (
              <div className="skill-row" key={group.label}>
                <span className="skill-label">{group.label}</span>
                <div className="skill-items">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
            <div className="skills-footnote">
              <span className="status-dot" /> ALWAYS LEARNING, ALWAYS BUILDING
            </div>
          </div>
        </section>

        <section className="journey-section section-wrap" id="experience">
          <div className="section-heading journey-heading">
            <div>
              <p className="section-kicker">THE JOURNEY SO FAR <span>03 — 03</span></p>
              <h2>Learning by <span className="accent-text">doing.</span></h2>
            </div>
            <p className="section-note">Growing through study, collaboration, and hands-on work.</p>
          </div>
          <div className="journey-list">
            <article className="journey-item">
              <div className="journey-date">MAY — JUN 2026</div>
              <div className="journey-marker"><span /></div>
              <div className="journey-details">
                <p className="journey-type">INTERNSHIP <span>· 2 MONTHS</span></p>
                <h3>Full Stack Developer Intern</h3>
                <p className="journey-place">Suntek Corp</p>
                <p className="journey-description">
                  Built and maintained MERN stack features, connected React
                  interfaces to REST APIs, implemented JWT authentication, and
                  collaborated on real-world development workflows.
                </p>
              </div>
            </article>
            <article className="journey-item">
              <div className="journey-date">2023 — 2028</div>
              <div className="journey-marker"><span /></div>
              <div className="journey-details">
                <p className="journey-type">EDUCATION <span>· IN PROGRESS</span></p>
                <h3>B.Tech, Computer Science &amp; Engineering</h3>
                <p className="journey-place">Anurag University · Hyderabad</p>
                <p className="journey-description">
                  Third-year CSE student. Expected graduation: May 2028.
                </p>
              </div>
            </article>
            <article className="journey-item">
              <div className="journey-date">2026 — ONGOING</div>
              <div className="journey-marker"><span /></div>
              <div className="journey-details">
                <p className="journey-type">CERTIFICATIONS</p>
                <h3>AI Tools Workshop <span className="cert-provider">· be10X</span></h3>
                <p className="journey-place">Additional certifications in progress</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <p className="section-kicker">HAVE SOMETHING IN MIND?</p>
          <h2>Let&apos;s make<br /><span className="accent-text">it happen.</span></h2>
          <p className="contact-copy">
            Have a project, an opportunity, or just want to talk tech? My inbox
            is always open.
          </p>
          <a className="button button-primary contact-button" href="mailto:tharungandla06@gmail.com">
            Say hello <Arrow diagonal />
          </a>
          <a className="contact-email" href="mailto:tharungandla06@gmail.com">
            tharungandla06@gmail.com
          </a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">TG</span>
          <span>THARUN GANDLA</span>
        </a>
        <span className="footer-note">DESIGNED &amp; BUILT WITH CARE · 2026</span>
        <div className="footer-links">
          <a href="https://github.com/tharun-0909" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a href="https://www.linkedin.com/in/tharun-patel-g-694b6233a/?isSelfProfile=true" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href="mailto:tharungandla06@gmail.com">Email <Arrow diagonal /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
