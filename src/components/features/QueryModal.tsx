"use client"

import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const QueryModal = () => {
    const [isQueryModalOpen, setQueryModalOpen] = useState(false)
    return (
        <>
            {isQueryModalOpen ?
                <>
                    <div className="z-50 bg-white fixed inset-0 sm:mx-10 md:mx-[10%] lg:mx-[20%] my-[100px] md:my-[100px] animate-appear rounded-xl animate-scale p-10 flex flex-col items-center">
                        <button onClick={() => setQueryModalOpen(false)} className="absolute top-5 left-5 rounded-md"><XMarkIcon className=" h-6 w-6 text-gray-400" /></button>
                        <div className="absolute bottom-5 right-5 bg-primary rounded-md py-1 px-2 text-white">作成</div>

                        <div className="flex justify-center space-x-5 text-[18px] font-bold text-gray-500">
                            <h2 className="border-b border-primary p-1">質問</h2>
                            <h2 className="p-1">投稿</h2>
                            <h2 className="p-1">回答</h2>
                        </div>

                        <div className="bg-shadow rounded-xl  w-[100%] px-20 py-10 m-3">
                            <p className="text-[15px]">回答を得やすい質問のポイント</p>
                            <p className="">1.要点が簡潔にまとめられてある</p>
                            <p className="">2.過去に類似の質問が存在しない</p>
                            <p className="">2.誤字脱字がなく読みやすい</p>
                        </div>
                        <input className="w-[100%] h-15 border-b-2 border-shadow focus:ring-transparent p-2 "
                            placeholder="どんな質問がありますか？"></input>

                    </div>
                    <button onClick={() => setQueryModalOpen(false)} className="z-40 bg-gray-500/30  fixed inset-0 backdrop-blur-sm  animate-appear" ></button>
                </>
                :
                <button onClick={() => setQueryModalOpen(true)} className="fixed bottom-3 right-3 shadow-sm bg-primary  rounded-full p-2 ring-1 ring-white"><PlusIcon className="text-white h-6 w-6" /></button>
            }
        </>
    )
}
export default QueryModal