import React, { useState } from "react";
import { questions } from "../data/quiz";
import { useNavigate } from "react-router-dom";

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
    <div className = "quizDiv flex w-1/2 mx-auto sm:my-32 my-5 items-center justify-center">
      <div className="navButtonDiv text-white mx-10">
        <button onClick={previousQuestion}>
          <svg className="lg:w-20 lg:h-20 md:w-10 md:h-10 text-white w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>
        <div className="carouselDiv text-white">
          <p>{currentQuestion} out of {questions.length}</p>
          <p>{questions[currentQuestion].question}</p>
          <ul>{listAnswers}</ul>
        </div>
      <div className="navButtonDiv text-white mx-10">
        <button onClick={nextQuestion}>
          <svg className="lg:w-20 lg:h-20 md:w-10 md:h-10 w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Quiz;
