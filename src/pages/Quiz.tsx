import { useEffect, useState, useTransition } from "react"
import { Question } from "../component/Question"

export const Quiz = () => {
    const [count, setCount] = useState(30)
    const [questionIndex, setQuestionIndex] = useState(1)
    const [question, setQuestion] = useState(30)
    useEffect(() => {
        count > 0 && setTimeout(() => setCount(count - 1), 1000);
        console.log(count);

    }, [count])
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <div className=" flex justify-between p-2 bg-gray-100 text-indigo-500 sm:text-lg md:text-xl font-semibold rounded-lg mb-10">
                        <div className="" x-text="seconds">{count}:00</div>
                        <div className="" x-text="seconds">{questionIndex}/40</div>
                    </div>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
        </div>
    )
}