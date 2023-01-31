"use client"
import { AcademicCapIcon, BellIcon, EllipsisHorizontalCircleIcon, HashtagIcon, InboxArrowDownIcon, PlusCircleIcon, RssIcon, UserIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRecoilState } from 'recoil';
import { queryModalAtom } from '../../../model/atoms';


const LeftSidevar = () => {
    const [isQueryOpen, setQueryOpen] = useRecoilState(queryModalAtom)

    return (
        <div className="hidden md:flex flex-col p-5 w-[220px] lg:w-[250px] justify-between  items-center h-[100%]">
            <div className="flex flex-col  justify-center w-full space-y-5 text-[18px]">
                <Link href="/" className="text-[35px] font-bold text-primary">Questa</Link>

                <Link href={"/"} className="p-2 rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center mr-auto"
                ><HashtagIcon className="h-5 w-5 mr-3" />トピック</Link>

                <Link href={"/community"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-600 text-gray-500 flex items-center"
                ><AcademicCapIcon className="h-5 w-5 mr-3" />コミュニティ</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><RssIcon className="h-5 w-5 mr-3" />フォロー</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><BellIcon className="h-5 w-5 mr-3" />通知</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><EllipsisHorizontalCircleIcon className="h-5 w-5 mr-3" />設定</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><InboxArrowDownIcon className="h-5 w-5 mr-3" />受信箱</Link>

                <Link href={"/"} className="p-2 mr-auto rounded-xl hover:bg-gray-100 duration-500 text-gray-600 flex items-center"
                ><UserIcon className="h-5 w-5 mr-3" />プロフィール</Link>

            </div>

            <div className="w-full p-2 space-y-3">
                <button onClick={() => setQueryOpen(true)} className="bg-primary rounded-xl p-2 w-full text-white font-bold text-[15px] flex items-center justify-center"><PlusCircleIcon className="h-5 w-5 mr-1" />質問する</button>
                <Link href={"/answer"} className="bg-white ring-1 ring-primary rounded-xl w-full p-2 text-primary font-bold text-[15px] flex items-center justify-center"><PencilIcon className="h-5 w-5 mr-1" />回答する</Link>
            </div>
        </div>
    )
}
export default LeftSidevar