import React, { useState, useEffect } from "react";
import { questions } from "../data/quiz";
import { NavigateFunction, useNavigate } from "react-router-dom";

function Quiz() {
  let navigate = useNavigate();
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const quizLength = questions.length;

  function nextQuestion(): number {
    if (quizLength > currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("enter else");

      navigate("/Results");
    }
    console.log("currentQuestion" + currentQuestion);
    return currentQuestion;
  }
  function previousQuestion(): number {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    console.log("currentQuestion" + currentQuestion);
    return currentQuestion;
  }

  console.log("Quiz size: " + quizLength);
  let answers: Array<string> = questions[currentQuestion].answers;
  let listAnswers = answers.map((answer) => <li key={answer}>{answer}</li>);

  return (
    <div>
      <div className="quizDiv">
        <p>{questions[currentQuestion].question}</p>
        <ul>{listAnswers}</ul>
      </div>
      <div className="navButtonDiv">
        <button onClick={previousQuestion}>&lt;Previous</button>
        <button onClick={nextQuestion}>Next&gt;</button>
        <p>{currentQuestion}</p>
      </div>
    </div>
  );
}
export default Quiz;
