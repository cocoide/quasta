"use client"
import Link from 'next/link'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

const Header = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [query, setQuery] = useState("")
    return (
        <div className="sticky top-0 z-40">
        <div className="flex justify-between items-center py-2 px-5  md:px-10
         bg-nothing h-18 border-b border-shadow">

            <Link href="/" className="text-[30px] font-bold text-primary"
            >Quasta</Link>

            <div className="flex items-center space-x-4 md:space-x-5">
                <button className="text-white bg-primary font-bold p-2 rounded-md  text-base font-base"
                >サインイン</button>
                    <button
                        onClick={async () => {
                            await setMenuOpen(!isMenuOpen)
                            return (!isMenuOpen) && inputRef && inputRef.current?.focus();

                        }}
                        className="">
                        {(!isMenuOpen) ?
                            <MagnifyingGlassIcon className="h-10 w-10 text-primary" />
                            :
                            <XMarkIcon className="h-8 w-8 mx-1 text-primary" />
                        }
                    </button>
                </div>
            </div>

            {isMenuOpen &&
                <div className="absolute inset-x-0 flex flex-col  border-b border-shadow py-2 px-5 md:py-5  md:px-[15%] bg-nothing divide-y divide-shadow z-30
                shadow-md">
                    <div className="flex items-center w-[100%] px-2 bg-shadow rounded-md mb-2 md:mb-5">
                        <MagnifyingGlassIcon className="h-5 w-5  text-gray-500" />
                        <input ref={inputRef}
                            type="search" placeholder="キーワード、#ハッシュタグ" className="bg-shadow w-[100%] p-1 border-transparent focus:ring-0 border-none h-10" />
                    </div>
                    {
                        (query.length > 0) ?
                            <div className="">
                                <div>教育</div>
                                <div>プログラミング</div>
                            </div>
                            :
                            <></>
                    }
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">✍🏻質問・議題を作成</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">💭回答・議論する</h2></Link>
                    <Link href={"/seminar"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">📚ゼミナール</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">🗣Quasta(クアスタ)に関するFAQ</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100 border-b border-shadow">💻設定</h2></Link>
                </div>
            } 
        </div>
    )
}
export default Header