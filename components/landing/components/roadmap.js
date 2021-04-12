import HorizantalTimeline from '../hr-timeline';
import VerticalTimeline from '../css-timeline';


export default function Roadmap(props) {
  return (
      <div id="roadmap" className='text-center'>
        <div className='section-title'>
          <h2 className='section-title-h2'>Roadmap</h2>
        </div>

        <HorizantalTimeline data={props.data}/>
        <VerticalTimeline data={props.data}/>
      </div>
  );
}
