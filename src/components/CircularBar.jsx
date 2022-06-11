import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({ score }) => {
  return (
    <div className='w-8/12 mt-5'>
      <CircularProgressbarWithChildren
        value={score}
        strokeWidth={5}
        maxValue={10}
        styles={{
          path: {
            stroke: '#fefb72',
          },
          trail: {
            stroke: '#fff',
          },
        }}
      >
        <img
          style={{ width: 40, marginTop: -5 }}
          src='https://i.imgur.com/b9NyUGm.png'
          alt='doge'
        />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{score} / 10</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularBar;
