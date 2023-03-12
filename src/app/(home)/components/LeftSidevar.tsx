"use client"
import { AcademicCapIcon, BellIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, HashtagIcon, InboxArrowDownIcon, PencilIcon, PlusCircleIcon, RssIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link'
import { useSetRecoilState } from 'recoil';
import { useAuth } from '../../../../utils/hooks/useAuth';
import { loginModalAtom, queryModalAtom } from '../../../model/atoms';


const LeftSidevar = () => {
    const setQueryOpen = useSetRecoilState(queryModalAtom)
    const setLoginModalOpen = useSetRecoilState(loginModalAtom)
    const { user } = useAuth()

    return (
        <div className="hidden md:flex flex-col p-5 w-[220px] lg:w-[250px] justify-between  items-center h-[100%]">
            <div className="flex flex-col  justify-center w-full space-y-4 text-[18px]">
                <Link href="/" className="text-[35px] font-bold text-primary">Quasta</Link>

                <Link href={"/"} className="p-2 rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center mr-auto"
                ><HashtagIcon className="h-5 w-5 mr-3" />トピック</Link>

                <Link href={"/community"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-600 text-gray-500 flex items-center"
                ><AcademicCapIcon className="h-5 w-5 mr-3" />コミュニティ</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><RssIcon className="h-5 w-5 mr-3" />フォロー</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><BellIcon className="h-5 w-5 mr-3" />通知</Link>

                <Link href={"/setting"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><EllipsisHorizontalCircleIcon className="h-5 w-5 mr-3" />設定</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><InboxArrowDownIcon className="h-5 w-5 mr-3" />受信箱</Link>

                <Link href={"/answer"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><PencilIcon className="h-5 w-5 mr-3" />回答する</Link>

            </div>

            <div className="w-full p-2 space-y-3">
                <button
                    onClick={() => {
                        if (user == undefined) {
                            return setLoginModalOpen(true)
                        }
                        setQueryOpen(true)
                    }}
                    className="bg-primary rounded-xl p-2 w-full text-white font-bold text-[15px] flex items-center justify-center"><PlusCircleIcon className="h-5 w-5 mr-1" />投稿する</button>
                {user &&
                    <Link href={`/user/${user.id}`} className="rounded-full  p-1 flex items-center justify-between hover:bg-neutral">
                        <div className="flex items-center space-x-3">
                            <Image src={user.image as string} width={100} height={100} alt={user.name as string} className="h-9 w-9  rounded-full bg-shadow" />
                            <div className="flex flex-col">
                                <div className="text-gray-700 text-[13px] font-bold"> {user?.name}</div>
                                <div className="text-gray-500 text-[12px]">@{user?.id}</div>
                            </div>
                        </div>
                        <button className=""><EllipsisHorizontalIcon className="h-5 w-5" /> </button>
                    </Link>
                }
            </div>
        </div>
    )
}
export default LeftSidevar