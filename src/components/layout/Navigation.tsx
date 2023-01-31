"use client"
import { AcademicCapIcon, BellIcon, HomeIcon, PencilIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { RssIcon } from '@heroicons/react/24/solid';
import Link from 'next/link'
import { useRecoilState } from 'recoil';
import { queryModalAtom } from '../../model/atoms';

const Navigation = () => {
    const [isQueryModalOpen, setQueryModalOpen] = useRecoilState(queryModalAtom)
    return (
        <div className="flex items-center justify-center  bg-nothing h-15 w-full 
            fixed bottom-0 py-1 space-x-8 md:hidden text-gray-400 ">
            <Link href={"/"} className="flex flex-col items-center">
                <HomeIcon className="h-8 hover:scale-105 duration-200" />
                <h3 className="text-[4px]">ホーム</h3>
            </Link>
            <Link href={"/"} className="flex flex-col items-center">
                <RssIcon className="h-8 hover:scale-105 duration-200" />
                <h3 className="text-[4px]">フォロー</h3>
            </Link>
            <button onClick={() => setQueryModalOpen(true)} className="">
                <PlusCircleIcon className="h-10 hover:scale-105 duration-200" />
            </button>
            <Link href={"/community"} className="flex flex-col items-center">
                <AcademicCapIcon className="h-8 hover:scale-105 duration-200" />
                <h3 className="text-[4px]">コミュニティ</h3>
            </Link>
            <Link href={"/"} className="flex flex-col items-center">
                <PencilIcon className="h-8 hover:scale-105 duration-200" />
                <h3 className="text-[4px]">回答する</h3>
            </Link>
        </div>
    )
}
export default Navigation