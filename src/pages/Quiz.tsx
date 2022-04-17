import { useEffect, useState, useTransition } from "react"
import { useNavigate } from "react-router"
import { Question } from "../component/Question"

export const Quiz = ({ subject, data }: any) => {

    const navigate = useNavigate()
    const [count, setCount] = useState(30)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const testQuestions = data?.filter((item: any) => item.vehicletype === subject);
    const question = testQuestions[questionIndex];
    const answers = question.answer;

    useEffect(() => {
        if (count > 0) {
            let timer1 = setTimeout(() => {
                setCount(count - 1)
            }, 1000)
            return () => {
                clearTimeout(timer1);
            };
        }
        if (count === 0) {
            if (testQuestions.length === questionIndex + 1) {
                if (score > 1) {
                    return setShowResult(true);
                }
                return navigate('/')
            }
            setQuestionIndex(questionIndex + 1);
            setCount(30);
        }
    }, [count])



    const handleClick = (answer: any) => {
        if (answer === question.correctanswer) {
            setScore(score + 1);
        }
        if (questionIndex < testQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setCount(30);
        } else if (score > 1) {
            setShowResult(true);
        } else {
            navigate('/')
        }
    };


    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                {!showResult &&
                    <>
                        <div className="mb-10 md:mb-16">
                            <div className=" flex justify-between p-2 bg-gray-100 text-indigo-500 sm:text-lg md:text-xl font-semibold rounded-lg mb-10">
                                <div className="" x-text="seconds">00:{count}</div>
                                <div className="" x-text="seconds">{questionIndex + 1}/{testQuestions.length}</div>
                            </div>
                            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{question.question}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                            {answers && answers.map((answer: any) => (
                                <Question key={answer} answer={answer} handleClick={handleClick} />
                            ))}

                        </div>
                    </>
                }
                {showResult &&
                    <div className="flex justify-center items-center">
                        <div className="bg-white rounded-lg p-5">
                            <div className="flex justify-between items-center">
                                <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">{score}</h3>
                                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}