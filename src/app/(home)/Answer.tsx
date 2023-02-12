"use client"
import Image from 'next/image'
import { FavoriteUserType, FetchAnswerType, } from '../../model/types'
import { ArrowPathIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, FaceSmileIcon, GiftIcon, HandThumbDownIcon, PlusCircleIcon, ShareIcon } from '@heroicons/react/24/outline'
import FavoriteButton from './components/FavoriteButton'
import { useState } from 'react'
import { useAuth } from '../../../utils/hooks/useAuth'
import ViewComments from './components/ViewComments';
import Link from 'next/link'


const Answer = ({ answer }: { answer: FetchAnswerType }) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const { user } = useAuth()
    return (
        <div className="flex flex-col">
            <div className="flex flex-row  p-4 w-full">
            <Image src={answer.author.image as string} width={70} height={70} alt={answer.author.name as string} className="h-[35px] w-[35px] rounded-full bg-shadow" />

                <div className="flex flex-col justify-center items-start space-y-2 w-[90%]">
                <div className="flex flex-row items-center  justify-between space-x-2 w-full">
                    <Link href={`/user/${answer.author.id}`} className="flex flex-row items-center space-x-3">
                            <div className="flex flex-col justify-center ml-2">
                                <div className="text-[12px] text-gray-600">{answer.author.name}</div>
                                <div className="text-[11px] text-gray-500">{answer.author.profile?.occupation}大学生</div>
                        </div>
                    </Link>
                    <button className="flex items-center bg-gray-50 text-gray-400 rounded-xl p-1 whitespace-nowrap text-[10px]"><EllipsisHorizontalIcon className="h-4 w-4" /></button>
                </div>

                <div className="text-[14px] text-gray-800 font-semibold">{answer.query.query}</div>

                {answer?.image as string &&
                        <button 
                            className="max-h-[370px]  w-[95%] overflow-hidden">

                            <Image src={answer?.image as string} width={400} height={450} alt={answer.answer as string}
                                className="h-auto w-full rounded-md" />
                        </button>
                }

                <div className="text-[14px] text-gray-700" >{answer.answer}</div>

                    <div className="flex flex-row items-center justify-between  text-gray-400 w-full">
                    <div className="flex items-center bg-neutral rounded-3xl divide-x divide-gray-300">
                        <FavoriteButton
                            answerId={answer.id}
                            favorite_users={answer.favoritedBy as FavoriteUserType[]} />
                        <HandThumbDownIcon className="h-7 w-7 px-1" />
                    </div>
                    <ArrowPathIcon className="w-4 h-4" />
                    <button onClick={() => {
                        if (user) {
                            return setCommentOpen(!commentOpen)
                        }
                    }}
                        className="flex items-center">
                        <ChatBubbleOvalLeftIcon className="w-4 h-4" />{answer._count.comments > 0 && answer._count.comments}
                    </button>
                    <FaceSmileIcon className="w-4 h-4" />
                    <ShareIcon className="w-4 h-4" />
                </div>
            </div>
            </div>
            {commentOpen &&
                <ViewComments answerId={answer.id} comments={answer.comments} />}
        </div>
    )
}
export default Answer