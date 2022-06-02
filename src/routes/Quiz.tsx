import React, { useState, useEffect } from 'react';
import quizJson from '../data/quiz.json'
import { useNavigate } from 'react-router-dom';
import Results from './Results';

//save current question number in something
//if function clicked increment
//if backwards clicked decrement
//make sure it is not negative
function Quiz()
{
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const quizLength = quizJson.questions.length;

  function nextQuestion(): number
  {
    if(quizLength > currentQuestion + 1)
    {
      setCurrentQuestion(currentQuestion + 1);
    }
    else
    {
      console.log("enter else");
      let navigate = useNavigate();
      navigate('/Results');
    }
    console.log("currentQuestion" + currentQuestion);
    return currentQuestion;
  }
  function previousQuestion(): number
  {
    if(currentQuestion > 0)
    {
      setCurrentQuestion(currentQuestion - 1);
    }
    console.log("currentQuestion" + currentQuestion);
    return currentQuestion;
  }

  console.log("Quiz size: " + quizLength);
  let answers: Array<string> = quizJson.questions[currentQuestion].answers;
  let listAnswers = answers.map((answer) =>
    <li key={answer}>{answer}</li>
  );

  return (
      <div>
        <div className="quizDiv">
          <p>
            {quizJson.questions[currentQuestion].question}
          </p>
          <ul>
            {listAnswers}
          </ul>
        </div>
        <div className="navButtonDiv">
            <button onClick={previousQuestion}>Previous</button>
            <button onClick={nextQuestion}>Next</button>
            <p>{currentQuestion}</p>
        </div>
      </div>
  );
}
export default Quiz;