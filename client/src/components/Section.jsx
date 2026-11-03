import { useReveal } from '../hooks.js';

export default function Section({ id, eyebrow, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section">
      <div ref={ref} className="container reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
