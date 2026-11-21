import { chapters } from '../data/content';
import Head from './Head';
import Photo from './Photo';
import Video from './Video';
import Cards from './Cards';
import Next from './Next';
const KINDS = { polaroid: ['polaroid'], diary: ['tape'], scatter: ['polaroid', 'tape', 'film'], letter: ['tape'], travel: ['stamp', 'polaroid'] };
const TILTS = [-4, 3, -2, 5, -3];
// One flexible chapter layout. Each chapter picks its look with "style" in content.js.
export default function Story({ n }) {
  const c = chapters[n - 1];
  const kinds = KINDS[c.style] || ['polaroid'];
  return (
    <section className={`story style-${c.style}`}>
      <Head n={n} />
      {c.quote && <blockquote className="hand quote">{c.quote}</blockquote>}
      {c.trips && <div className="trips">{c.trips.map((t, i) => <div key={i} className="stamp-card"><b>{t.place}</b><span>{t.date}</span></div>)}</div>}
      {c.text && <p>{c.text[0]}</p>}
      {c.photos.length > 0 && <div className="photos">
        {c.photos.map((id, i) => (
          <div key={id} className="pw">
            <Photo id={id} kind={kinds[i % kinds.length]} tilt={TILTS[i % 5]} />
            {c.notes && c.notes[i] && <span className="hand scribble">{c.notes[i]}</span>}
          </div>))}
      </div>}
      {c.text && c.text.slice(1).map((t, i) => <p key={i}>{t}</p>)}
      {c.list && <ul className="stickers">{c.list.map((t) => <li key={t}>{t}</li>)}</ul>}
      {c.cards && <Cards items={c.cards} />}
      {c.letter && <div className="letter hand">{c.letter.map((t, i) => <p key={i}>{t}</p>)}</div>}
      {c.videos && <div className="videos">
        {c.videoTitle && <h2 className="hand">{c.videoTitle}</h2>}
        {c.videos.map((id) => <Video key={id} id={id} />)}
      </div>}
      {c.finale && <div className="finale hand">{c.finale.map((t, i) => <p key={i}>{t}</p>)}</div>}
      <Next n={n} />
    </section>
  );
}
