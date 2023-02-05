"use client"
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../utils/hooks/useAuth'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { userModalAtom } from '../../model/atoms'
import SuggestedLists from './SuggestedLists'
import { API_URL } from '../../libs/consts'

const lists = [
    { question: "わええあw" },
    { question: "わewa" },
    { question: "わええあwジェwjアイエじゃ" },
    { question: "声わジェwjアイエじゃ" },
]


const Header = () => {
    const [query, setQuery] = useState("")
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [searchLists, setSearchLists] = useState<{ question: string }[]>()

    useEffect(() => {
        fetch(`${API_URL}/search`, { method: "GET" })
            .then(res => res.json())
            .then(data => setSearchLists(data))
    }, [isMenuOpen]);

    const inputRef = useRef<HTMLInputElement>(null);
    const [isUserModalOpen, setUserModalOpen] = useRecoilState(userModalAtom)
    const { signInWithGoogle, user } = useAuth()
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target?.value)
    }

    return (
        <div className="sticky top-0 z-30 w-screen">
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

                    <div className="fixed inset-x-0 top-0 flex flex-col  py-2 px-3  md:px-[15%] lg:px-[20%] bg-white/95 backdrop-blur-md z-20
                shadow-md animate-openModal">
                        <div className="flex items-center">

                            <div className="flex items-center w-[100%] px-2 bg-shadow rounded-md mb-2">
                        <MagnifyingGlassIcon className="h-5 w-5  text-gray-500" />
                                <input ref={inputRef} onChange={handleChange}
                            type="search" placeholder="キーワード、#ハッシュタグ" className="bg-shadow w-[100%] p-1 border-transparent focus:ring-0 border-none h-10" />
                            </div>

                            <button onClick={() => {
                                setMenuOpen(false)
                                setQuery("")
                            }} className="flex w-30 pb-2  pl-2 text-sm whitespace-nowrap items-center">キャンセル</button>
                        </div>

                    {
                            (query.length == 0) ?
                                <>
                                    <div className="p-2  hover:bg-neutral duration-100 bg-white">キーワードを入力</div>
                                </>
                                :
                                <SuggestedLists searchLists={searchLists as unknown as { query: string }[]} keyword={query} />
                        }
                    </div>
                    <button onClick={() => { setMenuOpen(false), setQuery("") }} className="bg-gray-500/30  fixed inset-0 backdrop-blur-sm z-10 animate-appear" ></button>
                </div>
            } 
        </div>
    )
}
export default Header