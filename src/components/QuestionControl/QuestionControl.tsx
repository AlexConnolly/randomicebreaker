import React, { FC } from 'react';

interface QuestionControlProps {}

const QuestionControl: FC<QuestionControlProps> = () => (
  <div className="p-4">
    <button onClick={reloadPage} className="drop-shadow-lg p-4 bg-cyan-600 rounded-xl hover:bg-cyan-700 active:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-300">
  Another Question
    </button>
  </div>
);

function reloadPage() {
  window.location.reload();
}

export default QuestionControl;
