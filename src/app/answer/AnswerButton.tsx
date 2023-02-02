"use client"

import { PencilIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { answerModalAtom } from '../../model/atoms'

const AnswerButton = () => {
    const [isAnswerModalOpen, setAnswerModalOpen] = useRecoilState(answerModalAtom)
    return (
        <button onClick={() => setAnswerModalOpen(true)}
            className="ring-1 ring-primary text-primary mr-auto rounded-xl px-3 py-1 flex items-center"
        ><PencilIcon className='h-4 w-4' />回答する</button>
    )
}
export default AnswerButton