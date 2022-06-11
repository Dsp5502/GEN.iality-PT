import { useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({ score }) => {
  const [scoreFinal, setScoreFinal] = useState(0);
  setTimeout(() => {
    setScoreFinal(score);
  }, 500);
  return (
    <div className='w-6/12 mt-5'>
      <CircularProgressbarWithChildren
        value={scoreFinal}
        strokeWidth={5}
        maxValue={10}
        styles={buildStyles({
          pathColor: score <= 5 ? '#DC2626' : '#fb923c',
        })}
      >
        <div style={{ fontSize: 20, marginTop: -5, textAlign: 'center' }}>
          <strong>
            Your Scored <br /> {score} / 10
          </strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularBar;
