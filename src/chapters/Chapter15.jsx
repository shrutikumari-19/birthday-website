import Head from '../components/Head';
import Video from '../components/Video';
import Next from '../components/Next';
import { chapters, movie } from '../data/content';
export default function Chapter15() {
  const c = chapters[7];
  return (
    <section className="story">
      <Head n={8} />
      <div className="poster">
        <small>a film about us</small>
        <h2>{movie.title}</h2>
        <p><b>Starring:</b> {movie.starring}</p>
        <p><b>Genre:</b> {movie.genre}</p>
        <p><b>Duration:</b> {movie.duration}</p>
      </div>
      <p>{c.text[0]}</p>
      <h2 className="hand">Our Little Moving Memories</h2>
      <div className="filmstrip vids">{c.videos.map((id) => <Video key={id} id={id} frame="filmframe" />)}</div>
      <Next n={8} />
    </section>
  );
}
