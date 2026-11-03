import { profile } from '../data/profile.js';
import { useTyped } from '../hooks.js';

export default function Hero() {
  const typed = useTyped(profile.roles);
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="status"><span className="dot" /> Open to junior &amp; internship roles</p>
          <h1>
            Hi, I'm <em>{profile.name}</em>.
          </h1>
          <p className="typed" aria-live="off">
            I build <span>{typed}</span><i className="caret" />
          </p>
          <p className="lede">{profile.tagline}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">Get in touch</a>
            <a className="btn" href={profile.resume} download="Akhter-Hussain-CV.pdf">Download CV</a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <figure className="hero__photo">
          <img src="/akhter.jpg" alt="Portrait of Akhter Hussain" width="560" height="560" />
          <figcaption>Sargodha, PK</figcaption>
        </figure>
      </div>
    </section>
  );
}
