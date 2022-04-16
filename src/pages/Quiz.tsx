import { useEffect, useState, useTransition } from "react"
import { useNavigate } from "react-router"
import { Question } from "../component/Question"

export const Quiz = ({ subject, data }: any) => {
    const navigate = useNavigate()
    const [count, setCount] = useState(30)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    useEffect(() => {
        count > 0 && setTimeout(() => setCount(count - 1), 1000);

    }, [count])
    const testQuestions = data?.filter((item: any) => item.vehicletype === subject);
    const question = testQuestions[questionIndex];
    const answers = question.answer;

    const handleClick = (answer: any) => {
        if (answer === question.correctanswer) {
            setScore(score + 1);

        }
        if (questionIndex < testQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else if (score > 30) {
            setShowResult(true);
        } else {
            navigate('/')
        }
    };


    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <div className=" flex justify-between p-2 bg-gray-100 text-indigo-500 sm:text-lg md:text-xl font-semibold rounded-lg mb-10">
                        <div className="" x-text="seconds">{count}:00</div>
                        <div className="" x-text="seconds">{questionIndex + 1}/{testQuestions.length}</div>
                    </div>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{question.question}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                    {answers && answers.map((answer: any) => (
                        <Question key={answer} answer={answer} onClick={handleClick} />
                    ))}

                </div>
            </div>
        </div>
    )
}