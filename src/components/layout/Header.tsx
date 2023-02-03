"use client"
import Link from 'next/link'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useMemo, useRef, useState } from 'react'
import { useAuth } from '../../../utils/hooks/useAuth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { userModalAtom } from '../../model/atoms'

const Header = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isUserModalOpen, setUserModalOpen] = useRecoilState(userModalAtom)
    const [query, setQuery] = useState("")
    const { signInWithGoogle, user } = useAuth()
    
    return (
        <div className="sticky top-0 z-30">
            <div className="flex justify-between items-center py-2 px-5  bg-nothing h-18 border-b border-shadow">

            <Link href="/" className="text-[30px] font-bold text-primary"
                >Questa</Link>

            <div className="flex items-center space-x-4 md:space-x-5">


                    {user ?
                        <button onClick={() => setUserModalOpen(true)} className="rounde-full">
                            <Image src={user.image as string} width={100} height={100} alt={user.name as string} className="h-11 w-11  rounded-full bg-shadow" />
                        </button>
                        :
                        <button onClick={signInWithGoogle} className="text-white bg-primary font-bold p-2 rounded-md  text-base font-base"
                        >サインイン</button>
                    }

                    <button
                        onClick={async () => {
                            await setMenuOpen(!isMenuOpen)
                            return (!isMenuOpen) && inputRef && inputRef.current?.focus();

                        }}
                        className="">
                        <MagnifyingGlassIcon className="h-10 w-10 text-primary" />
                    </button>
                </div>
            </div>

            {isMenuOpen &&
                <div className="">

                    <div className="fixed inset-x-0 top-0 flex flex-col  border-b border-shadow py-2 px-3  md:px-[15%] lg:px-[20%] bg-white/95 backdrop-blur-md
                    divide-y divide-shadow z-20
                shadow-md animate-openModal">
                        <div className="flex items-center">

                            <div className="flex items-center w-[100%] px-2 bg-shadow rounded-md mb-2">
                        <MagnifyingGlassIcon className="h-5 w-5  text-gray-500" />
                        <input ref={inputRef}
                            type="search" placeholder="キーワード、#ハッシュタグ" className="bg-shadow w-[100%] p-1 border-transparent focus:ring-0 border-none h-10" />
                            </div>

                            <button onClick={() => setMenuOpen(false)} className="flex w-30 pb-2  pl-2 text-sm whitespace-nowrap items-center">キャンセル</button>
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
                        <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">💭回答する</h2></Link>
                        <Link href={"/community"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">📚コミュニティ</h2></Link>
                    <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100">🗣Quasta(クアスタ)に関するFAQ</h2></Link>
                        <Link href={"/"}><h2 className="p-2 rounded-md hover:bg-neutral duration-100 border-b border-shadow">💻設定</h2></Link>
                    </div>
                    <button onClick={() => setMenuOpen(false)} className="bg-gray-500/30  fixed inset-0 backdrop-blur-sm z-10 animate-appear" ></button>
                </div>
            } 
        </div>
    )
}
export default Header