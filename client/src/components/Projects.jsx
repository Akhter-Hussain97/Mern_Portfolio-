import { useEffect, useMemo, useState } from 'react';
import Section from './Section.jsx';
import { getProjects } from '../api.js';
import { fallbackProjects } from '../data/profile.js';

const CATS = ['All', 'React', 'JavaScript', 'HTML/CSS', 'C++'];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [cat, setCat] = useState('All');

  useEffect(() => {
    let cancelled = false;
    getProjects()
      .then((data) => !cancelled && Array.isArray(data) && data.length && setProjects(data))
      .catch(() => {}); // keep fallback data
    return () => { cancelled = true; };
  }, []);

  const shown = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [projects, cat]);

  return (
    <Section id="projects" eyebrow="03 — Projects" title="Selected work.">
      <div className="filters" role="tablist" aria-label="Filter projects">
        {CATS.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="projects">
        {shown.map((p) => (
          <article className="project" key={p._id}>
            <div className="project__top">
              <span className="badge">{p.category}</span>
              {p.featured && <span className="star" title="Featured">★</span>}
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">{p.tags?.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="project__links">
              {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
              {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer">Code ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
