import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='h-screen w-5/6 text-white flex flex-col items-center justify-center mt-4 mx-auto'>
      <h1 className='font-bold text-4xl text-center'>
        Welcome to the Trivia Challenge
      </h1>
      <div className='my-10 text-center text-2xl'>
        <img
          className='w-9/12 mx-auto'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1654968767/Trivia_challenge_slm6cq.png'
          alt='Img Logo'
        />

        <p className='mt-2'>
          You will be presented with 10 True or False questions.
        </p>
      </div>
      <p className='mt-5 text-center text-xl font-bold border-2 border-slate-100 w-full text-orange-400  rounded-tl-lg rounded-br-lg  px-3 py-2 shadow-xl  '>
        <span className='gradient-text'>Can you score 100%?</span>
      </p>
      <Link className='w-full' to='/quiz'>
        <button className='font-bold my-10 bg-gradient-to-r  from-red-500 to-orange-400 w-full py-2 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400    '>
          BEGIN
        </button>
      </Link>
    </div>
  );
};

export default Start;
