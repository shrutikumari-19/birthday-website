import { useContext, useEffect, useState } from 'react';
import Ctx from './Ctx';
import { settings } from '../data/content';

export default function Music() {
  const { audio } = useContext(Ctx);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const element = audio.current;
    const sync = () => setPlaying(!element.paused);
    const fail = () => { setPlaying(false); setError('Music file unavailable'); };
    element.addEventListener('play', sync);
    element.addEventListener('pause', sync);
    element.addEventListener('ended', sync);
    element.addEventListener('error', fail);
    return () => {
      element.removeEventListener('play', sync);
      element.removeEventListener('pause', sync);
      element.removeEventListener('ended', sync);
      element.removeEventListener('error', fail);
    };
  }, [audio]);

  const toggle = () => {
    const element = audio.current;
    if (element.paused) {
      element.play().then(() => setError('')).catch(() => setError('Music file unavailable'));
    } else {
      element.pause();
    }
  };

  return (
    <div className="music">
      {!error && <span className="music-label">{settings.soundtrackLabel}</span>}
      {error && <span className="music-error" role="status">{error}</span>}
      <button className="music-toggle" onClick={toggle} aria-pressed={playing}
        aria-label={`${playing ? 'Pause' : 'Play'} background music`}>
        <span className={playing ? 'note spin' : 'note'} aria-hidden="true">🎵</span>
        <span className="music-state" aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
      </button>
    </div>
  );
}
