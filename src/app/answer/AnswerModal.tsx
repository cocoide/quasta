"use client"

import { PaperAirplaneIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { answerModalAtom } from '../../model/atoms'
import useAutosizeTextArea from '../../../utils/hooks/useAutosizeTextArea';

const AnswerModal = () => {
    const [isAnswerModalOpen, setAnswerModalOpen] = useRecoilState(answerModalAtom)
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;

        setValue(val);
    };
    return (
        <>
            {isAnswerModalOpen &&
                <div className="w-full h-auto sticky bottom-0 flex justify-between items-center p-2 z-30 bg-nothing
            border-y border-shadow">
                    <PlusCircleIcon className="h-7 w-7 m-1 text-primary" />
                    <textarea onChange={handleChange} ref={textAreaRef}
                        rows={1} className="w-[100%] bg-neutral shadow-inner rounded-md  resize-none min-h-[100%]
                    border-none focus:ring-transparent ring-none"></textarea>
                    <PaperAirplaneIcon className="h-7 w-7 m-1 text-primary" />
                </div>
            }
        </>
    )
}
export default AnswerModal