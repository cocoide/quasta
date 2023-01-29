"use client"

import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

const QueryModal = () => {
    const [isQueryModalOpen, setQueryModalOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            {isQueryModalOpen ?
                <>
                    <div className="z-50 bg-white fixed inset-0 sm:mx-[15%] sm:my-20 md:mx-[20%] lg:mx-[30%] md:my-[100px]  animate-appear rounded-t-xl sm:rounded-xl animate-upModal sm:animate-scale p-10 flex flex-col items-center">
                        <button onClick={() => setQueryModalOpen(false)}
                            className="absolute top-5 left-5 rounded-md"><XMarkIcon className=" h-6 w-6 text-gray-400" /></button>
                        <div className="absolute  top-5  right-5 bg-primary rounded-md px-3 py-2 text-white">作成</div>



                        <input ref={inputRef} type="text"
                            className="w-[100%] h-15   focus:ring-transparent ring-none border-none  pt-5 mt-5"
                            placeholder="どんな質問がありますか？"></input>
                        <div className="border w-full border-shadow mb-5"></div>

                        <div className="bg-shadow rounded-xl  w-[100%] px-10 py-10 m-3 text-[15px]">
                            <p className="">回答を得やすい質問のポイント</p>
                            <p className="">1.要点が簡潔</p>
                            <p className="">2.類似の質問がない</p>
                            <p className="">2.誤字脱字がない</p>
                        </div>

                        {/* <div className="flex justify-center space-x-5 text-[18px] font-bold text-gray-500">
                            <h2 className="border-b border-primary p-1">質問</h2>
                            <h2 className="p-1 ">投稿</h2>
                        </div> */}

                    </div>
                    <button onClick={() => setQueryModalOpen(false)} className="z-40 bg-gray-500/30  fixed inset-0 backdrop-blur-sm  animate-appear" ></button>
                </>
                :
                <button onClick={async () => {
                    setQueryModalOpen(true)
                    // return !isQueryModalOpen && inputRef && inputRef.current?.focus()
                }}
                    className="fixed bottom-3 right-3 shadow-sm bg-primary  rounded-full p-2 ring-1 ring-white"><PlusIcon className="text-white h-6 w-6" /></button>
            }
        </>
    )
}
export default QueryModal