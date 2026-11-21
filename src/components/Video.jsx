import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Ctx from './Ctx';
import { videos } from '../data/content';
export default function Video({ id, frame = '' }) {
  const { setVideoActive } = useContext(Ctx);
  const v = videos[id - 1];
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState('');
  const handlePlay = useCallback(() => {
    setPlaying(true);
    setError('');
    setVideoActive(id, true);
  }, [id, setVideoActive]);
  const handleStop = useCallback(() => {
    setPlaying(false);
    setVideoActive(id, false);
  }, [id, setVideoActive]);
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handleStop);
    video.addEventListener('ended', handleStop);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handleStop);
      video.removeEventListener('ended', handleStop);
      if (!video.paused && !video.ended) video.pause();
      setVideoActive(id, false);
    };
  }, [handlePlay, handleStop, id, setVideoActive]);
  const play = () => ref.current.play().catch(() => setError('This video could not be played.'));
  return (
    <figure className={`video ${frame}`}>
      <span className="sticker s1">🎀</span><span className="sticker s2">🌸</span>
      <div className="vbox">
        {(!playing || error) && <div className="vlabel">🎬<small>{error || v.caption}</small></div>}
        <video ref={ref} src={v.src} preload="none" controls={playing} playsInline
          onError={() => setError('This little memory is not available right now.')} />
        {!playing && !error && <button className="heart-play" onClick={play} aria-label={`Play ${v.caption}`}>❤</button>}
      </div>
      <figcaption><b>{v.caption}</b><span>{v.description}</span></figcaption>
    </figure>
  );
}
