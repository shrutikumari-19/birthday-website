import { useContext } from 'react';
import Ctx from '../components/Ctx';
import { intro } from '../data/content';

export default function Chapter01() {
  const { go } = useContext(Ctx);
  const reveal = () => {
    go(1);
  };
  return (
    <section className="story hero center welcome">
      <span className="cover-spark cover-spark-one" aria-hidden="true">✦</span>
      <span className="cover-spark cover-spark-two" aria-hidden="true">✧</span>
      <span className="cover-spark cover-spark-three" aria-hidden="true">♡</span>
      <div className="bow" aria-hidden="true"><i /><i /><b /></div>
      <h1>{intro.heading}</h1>
      <p className="hand big-hand">{intro.sub}</p>
      <p>{intro.text}</p>
      <button className="big" onClick={reveal}>{intro.button}</button>
      <p className="cover-signoff hand">A little love letter, made just for you ♡</p>
    </section>
  );
}
