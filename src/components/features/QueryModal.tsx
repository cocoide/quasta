"use client"

import { GlobeEuropeAfricaIcon, PlusCircleIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { ChangeEvent, useRef, useState } from 'react'
import { clsx } from '../../../utils/clsx'

const QueryModal = () => {
    const [modalEffect, setModalEffect] = useState(false)
    const [isQueryModalOpen, setQueryModalOpen] = useState(false)
    const [isCheckModalOpen, setCheckModalOpen] = useState(false)
    const [keyword, setKeyword] = useState("")
    function handleChange(e: ChangeEvent<{ value: string }>) {
        return setKeyword(e.target.value)
    }
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            {isQueryModalOpen ?
                <>
                    <div className="z-40 bg-white fixed inset-0 sm:mx-[15%] sm:my-20 md:mx-[20%] lg:mx-[30%] md:my-[100px]  animate-appear sm:rounded-3xl  sm:animate-scale py-10 px-5 sm:px-10 flex flex-col items-center animate-upModal">
                        <button onClick={() => { keyword.length > 3 ? setCheckModalOpen(true) : setQueryModalOpen(false), setModalEffect(true) }}
                            className="absolute top-5 left-5 rounded-md"><XMarkIcon className=" h-8 w-8 text-gray-400" /></button>
                        <div className="absolute  top-5  right-5 bg-primary rounded-xl shadow-sm p-2 text-bold text-white flex items-center"><PlusCircleIcon className="mr-1 h-5 w-5 text-white" />質問を投稿</div>

                        <div className="flex items-start w-[100%] space-x-3 pt-8">
                            <Image src="/avater.png" width={150} height={100} alt="avater" className="h-[70px] w-[70px] rounded-full" />
                            <div className="flex flex-col w-[100%] justify-center items-center">
                                <div className="ring-1 ring-gray-300 m-2 text-center rounded-2xl text-blue-400 flex items-center justify-center  p-1 mr-auto text-[12px] font-bold"><GlobeEuropeAfricaIcon className="w-4 h-4" /><h2>全員に公開</h2></div>

                                <input ref={inputRef} type="text" onChange={handleChange} value={keyword}
                                    className="w-[100%] h-15   focus:ring-transparent ring-none border-none" placeholder="どんな質問がありますか？"></input>
                                <div className="border w-full border-shadow mb-5"></div>
                            </div>
                        </div>
                        <div className="bg-blue-50 rounded-xl  w-[100%] px-10 py-10 m-3 text-[15px] text-blue-400">
                            <p className="">回答を得やすい質問のポイント</p>
                            <p className="">1.要点が簡潔</p>
                            <p className="">2.類似の質問がない</p>
                            <p className="">2.誤字脱字がない</p>
                        </div>

                    </div>
                    <button onClick={() => { keyword.length > 3 ? setCheckModalOpen(true) : setQueryModalOpen(false) }} className="z-30 bg-gray-500/30  fixed inset-0 backdrop-blur-sm  animate-appear" ></button>
                    {isCheckModalOpen &&
                        <>
                            <button className="z-40 bg-gray-500/30  fixed inset-0 backdrop-blur-sm  animate-appear" ></button>
                            <div className="z-50 bg-white  rounded-3xl  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3  animate-appear
                             p-10  flex flex-col justify-center items-center space-y-3">
                            <div className="whitespace-nowrap">編集した質問を削除しますか？</div>
                                <button onClick={() => { setQueryModalOpen(false), setCheckModalOpen(false), setKeyword("") }} className="rounded-md p-2 text-center ring-1 ring-outline text-gray-400 bg-shadow font-bold">完全に削除する</button>
                                <button className="rounded-md p-2 text-center bg-blue-400 text-white font-bold">下書き保存する</button>
                            </div>
                        </>
                    }

                </>
                :
                <button onClick={async () => {
                    setQueryModalOpen(true)
                    // return !isQueryModalOpen && inputRef && inputRef.current?.focus()
                }}
                    className="fixed bottom-3 right-3  bg-primary  rounded-full p-2 ring-1 ring-white shadow-md"><PlusIcon className="text-white h-6 w-6" /></button>
            }
        </>
    )
}
export default QueryModal