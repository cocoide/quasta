"use client"
import Link from 'next/link'
import { MagnifyingGlassIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    return (
        <div className="">
        <div className="flex justify-between items-center py-2 px-5  md:px-10
         bg-nothing h-18 border-b border-shadow">

            <Link href="/" className="text-[30px] font-bold text-primary"
            >Quasta</Link>

            <div className="flex items-center space-x-4 md:space-x-5">
                <button className="text-white bg-primary font-bold p-2 rounded-md  text-base font-base"
                >サインイン</button>
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="">
                        <Squares2X2Icon className="h-10 w-10 text-primary" />
                    </button>
                </div>
            </div>

            {isMenuOpen &&
                <div className="flex flex-col  border-b border-shadow py-2 px-5 md:py-5  md:px-[15%] bg-nothing divide-y divide-shadow ">
                    <div className="flex items-center w-[100%] px-2 bg-shadow rounded-md mb-2 md:mb-5">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                        <input type="search" placeholder="キーワード、#ハッシュタグ." className="bg-shadow w-[100%] p-1 border-transparent focus:ring-0 border-none" />
                    </div>

                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">✍🏻質問・議題を作成</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">💭回答・議論する</h2></Link>
                    <Link href={"/salon"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">📔サロン</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">🗣Quasta(クアスタ)に関するFAQ</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">💻設定</h2></Link>
                </div>
            }
        </div>
    )
}
export default Header