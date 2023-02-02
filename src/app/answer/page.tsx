import { PencilIcon } from '@heroicons/react/24/solid'
import { cache } from 'react'
import { db } from '../../libs/prisma'
import AnswerButton from './AnswerButton';

const fetchQuestions = cache(async () => {
    return await db.question.findMany({
        select: { query: true }
    })
});

const page = async () => {
    const questions = await fetchQuestions()
    return (
        <div className="w-full flex flex-col">
            {questions.map((q, i) => {
                return <div className="p-5 border-b border-shadow flex flex-col justify-center space-y-2 hover:bg-neutral duration-500" key={i}>
                    <div className="text-[17px] font-bold">{q.query}</div>
                    <AnswerButton />
                </div>
            })}
        </div>
    )
}
export default page