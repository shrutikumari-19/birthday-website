import { useContext } from 'react';
import Ctx from './Ctx';
import { chapters } from '../data/content';
export default function Next({ n }) {
  const { go } = useContext(Ctx);
  const c = chapters[n - 1];
  return <div className="center"><button className="big" onClick={() => go(c.replay ? 0 : n)}>{c.button}</button></div>;
}
