import React, { useState } from 'react';
import { questions } from '../data/quiz';
import { useNavigate } from 'react-router-dom';
import { characters } from '../data/characters';
import { useTranslation } from 'react-i18next';
import { Nav } from '../components/nav';

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
    const prioritizedTraits = preferencesArray
      .filter((trait) => trait.includes('prioritize'))
      .map((trait) => trait.replace('-prioritize', ''));
    const preferredTraits = preferencesArray
      .filter((trait) => trait.includes('prefer'))
      .map((trait) => trait.replace('-prefer', ''));
    const onlyTraits = preferencesArray
      .filter((trait) => trait.includes('only'))
      .map((trait) => trait.replace('-only', ''));

    for (let i = 0; i < characters.length; i++) {
      const characterPrioritizedTraits = characters[i].traits.filter((trait) =>
        prioritizedTraits.includes(trait),
      ).length;
      const characterPreferredTraits = characters[i].traits.filter((trait) =>
        preferredTraits.includes(trait),
      ).length;
      const characterOnlyTraits = characters[i].traits.filter((trait) =>
        onlyTraits.includes(trait),
      ).length;
      characters[i].score =
        (characterOnlyTraits + 1) *
        (10 * (characterOnlyTraits + characterPreferredTraits) +
          5 * characterPrioritizedTraits);
    }
    scoredCharacters = characters;
  }
  function nextQuestion(): number {
    if (quizLength > currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      doCalculation();
      navigate('/Results');
    }
    return currentQuestion;
  }
  function previousQuestion(): number {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentQuestion === 0) {
      setCurrentQuestion(quizLength - 1);
    }
    return currentQuestion;
  }

  function choseAnswer(answers: Array<string>, answer: string) {
    if (answer != null) {
      preferences[currentQuestion] = answer;
      setPreferences(preferences);
      preferencesArray = preferences;
    }
    let answerElement = document.getElementById(answer);
    //handles color changing part of answer
    if (answerElement != null) {
      for (let i = 0; i < answers.length; i++) {
        let prevSelection = document.getElementById(answers[i]);
        prevSelection?.parentElement?.classList.remove('bg-[#e4bb40]');
        prevSelection?.parentElement?.classList.add('bg-[#055e96]');
      }
      answerElement.parentElement?.classList.remove('bg-[#055e96]');
      answerElement.parentElement?.classList.add('bg-[#e4bb40]');
    }
    //console.log('preferences: ' + preferencesArray);
  }
  let answers: Array<string> = questions[currentQuestion].answers;
  function listAnswers() {
    let answerMap = answers.map((answer) => {
      let classNames =
        'listAnswers text-center p-2 bg-[#055e96] border-[#055e96] rounded-lg hover:bg-[#BBA14F] text-omega-white transition-colors duration-300 mb-2';
      //for each answers in list, if it exists in preferencesarray change class before render
      if (preferencesArray.includes(answer)) {
        classNames =
          'listAnswers text-center p-2 bg-[#e4bb40] border-[#055e96] rounded-lg hover:bg-[#BBA14F] text-omega-white transition-colors duration-300 mb-2';
      }
      return (
        <label htmlFor={answer} key={answer}>
          <li className={classNames}>
            <input
              type="radio"
              className="radioAnswer"
              name="radioAnswer"
              id={answer}
              value={answer}
              hidden
              onChange={() => choseAnswer(answers, answer)}
            />
            {t('answers.' + answer)}
          </li>
        </label>
      );
    });
    return answerMap;
  }

  return (
    <>
      <Nav />
      <div className="quizDiv whitespace-pre-line flex justify-center">
        <div className="carouselDiv text-white ">
          <p className="my-10 flex justify-center">
            {currentQuestion + 1} out of {questions.length}
          </p>
          <div className="questionDiv mb-10 md:text-3xl flex justify-center">
            <p className="m-auto text-center">
              {t('questions.' + questions[currentQuestion].question)}
            </p>
          </div>
          <div className="answerDiv w-full md:text-2xl text-base md:mx-5">
            <ul className="w-full">{listAnswers()}</ul>
          </div>
        </div>
        
      </div> {/* quizdiv */}

      <div className = "navDiv">
        <div className="buttondiv flex lg:w-1/2 w-full mx-auto items-center justify-center">
          <div
            className="navButtonDiv text-omega-white hover:bg-[#BBA14F] transition-colors duration-300 lg:mx-10 md:mx-10 mr-3 my-10"
            onClick={previousQuestion}
          >
            <button>
              <svg
                className="lg:w-20 lg:h-20 md:w-10 md:h-10 w-5 h-5"
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
               back
            </button>
          </div>
          <div
            className="navButtonDiv text-omega-white hover:bg-[#BBA14F] transition-colors duration-300 lg:mx-10 md:mx-10 mr-3 my-10"
            onClick={nextQuestion}
          >
            <button>
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
              next 
            </button>
          </div>
        </div> {/* quiznavdiv */}
      </div>

    </>
  );
}

export default Quiz;
