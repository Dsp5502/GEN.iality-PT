import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

const BarProgress = ({ position }) => {
  return (
    <div>
      <ProgressBar
        percent={(position + 1) * 10}
        filledBackground='linear-gradient(to right, #fefb72, #f0bb31)'
        transition='ease in out'
        trasnsitionDuration='3000'
        width='100px'
      />
    </div>
  );
};

export default BarProgress;
