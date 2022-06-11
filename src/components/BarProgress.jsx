import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

const BarProgress = ({ position }) => {
  return (
    <div className='w-10/12 '>
      <ProgressBar
        percent={(position + 1) * 10}
        filledBackground='linear-gradient(to right, rgb(239, 68, 68), rgb(251, 146, 60))'
        transition='ease in out'
        trasnsitionDuration='3000'
        width='100%'
        height='15px'
      />
    </div>
  );
};

export default BarProgress;
