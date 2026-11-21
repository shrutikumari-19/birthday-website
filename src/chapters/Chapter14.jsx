import Head from '../components/Head';
import Photo from '../components/Photo';
import Next from '../components/Next';
import { galleryExtra } from '../data/content';
const KINDS = ['polaroid', 'tape', 'film', 'polaroid', 'stamp'];
export default function Chapter14() {
  return (
    <section className="story">
      <Head n={7} />
      <p className="hand quote">Little snapshots, countless beautiful memories, and a friendship I will always treasure.</p>
      <div className="masonry memory-wall">{galleryExtra.map((id, i) => <Photo key={id} id={id} kind={KINDS[i % 5]} tilt={(i % 3) - 1} />)}</div>
      <Next n={7} />
    </section>
  );
}
