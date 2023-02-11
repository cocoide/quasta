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
        <div>
            <div className="flex flex-col justify-center items-start p-4 space-y-1">
                <div className="flex flex-row items-center  justify-between space-x-2 w-full">
                    <Link href={`/user/${answer.author.id}`} className="flex flex-row items-center space-x-3">
                        <Image src={answer.author.image as string} width={70} height={70} alt={answer.author.name as string} className="h-[35px] w-[35px] rounded-full bg-shadow" />
                        <div className="flex flex-col justify-center">
                            <div className="text-[13px] text-gray-600">{answer.author.name}</div>
                            <div className="text-[10px] text-gray-500">{answer.author.profile?.occupation}</div>
                        </div>
                    </Link>
                    <button className="flex items-center bg-gray-50 text-gray-400 rounded-xl p-1 whitespace-nowrap text-[10px]"><EllipsisHorizontalIcon className="h-4 w-4" /></button>
                </div>


                {answer?.image as string &&
                    <Image src={answer?.image as string} width={100} height={100} alt={answer.answer as string}
                        className="h-[200px] w-auto mx-auto rounded-md" />
                }
                <div className="px-1 text-[16px] text-gray-800 font-semibold pt-2">{answer.query.query}</div>
                <div className="px-2 text-[14px] text-gray-700" >{answer.answer}</div>


                <div className="flex flex-row items-center justify-between space-x-12  text-gray-400 px-2 w-full pt-2">
                    <div className="flex items-center bg-neutral rounded-3xl divide-x divide-gray-300">
                        <FavoriteButton
                            answerId={answer.id}
                            favorite_users={answer.favoritedBy as FavoriteUserType[]} />
                        <HandThumbDownIcon className="h-7 w-7 px-1" />
                    </div>
                    <ArrowPathIcon className="w-5 h-5" />
                    <button onClick={() => {
                        if (user) {
                            return setCommentOpen(!commentOpen)
                        }
                    }}
                        className="flex items-center">
                        <ChatBubbleOvalLeftIcon className="w-5 h-5" />{answer._count.comments > 0 && answer._count.comments}
                    </button>
                    <FaceSmileIcon className="w-5 h-5" />
                    <ShareIcon className="w-5 h-5" />
                </div>
            </div>
            {commentOpen &&
                <ViewComments answerId={answer.id} comments={answer.comments} />}
        </div>
    )
}
export default Answer