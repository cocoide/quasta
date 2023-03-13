"use client"
import { HomeIcon, PencilIcon, PlusCircleIcon, BellIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useAuth } from '../../../../utils/hooks/useAuth';
import { loginModalAtom, queryModalAtom } from '../../../model/atoms';

const Navigation = () => {
    const { user } = useAuth()
    const [isQueryModalOpen, setQueryModalOpen] = useRecoilState(queryModalAtom)
    const setLoginModalOpen = useSetRecoilState(loginModalAtom)
    const router = useRouter()
    return (
        <div className="flex items-center justify-center  bg-nothing h-12 w-full 
            fixed bottom-0 py-2 space-x-8 md:hidden text-gray-500 border-t border-neutral shadow-md">
            <Link href={"/"} className="flex flex-col items-center p-1">
                <HomeIcon className="h-8 hover:scale-105 duration-200" />
            </Link>
            <Link href={"/answer"} className="flex flex-col items-center p-1">
                <PencilIcon className="h-8 hover:scale-105 duration-200" />
            </Link>

            <button onClick={() => {
                if (user == null) {
                    return setLoginModalOpen(true)
                };
                setQueryModalOpen(true)
            }} className="">
                <PlusCircleIcon className="h-8 hover:scale-105 duration-200 text-gray-500" />
            </button>

            <button onClick={() => {
                if (user == null) {
                    return setLoginModalOpen(true)
                };
                return router.push("/notification")
            }} className="flex flex-col items-center p-1 relative">

                <BellIcon className="h-8  duration-200" />
            </button>
            <Link href={"/community"} className="flex flex-col items-center p-1">
                <AcademicCapIcon className="h-8 hover:scale-105 duration-200" />
            </Link>
        </div>
    )
}
export default Navigation