"use client"
import { XMarkIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useRef, useState } from 'react';
import { AtomOptions, useRecoilState } from 'recoil';
import useAutosizeTextArea from '../../../../utils/hooks/useAutosizeTextArea';
import { ReactNode } from 'react';

type ModalView = {
    closeFunction: () => void
    postFunction: () => void
    isModalOpen: boolean
    children?: ReactNode
    postAction: string
    placeholder?: string
}
const CreateView = ({ closeFunction, postFunction, isModalOpen, children, postAction, placeholder }: ModalView) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [textAreaValue, setTextAreaValue] = useState("");
    useAutosizeTextArea(textAreaRef?.current, textAreaValue);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target?.value;
        setTextAreaValue(value);
    }

    return (
        <>
            {isModalOpen &&
                <>
                    {/* background shadow */}
                    <button onClick={closeFunction} className="z-30 bg-gray-500/30  fixed inset-0 backdrop-blur-sm  animate-appear" />

                    {/* modal content */}
                    <div className="z-40 bg-white fixed inset-0 sm:mx-[15%] sm:my-20 md:mx-[20%] lg:mx-[30%] md:my-[100px]  animate-appear sm:rounded-3xl  
sm:animate-scale py-10 px-5 sm:px-10 flex flex-col 
items-center animate-upModal duration-700">
                        <button onClick={closeFunction}
                            className="absolute top-5 left-5 rounded-md"
                        ><XMarkIcon className=" h-8 w-8 text-gray-400" /></button>
                        <button onClick={postFunction} className="absolute  top-5  right-5 bg-primary rounded-xl shadow-sm p-2 text-bold text-white flex items-center"
                        ><PlusCircleIcon className="mr-1 h-5 w-5 text-white" />{postAction}</button>
                        <div className="flex flex-col w-[100%] justify-center items-center">

                            {/* option content */}
                            {children}

                            <textarea ref={textAreaRef} onChange={handleChange} rows={1}
                                className="w-[100%] min-h-auto   focus:ring-transparent ring-none border-none resize-none min-h-15"
                                placeholder={placeholder}></textarea>
                            <div className="border w-full border-shadow mb-5"></div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default CreateView