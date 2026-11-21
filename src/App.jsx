import { useCallback, useRef, useState } from 'react';
import Ctx from './components/Ctx';
import chapters from './chapters';
import { settings } from './data/content';
import Hearts from './components/Hearts';
import Music from './components/Music';
import Lightbox from './components/Lightbox';
import './styles/main.css';
export default function App() {
  const [i, setI] = useState(0);
  const [lb, setLb] = useState(null);
  const audio = useRef(null);
  const activeVideos = useRef(new Set());
  const previousVolume = useRef(1);
  const go = (n) => { setI(Math.max(0, Math.min(chapters.length - 1, n))); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const setVideoActive = useCallback((id, active) => {
    const element = audio.current;
    if (!element) return;
    const playing = activeVideos.current;
    if (active) {
      if (playing.has(id)) return;
      if (playing.size === 0) previousVolume.current = element.volume;
      playing.add(id);
      element.volume = 0.1;
    } else if (playing.delete(id) && playing.size === 0) {
      element.volume = previousVolume.current;
    }
  }, []);
  const Page = chapters[i];
  return (
    <Ctx.Provider value={{ i, go, audio, openPhoto: setLb, setVideoActive }}>
      <div className={`app t${(i % 8) + 1}`}>
        <audio ref={audio} src={settings.music} loop preload="none" />
        <Hearts />
        <main className="page" key={i}><Page /></main>
        {i > 0 && <nav className="nav"><button onClick={() => go(i - 1)}>← Back</button></nav>}
        <Music />
        {lb && <Lightbox p={lb} onClose={() => setLb(null)} />}
      </div>
    </Ctx.Provider>
  );
}
