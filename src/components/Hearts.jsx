import { useMemo } from 'react';
const E = ['💗', '🦋', '🌸', '✨', '🎀', '🌷', '💖'];
export default function Hearts() {
  const items = useMemo(() => Array.from({ length: 9 }, (_, i) => ({
    e: E[i % E.length], l: Math.random() * 100, s: 14 + Math.random() * 18, d: 12 + Math.random() * 14, w: -Math.random() * 20,
  })), []);
  return <div aria-hidden="true">{items.map((h, i) => (
    <span key={i} className="fl" style={{ left: `${h.l}%`, fontSize: h.s, animationDuration: `${h.d}s`, animationDelay: `${h.w}s` }}>{h.e}</span>
  ))}</div>;
}
