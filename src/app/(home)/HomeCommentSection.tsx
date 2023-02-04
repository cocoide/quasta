"use client"

import { useAuth } from '../../../utils/hooks/useAuth'
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { commentShowAtom } from '../../model/atoms';

const HomeCommentSection = ({ children }: { children: ReactNode }) => {
    const [showComment, setShowComment] = useRecoilState(commentShowAtom)
    const { user } = useAuth()
    return (
        <div className="">

        </div>
    )
}
export default HomeCommentSection