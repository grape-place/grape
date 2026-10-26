import { useEffect, useState } from 'react'
import { siteConfig } from './config'

const steps = [
  { title: 'Register', body: 'Choose a free online networking event and register.', position: 'left' },
  { title: 'Connect', body: 'Meet others per breakout room, then rotate into new groups.', position: 'center' },
  { title: 'Continue', body: 'Stay in touch and grow your network beyond the event.', position: 'right' },
]

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Grape — back to top">
      <span>grape</span>
      <i aria-hidden="true"><b /><b /><b /></i>
    </a>
  )
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 18 18 6M9 6h9v9" /></svg>
}

function EventButton({ compact = false, onComingSoon }) {
  const handleClick = (event) => {
    if (siteConfig.lumaEventsUrl.startsWith('#')) {
      event.preventDefault()
      onComingSoon?.()
    }
  }
  return (
    <a className={`event-button ${compact ? 'compact' : ''}`} href={siteConfig.lumaEventsUrl} onClick={handleClick}>
      See upcoming events <ArrowIcon />
    </a>
  )
}

function Doodles() {
  return <>
    <svg className="doodle rays" viewBox="0 0 70 70" aria-hidden="true"><path d="M34 5v24M7 17l17 19M62 17 47 38" /></svg>
    <svg className="doodle squiggle" viewBox="0 0 130 130" aria-hidden="true"><path d="M18 12c48 10 11 34 20 49 9 15 38 2 43 20 4 16-7 29 31 38" /></svg>
    <svg className="doodle sparks" viewBox="0 0 70 70" aria-hidden="true"><path d="M13 12 28 30M50 7 39 30M62 42 43 45" /></svg>
  </>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState(false)
  const showNotice = () => {
    setNotice(true)
    window.setTimeout(() => setNotice(false), 3600)
  }

  useEffect(() => {
    const initialiseTally = () => window.Tally?.loadEmbeds?.()
    initialiseTally()

    const tallyScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
    tallyScript?.addEventListener('load', initialiseTally)
    return () => tallyScript?.removeEventListener('load', initialiseTally)
  }, [])

  return (
    <div id="top">
      <header className="site-header page-shell">
        <Logo />
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav">
          <span /><span /><span /><span className="sr-only">Toggle menu</span>
        </button>
        <nav id="main-nav" className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <button
            type="button"
            className="contact-trigger"
            data-tally-open="kbbGJr"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            onClick={() => setMenuOpen(false)}
          >Contact</button>
          <EventButton compact onComingSoon={showNotice} />
        </nav>
      </header>

      <main>
        <section className="hero page-shell" aria-labelledby="hero-heading">
          <Doodles />
          <div className="hero-copy">
            <h1 id="hero-heading">Good<br />conversations.<br />Great<br />connections.</h1>
            <p>{siteConfig.copy.heroDescription}</p>
            <EventButton onComingSoon={showNotice} />
            <div className="event-note">
              <svg viewBox="0 0 60 56" aria-hidden="true"><path d="M52 46C22 49 13 35 16 13M16 13l-8 12M16 13l7 12" /></svg>
              <span>networking sessions<br />through the year</span>
              <i aria-hidden="true" />
            </div>
          </div>
          <div className="hero-visual">
            <img src="/illustrations/hero-laptop.png" alt="A colourful illustrated laptop showing twelve diverse people in a friendly video call" />
          </div>
        </section>

        <section className="how" id="how-it-works" aria-labelledby="how-heading">
          <div className="page-shell how-grid">
            <div className="how-intro">
              <span className="eyebrow">Simple, human, welcoming</span>
              <h2 id="how-heading">How it works</h2>
              <p>{siteConfig.copy.howIntro}</p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <span className="step-number">{index + 1}</span>
                  <div className={`step-art ${step.position}`} role="img" aria-label={`Illustration for ${step.title}: ${step.body}`} />
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about page-shell" id="about" aria-labelledby="about-heading">
          <div className="about-copy">
            <span className="eyebrow">Meet with meaning</span>
            <h2 id="about-heading">Networking that feels like a good conversation.</h2>
            <p>No travel, crowded rooms or awkward introductions. Join from anywhere in Australia and meet professionals in small, facilitated breakout rooms. Rotate between groups, share experiences and make meaningful connections — all in just one hour.</p>
          </div>
          <div className="founders" aria-label="Grape founders">
            {siteConfig.founders.map((founder, index) => (
              <article className="founder-card" key={index}>
                <div className="founder-photo" aria-label="Founder photo placeholder"><span>Photo<br />coming soon</span></div>
                <div><h3>{founder.name}</h3><p>{founder.title}</p></div>
                <a href={founder.linkedinUrl} onClick={(e) => founder.linkedinUrl === '#' && e.preventDefault()} aria-label={`LinkedIn profile for ${founder.name}`}>in</a>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer className="page-shell"><Logo /><p>Good conversations. Great connections.</p><a href="#top">Back to top ↑</a></footer>
      {notice && <div className="toast" role="status">New event dates are coming soon.</div>}
    </div>
  )
}

export default App
