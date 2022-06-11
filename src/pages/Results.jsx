import { Link } from 'react-router-dom';
import CircularBar from '../components/CircularBar';

const Results = ({ score, answers }) => {
  const restartTrivia = () => {
    localStorage.clear();
  };
  console.log(answers);
  return (
    <div className='text-white w-11/12 flex flex-col justify-center items-center mx-auto'>
      <CircularBar score={score} />
      <div className=' my-10 text-center text-2xl'>
        {answers.map((ans, index) => {
          return (
            <div
              key={index}
              className={`flex justify-center place-items-start ${
                ans.answer === 'false' ? 'text-red-500' : ''
              }`}
            >
              <p className='mt-5 w-1/12 mx-auto text-3xl'>
                {ans.answer === 'true' ? '+' : '-'}
              </p>

              <p className='mt-5 w-9/12 mx-auto text-sm border-b-2 pb-1  '>
                {ans.question}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h3 className=' text-center text-xl font-bold border-2 border-slate-100 w-full text-orange-400  rounded-tl-lg rounded-br-lg  px-3 py-2 shadow-xl '>
          PLAY AGAIN?
        </h3>
        <Link className='flex flex-col justify-center items-center' to='/'>
          <button
            className='font-bold mt-5 mb-2 bg-gradient-to-r  from-red-500 to-orange-400 w-full py-2 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400    '
            onClick={restartTrivia}
          >
            {' '}
            Restart Trivia
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
