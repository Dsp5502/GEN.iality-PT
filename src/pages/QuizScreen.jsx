import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Results from './Results';

const QuizScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
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

  return loading ? (
    <Spinner />
  ) : position === questions.length ? (
    <Results />
  ) : (
    <div>
      <h1>{questions[position]?.category}</h1>
      <p>{questions[position]?.question}</p>
      <div>
        <button onClick={() => setPosition(position + 1)}>True</button>
        <button onClick={() => setPosition(position + 1)}>False</button>
      </div>
      <p>1 of 10</p>
    </div>
  );
};

export default QuizScreen;
