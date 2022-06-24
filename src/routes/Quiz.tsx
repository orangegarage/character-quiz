import React, { useState } from "react";
import { questions } from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { characters } from "../data/characters";
import { useTranslation } from "react-i18next";

export let preferencesArray = new Array<string>(questions.length);
export let scoredCharacters = characters;
function Quiz() {
  const { t } = useTranslation();
  //we will use i18n function for language toggle later
  //https://react.i18next.com/latest/usetranslation-hook
  let navigate = useNavigate();
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const quizLength = questions.length;
  let [preferences, setPreferences] = useState(preferencesArray);

  function doCalculation() {
    const prioritizedTraits = preferencesArray.filter(trait => trait.includes("prioritize")).map(trait=>trait.replace("-prioritize", ""));
    const preferredTraits = preferencesArray.filter(trait => trait.includes("prefer")).map(trait=>trait.replace("-prefer", ""));
    const onlyTraits = preferencesArray.filter(trait => trait.includes("only")).map(trait=>trait.replace("-only", ""));
    
    for(let i = 0; i < characters.length; i ++) {
      const characterPrioritizedTraits = characters[i].traits.filter(trait=>prioritizedTraits.includes(trait)).length;
      const characterPreferredTraits = characters[i].traits.filter(trait=>preferredTraits.includes(trait)).length;
      const characterOnlyTraits = characters[i].traits.filter(trait=>onlyTraits.includes(trait)).length;
      characters[i].score = (characterOnlyTraits + 1) * (10 * (characterOnlyTraits + characterPreferredTraits) + 5 * characterPrioritizedTraits)
      console.log(characters[i].name + ": " + characters[i].score);
    }
    scoredCharacters = characters;
  }
  function nextQuestion(): number {
    if (quizLength > currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      doCalculation();
      navigate("/Results");
    }
    return currentQuestion;
  }
  function previousQuestion(): number {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    return currentQuestion;
  }

  function choseAnswer(answers: Array<string>, answer: string) {
    if(answer != null) {
      preferences[currentQuestion] = answer;
      setPreferences(preferences);
      preferencesArray = preferences;
    }
    let answerElement = document.getElementById(answer);
    //handles color changing part of answer
    if (answerElement != null) {
      for (let i = 0; i < answers.length; i++) {
        let prevSelection = document.getElementById(answers[i]);
        prevSelection?.parentElement?.classList.remove("bg-[#e4bb40]");
        prevSelection?.parentElement?.classList.add("bg-[#055e96]");
      }
      answerElement.parentElement?.classList.remove("bg-[#055e96]");
      answerElement.parentElement?.classList.add("bg-[#e4bb40]");
    }
  }
  let answers: Array<string> = questions[currentQuestion].answers;
  let listAnswers = answers.map((answer) => (
    <label htmlFor={answer}>
      <li
        key={answer}
        className="listAnswers text-center p-2 bg-[#055e96] border-[#055e96] rounded-lg hover:bg-[#BBA14F] transition-colors duration-300 mb-2"
      >
        <input
          type="radio"
          className="radioAnswer"
          name="radioAnswer"
          id={answer}
          value={answer}
          hidden
          onChange={() => choseAnswer(answers, answer)}
        />
        {t("answers." + answer)}
      </li>
    </label>
  ));

  return (
    <div className="quizDiv">
      <div className="carouselDiv text-white ">
        <p className="my-10 flex justify-center">
          {currentQuestion + 1} out of {questions.length}
        </p>
        <div className="questionDiv mb-10 md:text-3xl flex justify-center">
          <p className="m-auto text-center">
            {t("questions." + questions[currentQuestion].question)}
          </p>
        </div>
      </div>
      <div className="quizNavDiv lg:w-1/2 w-full mx-auto flex items-center justify-center">
        <div className="navButtonDiv text-white lg:mx-10 md:mx-10 mr-3">
          <button onClick={previousQuestion}>
            <svg
              className="lg:w-20 lg:h-20 md:w-10 md:h-10 w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="answerDiv w-full text-2xl flex justify-center text-white ">
          {/* may need to take justify-center out for this one for legibility in start and end of questions */}
          <ul className="w-full">{listAnswers}</ul>
        </div>
        <div className="navButtonDiv text-whitelg:mx-10 md:mx-10 mr-3">
          <button onClick={nextQuestion}>
            <svg
              className="lg:w-20 lg:h-20 md:w-10 md:h-10 w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
