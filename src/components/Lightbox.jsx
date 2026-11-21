import { useEffect, useState } from 'react';
export default function Lightbox({ p, onClose }) {
  const [bad, setBad] = useState(false);
  useEffect(() => { const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);
  return (
    <div className="lb" onClick={onClose}>
      <div className="lb-in" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">✕</button>
        {bad ? <div className="ph big">📷<small>{p.name}</small></div> : <img src={p.src} alt={p.caption} onError={() => setBad(true)} />}
        <p className="hand">{p.caption}</p>
      </div>
    </div>
  );
}
