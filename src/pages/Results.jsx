import { Link } from 'react-router-dom';

const Results = ({ score, answers }) => {
  return (
    <div className='text-white'>
      <h1 className='font-bold text-4xl text-center'>You scored {score}%</h1>
      <p className='my-10 text-center text-2xl'>
        {answers.map((answer, index) => {
          return <p key={index}>{answer.question}</p>;
        })}
      </p>
      <div>
        <Link to='/'>
          <button className='my-10'>Restart</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
