import React from 'react';
import Question from './components/Question/Question';
import QuestionControl from './components/QuestionControl/QuestionControl';

function App() {
  return (
    <div className="bg-cyan-900 text-cyan-50 h-screen flex place-content-center items-center content-center text-center">
      <div>
        <Question></Question>
        <QuestionControl></QuestionControl>
      </div>
    </div>
  );
}

export default App;
