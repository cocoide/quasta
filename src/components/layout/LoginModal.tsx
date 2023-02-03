"use client"

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react'
import { useRecoilState } from 'recoil';
import { clsx } from '../../../utils/clsx';
import { loginModalAtom } from '../../model/atoms';
import ThreeDots from '../ui/loading/ThreeDots';

const LoginModal = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(loginModalAtom)
    const startLoading = async () => { await setIsLoading(true) }
    const startSignIn = async () => { await signIn("google") }

    function closeModal() {
        return setIsLoginModalOpen(false)
    };
    async function handleLogin() {
        await Promise.all([
            startLoading(),
            startSignIn(),
        ])
    };

    return (
        <>
            {isLoginModalOpen &&
                <>
                    <button onClick={() => (!isLoading) && closeModal()} className="z-40 bg-gray-500/30  fixed inset-0 backdrop-blur-sm  animate-appear" />
                    <div className="fixed inset-0 my-[150px] bg-white z-50 p-10 md:mx-[20%] lg:mx-[30%] md:rounded-2xl">
                        <div className="w-full h-full flex flex-col justify-between items-center">
                            <h3 className="text-[18px] text-primary">Quastaへのログインが必要</h3>

                            <Image src="/talking-people.svg" width={200} height={200} alt="discussion" className="h-25 w-25 animate-appear" />
                            <button
                                onClick={() => (!isLoading) && handleLogin()}
                                className={clsx("ring-1 ring-outline rounded-xl shadow-sm p-2 hover:bg-neutral flex justify-center items-center space-x-3 w-[265px] h-18",
                                    isLoading ? "bg-neutral" : "")}>
                                {isLoading ?
                                    <ThreeDots />
                                    :
                                    <>
                                        <Image src="/icon/google.svg" width={100} height={100} alt="google" className="h-5 w-5" />
                                        <div className="text-gray-600">Googleアカウントでログイン</div>
                                    </>
                                }
                            </button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default LoginModal