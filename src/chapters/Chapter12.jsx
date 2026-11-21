import { useState } from 'react';
import Head from '../components/Head';
import Photo from '../components/Photo';
import Next from '../components/Next';
import { chapters, loveNotes, loveFinal } from '../data/content';

const BOXES = [
  { icon: '💌', label: 'a little note', tone: 'rose' },
  { icon: '🌷', label: 'a soft reminder', tone: 'cream' },
  { icon: '✨', label: 'one bright thing', tone: 'lilac' },
  { icon: '🦋', label: 'a happy thought', tone: 'blue' },
  { icon: '🎀', label: 'a tiny treasure', tone: 'pink' },
  { icon: '🍓', label: 'a sweet moment', tone: 'berry' },
  { icon: '🌙', label: 'a little wish', tone: 'night' },
  { icon: '💗', label: 'a heart to keep', tone: 'heart' },
  { icon: '🌼', label: 'a sunny thought', tone: 'yellow' },
  { icon: '🕊️', label: 'always, your friend', tone: 'paper' },
];

export default function Chapter12() {
  const boxPhotos = chapters[5].photos;
  const [opened, setOpened] = useState({});            // { 0: true, 3: true, ... }
  const [finalOpen, setFinalOpen] = useState(false);
  const count = Object.keys(opened).length;
  const done = count === loveNotes.length;             // all 10 opened
  const openOne = (i) => setOpened((o) => (o[i] ? o : { ...o, [i]: true }));

  return (
    <section className="story">
      <Head n={6} />
      <p className="center box-intro">Choose a little keepsake. There is a piece of our story and a note from me inside each one ♡</p>
      <div className="env10">
        {loveNotes.map((msg, i) => {
          const isOpen = !!opened[i];
          const box = BOXES[i];
          return (
            <article key={i} className={`mail ${isOpen ? 'opened' : ''} tone-${box.tone}`}>
              <button className="mail-env" onClick={() => openOne(i)} aria-expanded={isOpen}
                aria-label={`${box.label}${isOpen ? ', opened' : ''}`}>
                <span className="mail-flap" />
                <span className="mail-seal">{isOpen ? '💗' : box.icon}</span>
                <span className="box-title">{box.label}</span>
              </button>
              <div className="mail-msg" aria-hidden={!isOpen}><div className="inner">
                {isOpen && <>
                  <Photo id={boxPhotos[i]} kind="polaroid" tilt={i % 2 ? 2 : -2} />
                  <p className="hand box-message">{msg}</p>
                </>}
              </div></div>
            </article>
          );
        })}
      </div>
      {done && (
        <>
          <div className="center">
            <button className="big" onClick={() => setFinalOpen((open) => !open)} aria-expanded={finalOpen}>
              {finalOpen ? 'Fold away the final note ♡' : 'Open one last little note →'}
            </button>
          </div>
          {finalOpen && (
            <div className="final-note hand" role="status">
              <span className="s" style={{ left: '6%', top: '8%' }}>✨</span>
              <span className="s" style={{ right: '7%', top: '12%', animationDelay: '.6s' }}>💗</span>
              <span className="s" style={{ left: '12%', bottom: '8%', animationDelay: '1.1s' }}>🦋</span>
              <span className="s" style={{ right: '10%', bottom: '10%', animationDelay: '1.6s' }}>✨</span>
              {loveFinal}
            </div>
          )}
        </>
      )}
      <Next n={6} />
    </section>
  );
}
