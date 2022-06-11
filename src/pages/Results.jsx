import { Link } from 'react-router-dom';

const Results = ({ score, answers }) => {
  console.log(score, answers);
  return (
    <div className='text-white w-8/12 flex flex-col justify-center items-center mx-auto'>
      <h1 className='font-bold text-4xl text-center'>
        You scored {score} / 10
      </h1>
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
          <button className='my-10'> Restart Trivia</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
