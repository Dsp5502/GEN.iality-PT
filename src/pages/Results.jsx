import { Link } from 'react-router-dom';
import CircularBar from '../components/CircularBar';

const Results = ({ score, answers }) => {
  const restartTrivia = () => {
    localStorage.clear();
  };
  return (
    <div className='text-white w-8/12 flex flex-col justify-center items-center mx-auto'>
      <CircularBar score={score} />
      <div className='my-10 text-center text-2xl'>
        {answers.map((ans, index) => {
          return (
            <p className='m-5 w-10/12 mx-auto text-sm' key={index}>
              {ans.answer === 'true' ? '+' : '-'}
              {ans.question}
            </p>
          );
        })}
      </div>
      <div>
        <Link to='/'>
          PLAY AGAIN?
          <button className='my-10' onClick={restartTrivia}>
            {' '}
            Restart Trivia
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
