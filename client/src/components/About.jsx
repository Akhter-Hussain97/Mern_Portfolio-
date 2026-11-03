import Section from './Section.jsx';
import { profile, extras } from '../data/profile.js';

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Developer by craft, engineer by training.">
      <div className="about">
        <div className="about__text">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="facts">
          <div><dt>Based in</dt><dd>{profile.location}</dd></div>
          <div><dt>Languages</dt><dd>{extras.languages.join(' · ')}</dd></div>
          <div><dt>Certifications</dt><dd>{extras.certifications.join(' · ')}</dd></div>
          <div><dt>Outside code</dt><dd>{extras.hobbies.join(' · ')}</dd></div>
        </dl>
      </div>
    </Section>
  );
}
