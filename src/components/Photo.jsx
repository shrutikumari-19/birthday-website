import { useContext, useState } from 'react';
import Ctx from './Ctx';
import { photos } from '../data/content';
export default function Photo({ id, kind = 'polaroid', tilt = 0 }) {
  const { openPhoto } = useContext(Ctx);
  const p = photos[id - 1];
  const [bad, setBad] = useState(false);
  return (
    <figure className={`photo ${kind}`} style={{ '--tilt': `${tilt}deg` }} onClick={() => openPhoto(p)} tabIndex={0}
      role="button" aria-label={`View photo: ${p.caption}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPhoto(p)}>
      {kind === 'tape' && <span className="washi" />}
      {bad ? <div className="ph">📷<small>A memory to keep ♡</small></div>
        : <img src={p.src} alt={p.caption} loading="lazy" onError={() => setBad(true)} />}
      <figcaption>{p.caption}</figcaption>
    </figure>
  );
}
