"use client"

import { useRouter } from 'next/navigation';
import { checkAnswerIsLike } from '../../../../utils/check';
import { useAuth } from '../../../../utils/hooks/useAuth';
import { API_URL } from '../../../libs/consts';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { clsx } from '../../../../utils/clsx';
import { FavoriteUserType } from '../../../model/types';
import useMutation from "swr/mutation";
import { answerFetcher } from '../../../../utils/fetcher';

type FavoriteButtonType = {
    answerId: string,
    favorite_users: FavoriteUserType[]
}


const FavoriteButton = ({ answerId, favorite_users }: FavoriteButtonType) => {
    const router = useRouter()
    const { user } = useAuth()
    const { trigger } = useMutation(`${API_URL}/answer`, answerFetcher);


    async function handleClick(answerId: string) {
        if (checkAnswerIsLike(favorite_users, user?.id as string)) {
            return handleUnFavorite(answerId)
        };
        return handleFavorite(answerId)
    }

    async function handleFavorite(answerId: string) {
        await fetch(`${API_URL}/answer/favorite/${answerId}`, {
            method: "PATCH",
        })
        trigger()
        router.refresh()
    };

    async function handleUnFavorite(answerId: string) {
        await fetch(`${API_URL}/answer/favorite/${answerId}`, {
            method: "DELETE",
        })
        trigger()
        router.refresh()
    };

    return (
        <button onClick={async () => handleClick(answerId)} className="flex items-center">
            {checkAnswerIsLike(favorite_users, user?.id as string) ?

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffa0b5" className="w-6 h-6 pl-1">
                    <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                </svg>

                :
                <HandThumbUpIcon className="h-6 w-6 pl-1" />
            }
            <div className={clsx(checkAnswerIsLike(favorite_users, user?.id as string) ? "text-[#ffa0b5] pr-1" : "pr-1")}>{favorite_users.length !== 0 && favorite_users.length}</div>
        </button>
    )
}
export default FavoriteButton
