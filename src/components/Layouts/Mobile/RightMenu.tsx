"use client"
import { PencilIcon, UserMinusIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { clsx } from '../../../../utils/clsx';
import { useAuth } from '../../../../utils/hooks/useAuth';
import { sleep } from '../../../../utils/sleep';
import { userModalAtom } from '../../../model/atoms';

const RightMenu = () => {
    const [isOpen, setIsOpen] = useRecoilState(userModalAtom)
    const [isCloseStyle, setCloseStyle] = useState(false)
    const { user } = useAuth()

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


                        <div className="w-full min-h-screen p-5 flex  flex-col items-center">

                            <div className="w-full flex flex-col  items-center justify-center p-10">
                                <div className="mb-3 text-center text-xl">{user?.name}</div>
                                <Image src={user?.image as string} width={150} height={100} alt={user?.name as string} className="h-[100px] w-[100px] rounded-full bg-shadow" />
                            </div>
                            {/* <div className=" ring-1 ring-shadow rounded-2xl shadow-sm aspect-square w-full"></div> */}

                            <div className="flex justify-start flex-col items-center space-y-3 w-full text-gray-500 text-[20px]">
                                <Link href={"/setting/profile"} className="ring-1 ring-outline shadow-sm p-1 rounded-xl w-full flex items-center"><PencilIcon className='h-6 w-6 mx-5' />プロフィール編集</Link>
                                <Link href={"/setting"} className="ring-1 ring-outline shadow-sm p-1 rounded-xl w-full flex items-center"><EllipsisHorizontalCircleIcon className='h-6 w-6 mx-5' />アカウント設定</Link>
                                <button onClick={() => signOut()} className="ring-1 ring-outline shadow-sm p-1 rounded-xl w-full text-center flex items-center"><UserMinusIcon className='h-6 w-6 mx-5' />サインアウト</button>
                            </div>

                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default RightMenu

