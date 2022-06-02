import React, { useState, useEffect } from 'react';
import quizJson from '../data/quiz.json'

//save current question number in something
//if function clicked increment
//if backwards clicked decrement
//make sure it is not negative




class Quiz extends React.Component<{}, {currentQuestion: number, quizLength: number}>
{
  constructor(props: any)
  {
    super(props);
    this.state = 
    {
      currentQuestion: 0,
      quizLength: quizJson.questions.length
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }

  nextQuestion(): number
  {
    console.log("nextQuestion");
    if(this.state.quizLength > this.state.currentQuestion + 1)
    {
      this.setState((state, props) => ({
        currentQuestion: state.currentQuestion + 1
      }));
    }

    console.log("currentQuestion" + this.state.currentQuestion);
    return this.state.currentQuestion;
  }
  previousQuestion(): number
  {
    console.log("previousQuestion");
    if(this.state.currentQuestion > 0)
    {
      this.setState((state, props) => ({
        currentQuestion: state.currentQuestion - 1
      }));
    }
    console.log("currentQuestion" + this.state.currentQuestion);
    return this.state.currentQuestion;
  }

  render()
  {
    console.log("hello world");
    console.log("Quiz size: " + this.state.quizLength);
    let answers: Array<string> = quizJson.questions[this.state.currentQuestion].answers;
    let listAnswers = answers.map((answer) =>
      <li key={answer}>{answer}</li>
    );
    console.log(quizJson)
    return(
      <div>
        <div className="quizDiv">
          <p>
            {quizJson.questions[this.state.currentQuestion].question}
          </p>
          <ul>
            {listAnswers}
          </ul>
        </div>
        <div className="navButtonDiv">
            <button onClick={this.previousQuestion}>Previous</button>
            <button onClick={this.nextQuestion}>Next</button>
            <p>{this.state.currentQuestion}</p>
        </div>
      </div>
    );
  }
}
export default Quiz;