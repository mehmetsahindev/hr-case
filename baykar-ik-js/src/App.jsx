import React, { useEffect, useState } from "react";
import { quizApiSlice, useGetQuestionsQuery } from "./slices/quizApiSlice";
import PageLoader from "./components/PageLoader";

const App = () => {
  const { data: questions, error, isLoading } = useGetQuestionsQuery();
  const [reloadQuestions] = quizApiSlice.endpoints.getQuestions.useLazyQuery();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [timerStatus, setTimerStatus] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval;

    if (timerStatus) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerStatus]);

  useEffect(() => {
    if (isLoading === false) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [isLoading]);

  useEffect(() => {
    if (seconds === 0) {
      nextQuestion();
    }
  }, [seconds]);

  const startTimer = () => {
    setTimerStatus(true);
  };

  const stopTimer = () => {
    setTimerStatus(false);
  };

  const resetTimer = () => {
    setSeconds(30);
  };

  const canAnswer = () => {
    return seconds <= 20;
  };

  const getRequiredSeconds = () => {
    if (seconds > 20) {
      return 10 - (30 - seconds);
    } else {
      return 0;
    }
  };

  const handleSelectedAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const nextQuestion = () => {
    if (!canAnswer()) return;

    setResult([
      ...result,
      {
        question: questions[questionIndex].title,
        answer: answer,
      },
    ]);

    resetTimer();
    setAnswer(null);

    if (questionIndex + 1 === questions.length) {
      setQuestionIndex(0);
      setIsCompleted(true);
      stopTimer();
    } else {
      setQuestionIndex(questionIndex + 1);
      startTimer();
    }
  };

  const resetQuiz = () => {
    setQuestionIndex(0);
    setSeconds(30);
    setAnswer(null);
    setResult([]);
    setIsCompleted(false);

    reloadQuestions();

    startTimer();
  };

  return (
    <div className="h-full flex items-center justify-center">
      {isLoading ? (
        <PageLoader />
      ) : error ? (
        "Error"
      ) : (
        <>
          <div className="max-w-screen-lg w-full h-full flex items-center p-3 lg:p-6">
            <div className="bg-white w-full min-h-[300px] lg:min-h-[750px] h-full lg:h-auto rounded-lg flex flex-col">
              <div className="flex justify-between items-center px-6 py-3 border-b">
                <div className="flex items-center">
                  <p className="font-bold text-2xl text-red-500">Quick</p>
                  <p className="font-bold text-2xl text-amber-500">Quiz</p>
                </div>
                {!isCompleted && (
                  <div className="flex flex-col items-start">
                    <p>Time Left: {seconds}</p>
                    <div className="text-xs">
                      {!canAnswer() ? (
                        <>
                          <p className="text-red-500">
                            Wait {getRequiredSeconds()} seconds!
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-green-500">You can answer.</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-grow p-6 flex flex-col gap-6">
                {isCompleted ? (
                  <>
                    <div className="overflow-auto">
                      <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 max-w-[200px]"
                              >
                                Question
                              </th>
                              <th scope="col" className="px-6 py-3 text-end">
                                Answer
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.map((result, index) => {
                              return (
                                <tr
                                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                  key={`result-${index}`}
                                >
                                  <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 dark:text-white w-2/3"
                                  >
                                    {result.question}
                                  </th>
                                  <td className="px-6 py-4 w-1/3 text-end whitespace-nowrap">
                                    {result.answer}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>{questions[questionIndex].title}</div>
                    <div>
                      <div className="flex flex-col gap-3">
                        {questions[questionIndex].options.map(
                          (option, index) => {
                            return (
                              <label
                                key={index}
                                htmlFor={`option-${questionIndex}-${index}`}
                                className={`p-3 border rounded-lg flex gap-3 ${
                                  canAnswer()
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                } ${option === answer ? "bg-green-300" : ""}`}
                              >
                                <p>
                                  {String.fromCharCode(
                                    "A".charCodeAt(0) + index
                                  )}
                                  )
                                </p>
                                <p>{option}</p>
                                <input
                                  type="radio"
                                  name={`option-${questionIndex}`}
                                  id={`option-${questionIndex}-${index}`}
                                  className="hidden"
                                  checked={answer === option}
                                  value={option}
                                  disabled={!canAnswer()}
                                  onChange={handleSelectedAnswer}
                                />
                              </label>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-6 flex justify-between items-center border-t">
                <div>
                  {!isCompleted && (
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">{questionIndex + 1}</span> of{" "}
                      {questions.length}
                    </p>
                  )}
                </div>

                <div>
                  {!isCompleted ? (
                    <button
                      disabled={!canAnswer()}
                      onClick={nextQuestion}
                      className="bg-amber-500 p-2 text-sm text-white rounded-lg disabled:bg-amber-200"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      onClick={resetQuiz}
                      className="bg-amber-500 p-2 text-sm text-white rounded-lg disabled:bg-amber-200"
                    >
                      Try Again
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
