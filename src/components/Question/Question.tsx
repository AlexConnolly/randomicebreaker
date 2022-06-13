import React, { FC } from 'react';
import questions from './../../resources/questions.json';

/*
 I'm going to caveat all this work with the fact that I wanted to deliver a product, not professional code.
*/

function getRandomQuestionIndex() : number {
  return Math.floor(Math.random() * (questions.length - 0 + 1)) + 0;
}

function getRandomQuestion() : string {
  const random : number = getRandomQuestionIndex();

  return  questions[random].question;
}

const currentQuestion : string = getRandomQuestion();

function question () { 
  return (
    <div className="p-4">
      <h1 className="text-3xl">
        {currentQuestion}
      </h1>
    </div>
  );
}

export default question;
