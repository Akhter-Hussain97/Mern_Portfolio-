import Section from './Section.jsx';
import { skills } from '../data/profile.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="The toolbox.">
      <div className="cards3">
        {skills.map((g) => (
          <article className="card" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
