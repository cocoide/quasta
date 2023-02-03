"use client"

import { PencilIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useAuth } from '../../../utils/hooks/useAuth'
import { answerModalAtom, loginModalAtom, selectQueryAtom } from '../../model/atoms'

const AnswerButton = ({ query }: { query: string }) => {

    const setLoginModalOpen = useSetRecoilState(loginModalAtom)
    const { user } = useAuth()
    const [isAnswerModalOpen, setAnswerModalOpen] = useRecoilState(answerModalAtom)
    const [isSelectQuery, focusSelectQuery] = useRecoilState(selectQueryAtom)
    return (
        <button onClick={() => {
            if (user == null) {
                return setLoginModalOpen(true)
            };
            setAnswerModalOpen(true)
            focusSelectQuery(query)
        }}
            className="ring-1 ring-primary text-primary mr-auto rounded-xl px-3 py-1 flex items-center"
        ><PencilIcon className='h-4 w-4' />回答する</button>
    )
}
export default AnswerButton