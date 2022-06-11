import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizScreen from './pages/QuizScreen';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='quiz' element={<QuizScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
