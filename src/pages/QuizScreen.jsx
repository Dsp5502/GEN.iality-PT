import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Results from './Results';

const QuizScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const getQuestionsAPI = async () => {
      try {
        const url =
          'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
        const res = await fetch(url);
        const { results } = await res.json();
        setQuestions(results);
      } catch (err) {
        console.log(err);
      }
      setLoading(!loading);
    };

    getQuestionsAPI();
  }, []);

  const nextQuestion = (e) => {
    setPosition(position + 1);
    setLoading(true);
    if (questions[position].correct_answer === e.target.innerText) {
      setAnswers([
        ...answers,
        {
          answer: 'true',
          question: questions[position].question,
        },
      ]);
      setScore(score + 1);
    } else {
      setAnswers([
        ...answers,
        {
          answer: 'false',
          question: questions[position].question,
        },
      ]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return loading ? (
    <div className='h-screen flex justify-center items-center'>
      <Spinner />
    </div>
  ) : position === questions.length ? (
    <Results score={score} answers={answers} />
  ) : (
    <div className='h-screen text-white w-11/12 flex flex-col items-center justify-center mx-auto mb-5'>
      <h1 className='font-bold text-4xl text-center'>
        {questions[position]?.category}
      </h1>
      <div className='h-56 w-2/3 border-2 border-red-500 my-10'>
        <p className='m-5'>{questions[position]?.question}</p>
      </div>
      <div className='flex w-11/12 mt-5 mb-10 justify-center items-center gap-10 '>
        <button onClick={nextQuestion}>True</button>
        <button onClick={nextQuestion}>False</button>
      </div>
      <p>
        {position + 1} of {questions.length}
      </p>
    </div>
  );
};

export default QuizScreen;
