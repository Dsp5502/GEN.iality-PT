import { useEffect, useState } from 'react';
import BarProgress from '../components/BarProgress';
import Spinner from '../components/Spinner';
import Results from './Results';
import '../styles/BtnTrueFalse.css';

const QuizScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const questionsLS = JSON.parse(localStorage.getItem('questions')) ?? [];
    const positionLS = JSON.parse(localStorage.getItem('position')) ?? 0;
    const answersLS = JSON.parse(localStorage.getItem('answers')) ?? [];
    const scoreLS = JSON.parse(localStorage.getItem('score')) ?? 0;
    if (questionsLS.length !== 0) {
      setQuestions(questionsLS);
      setPosition(positionLS);
      setAnswers(answersLS);
      setScore(scoreLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
    localStorage.setItem('position', JSON.stringify(position));
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('score', JSON.stringify(score));
  }, [questions, position]);

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
    setLoading(!loading);
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
    }, 300);
  };

  return loading ? (
    <div className='h-screen flex justify-center items-center'>
      <Spinner />
    </div>
  ) : position === questions.length ? (
    <Results score={score} answers={answers} />
  ) : (
    <div className='h-screen text-white w-11/12 flex flex-col items-center justify-center mx-auto mb-5 '>
      <h1 className='font-bold text-4xl text-center gradient-text '>
        {questions[position]?.category}
      </h1>
      <div className='h-52  w-8/12 bg-gray-100   mt-10 flex items-center   mx-auto  rounded-xl shadow-2xl'>
        <p className='p-5 text-black text-center text-lg'>
          {questions[position]?.question}
        </p>
      </div>
      <div className='flex w-11/12 mt-8 mb-10 justify-center items-center gap-10  '>
        <button className='btn-true' onClick={nextQuestion}>
          True
        </button>
        <button className='btn-false' onClick={nextQuestion}>
          False
        </button>
      </div>
      <BarProgress position={position} />
      <p className='mt-5'>
        {position + 1} of {questions.length}
      </p>
    </div>
  );
};

export default QuizScreen;
