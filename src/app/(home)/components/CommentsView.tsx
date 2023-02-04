"use client"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useAuth } from '../../../../utils/hooks/useAuth'

type CommentsViewType = {
    isOpen: boolean,
}
const CommentsView = ({ isOpen }: CommentsViewType) => {
    const { user } = useAuth()
    return (
        <>
            {isOpen &&
                <div className="flex flex-col items-center w-full bg-neutral">
                    <div className="flex flex-row items-center p-2 w-full">
                        <Image src={user?.image as string} width={150} height={100} alt={user?.name as string}
                            className="h-[35px] w-[35px] rounded-full bg-shadow" />
                        <button className="bg-white w-full h-9 rounded-full mx-4"></button>
                        <PaperAirplaneIcon className="h-7 w-7 text-primary" />
                    </div>
                </div>
            }
        </>
    )
}
export default CommentsView