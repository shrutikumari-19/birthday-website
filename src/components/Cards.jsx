import { useState } from 'react';
export default function Cards({ items }) {
  const [open, setOpen] = useState({});
  return <div className="cards">{items.map((c, i) => (
    <button key={i} className={`card ${open[i] ? 'open' : ''}`} onClick={() => setOpen({ ...open, [i]: !open[i] })}>
      {open[i] ? <span className="hand">{c.back}</span> : <b>{c.front}</b>}
    </button>))}</div>;
}
