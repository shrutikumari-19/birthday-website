import { chapters } from '../data/content';
export default function Head({ n, title, eyebrow, emoji }) {
  const c = n ? chapters[n - 1] : null;
  return (
    <header className="head">
      <div className="chip">{eyebrow || 'a keepsake from our story'}</div>
      <h1>{emoji || c?.emoji} {title || c?.title}</h1>
    </header>
  );
}
