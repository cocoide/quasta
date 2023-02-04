"use client"
import Image from 'next/image'
import { FavoriteUserType, FetchAnswerType, } from '../../model/types'
import { ArrowPathIcon, ChatBubbleOvalLeftIcon, GiftIcon, HandThumbDownIcon, HandThumbUpIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import FavoriteButton from './components/FavoriteButton'
import { useState } from 'react'
import CommentsView from './components/CommentsView'
import { useAuth } from '../../../utils/hooks/useAuth'


const Answer = ({ answer }: { answer: FetchAnswerType }) => {
    const [showComment, setShowComment] = useState(false)
    const { user } = useAuth()
    return (
        <div>
            <div className="flex flex-col justify-center items-start p-2 space-y-2">
                <div className="flex flex-row items-center  justify-between space-x-2 w-full">
                    <div className="flex flex-row items-center space-x-3">
                        <Image src={answer.author.image as string} width={70} height={70} alt={answer.author.name as string} className="h-[35px] w-[35px] rounded-full bg-shadow" />
                        <div className="flex flex-col justify-center">
                            <div className="text-[10px] text-gray-600">{answer.author.name}</div>
                            <div className="text-[10px] text-gray-500">大学生</div>
                        </div>
                    </div>
                    <button className="flex items-center bg-blue-50 text-blue-400 rounded-xl p-1 whitespace-nowrap text-[10px]"><PlusCircleIcon className="h-4 w-4" />フォローする</button>
                </div>


                <div className="px-1 text-[18px] text-gray-800 font-semibold">{answer.query.query}</div>
                <div className="px-2 text-[17px] text-gray-700" >{answer.answer}</div>
                <div className="flex flex-row items-center space-x-12  text-gray-400 px-2 w-full">
                    <div className="flex items-center bg-neutral rounded-3xl divide-x divide-gray-300">
                        <FavoriteButton
                            answerId={answer.id}
                            favorite_users={answer.favoritedBy as FavoriteUserType[]} />
                        <HandThumbDownIcon className="h-7 w-7 px-1" />
                    </div>
                    <ArrowPathIcon className="w-5 h-5" />
                    <button onClick={() => {
                        if (user) {
                            return setShowComment(true)
                        }
                    }}
                        className="flex items-center">
                        <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                    </button>
                    <GiftIcon className="w-5 h-5" />
                </div>
            </div>
            <CommentsView isOpen={showComment} />
        </div>
    )
}
export default Answer