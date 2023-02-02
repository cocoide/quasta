"use client"
import { InboxArrowDownIcon, PencilIcon, BellIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { clsx } from '../../../utils/clsx';
import { sleep } from '../../../utils/sleep';
import { userModalAtom } from '../../model/atoms';

const UserModal = () => {
    const [isOpen, setIsOpen] = useRecoilState(userModalAtom)
    const [isCloseStyle, setCloseStyle] = useState(false)
    const { data: session } = useSession()
    const user = session?.user

    async function closeModal() {
        setCloseStyle(true)
        await sleep(0.05)
        setIsOpen(false)
        return setCloseStyle(false)
    }

    return (
        <>
            {isOpen &&
                <>
                    <button onClick={closeModal}
                        className={clsx("z-40 bg-gray-500/30  fixed inset-0 backdrop-blur-sm ",
                            isCloseStyle ? "animate-disappear" : "animate-appear ")} />
                    <div className={clsx("h-screen fixed top-0 right-0 w-[300px] bg-nothing z-50 ",
                        isCloseStyle ? "animate-slideOut" : "animate-slideIn")}>


                        <div className="w-full h-screen p-10 flex justify-between flex-col items-center">

                            <div className="">
                                <div className="mb-3 text-center text-xl">{user?.name}</div>
                                <Image src={user?.image as string} width={150} height={100} alt={user?.name as string} className="h-[100px] w-[100px] rounded-full bg-shadow" />
                            </div>
                            <div className=" ring-1 ring-shadow rounded-2xl shadow-sm aspect-square w-full"></div>

                            <div className="flex justify-start flex-col items-center space-y-5">
                                <div className="ring-1 ring-outline shadow-sm p-1 rounded-xl w-full text-center flex items-center justify-center"><InboxArrowDownIcon className='h-4 w-4' />受信箱</div>
                                <div className="ring-1 ring-outline shadow-sm p-1 rounded-xl w-full text-center flex items-center justify-center"><BellIcon className='h-4 w-4' />通知</div>
                                <div className="ring-1 ring-outline shadow-sm p-1 rounded-xl w-full text-center flex items-center justify-center"><PencilIcon className='h-4 w-4' />プロフィール編集</div>
                            </div>

                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default UserModal

