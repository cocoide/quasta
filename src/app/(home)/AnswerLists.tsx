import { ArrowPathIcon, ChatBubbleOvalLeftIcon, GiftIcon, HandThumbDownIcon, HandThumbUpIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { cache } from 'react'
import { db } from '../../libs/prisma'


const AnswerLists = async () => {
    const answers = await fetchAnswers()
    return (
        <div className="flex flex-col space-y-2  bg-white ring-1 ring-shadow divide-y divide-shadow">
            {answers.map((a, i) => {
                return (
                    <div key={i} className="flex flex-col justify-center items-start p-2 space-y-2">
                        <div className="flex flex-row items-center  justify-between space-x-2 w-full">
                            <div className="flex flex-row items-center space-x-3">
                                <Image src={a.author.image as string} width={70} height={70} alt={a.author.name as string} className="h-[35px] w-[35px] rounded-full bg-shadow" />
                                <div className="flex flex-col justify-center">
                                    <div className="text-[10px] text-gray-600">{a.author.name}</div>
                                    <div className="text-[10px] text-gray-500">大学生</div>
                                </div>
                            </div>
                            <button className="flex items-center bg-blue-50 text-blue-400 rounded-xl p-1 whitespace-nowrap text-[10px]"><PlusCircleIcon className="h-4 w-4" />フォローする</button>
                        </div>


                        <div className="px-1 text-[18px] text-gray-800 font-semibold">{a.query.query}</div>
                        <div className="px-2 text-[17px] text-gray-700" >{a.answer}</div>
                        <div className="flex flex-row items-center space-x-12  text-gray-400 px-2 w-full">
                            <div className="flex items-center bg-neutral rounded-3xl divide-x divide-gray-300">
                                <HandThumbUpIcon className="h-6 w-6 px-1" /><HandThumbDownIcon className="h-6 w-6 px-1" />
                            </div>
                            <ArrowPathIcon className="h-4 w-4" />
                            <ChatBubbleOvalLeftIcon className="h-4 w-4" />
                            <GiftIcon className="h-4 w-4" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default AnswerLists


const fetchAnswers = cache(async () => {
    const res = await db.answer.findMany({
        orderBy: {
            createdAt: "desc"
        },
        select: {
            answer: true,
            query: {
                select: {
                    query: true
                },
            },
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
        },
    })
    return res
})