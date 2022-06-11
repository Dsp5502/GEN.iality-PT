import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='h-screen w-5/6 text-white flex flex-col items-center justify-center mx-auto'>
      <h1 className='font-bold text-4xl text-center'>
        Welcome to the Trivia Challenge
      </h1>
      <p className='my-10 text-center text-2xl'>
        You will be presented with 10 True or False questions.
      </p>
      <p className='my-10 text-center text-2xl'>Can you score 100%?</p>
      <Link to='/quiz'>
        <button className='my-10'>BEGIN</button>
      </Link>
    </div>
  );
};

export default Start;
