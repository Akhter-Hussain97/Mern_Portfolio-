import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with MongoDB · Express · React · Node</span>
      </div>
    </footer>
  );
}
