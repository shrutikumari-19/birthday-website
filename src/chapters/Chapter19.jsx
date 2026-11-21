import { useState } from 'react';
import Head from '../components/Head';
import Photo from '../components/Photo';
import Video from '../components/Video';
import Next from '../components/Next';
import { chapters, birthday } from '../data/content';
export default function Chapter19() {
  const c = chapters[9];
  const [wish, setWish] = useState(false);
  const [conf, setConf] = useState([]);
  const [gift, setGift] = useState({});
  const make = () => {
    setWish(true);
    setConf(Array.from({ length: 60 }, (_, k) => ({ k, l: Math.random() * 100, d: 2 + Math.random() * 3, e: ['🎉', '💗', '✨', '🎀', '🌸'][k % 5] })));
    setTimeout(() => setConf([]), 5500);
  };
  return (
    <section className="story center">
      <Head n={10} />
      {conf.map((p) => <span key={p.k} className="conf" style={{ left: `${p.l}%`, animationDuration: `${p.d}s` }}>{p.e}</span>)}
      <div className="cake" aria-hidden="true"><i className="flame" /><b className="c1" /><b className="c2" /><b className="c3" /></div>
      <p className="hand big-hand">{birthday.closing}</p>
      <button className="big" onClick={make}>🌟 Make a wish</button>
      {wish && <div className="reveal hand">{birthday.wishReply}</div>}
      <div className="gifts">{birthday.wishes.map((w, i) => (
        <button key={i} className="gift" onClick={() => setGift({ ...gift, [i]: true })}>{gift[i] ? <span className="hand">{w}</span> : '🎁'}</button>))}</div>
      <div className="photos">{c.photos.map((id, i) => <Photo key={id} id={id} kind={i ? 'tape' : 'polaroid'} tilt={i ? 3 : -3} />)}</div>
      <div className="videos">{c.videos.map((id) => <Video key={id} id={id} />)}</div>
      <Next n={10} />
    </section>
  );
}
