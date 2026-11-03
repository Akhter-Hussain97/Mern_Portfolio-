import Section from './Section.jsx';
import { education } from '../data/profile.js';

export default function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Where I've studied.">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.degree} className={e.current ? 'current' : ''}>
            <span className="timeline__years">{e.years}{e.current && <b> · In progress</b>}</span>
            <h3>{e.degree}</h3>
            <p>{e.place}</p>
            <span className="score">{e.score}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
