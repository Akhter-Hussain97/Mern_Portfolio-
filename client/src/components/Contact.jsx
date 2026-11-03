import { useState } from 'react';
import Section from './Section.jsx';
import { profile } from '../data/profile.js';
import { sendMessage } from '../api.js';

const empty = { name: '', email: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({ status: 'idle', text: '' });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setErrors({});
    setState({ status: 'sending', text: '' });
    try {
      const res = await sendMessage(form);
      setState({ status: 'ok', text: res.message });
      setForm(empty);
    } catch (err) {
      setErrors(err.fields || {});
      setState({ status: 'error', text: Object.keys(err.fields || {}).length ? 'Please fix the highlighted fields.' : err.message });
    }
  }

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's build something.">
      <div className="contact">
        <div className="contact__info">
          <p>Have a project, an internship or just a question? My inbox is open.</p>
          <ul>
            <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span>WhatsApp</span><a href={profile.whatsapp} target="_blank" rel="noreferrer">{profile.phone}</a></li>
            <li><span>GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">Akhter-Hussain97</a></li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <label>
            Name
            <input value={form.name} onChange={set('name')} autoComplete="name" placeholder="Your name" required aria-invalid={!!errors.name} />
            {errors.name && <small className="err">{errors.name}</small>}
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com" required aria-invalid={!!errors.email} />
            {errors.email && <small className="err">{errors.email}</small>}
          </label>
          <label>
            Message
            <textarea rows="5" value={form.message} onChange={set('message')} placeholder="How can I help?" required aria-invalid={!!errors.message} />
            {errors.message && <small className="err">{errors.message}</small>}
          </label>
          {/* honeypot: hidden from people, tempting to bots */}
          <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" value={form.website} onChange={set('website')} name="website" />
          <button className="btn btn--primary" disabled={state.status === 'sending'}>
            {state.status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className={`form__status ${state.status}`} role="status">{state.text}</p>
        </form>
      </div>
    </Section>
  );
}
