"use client"
import { CheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../../utils/hooks/useAuth'
import { API_URL } from '../../../libs/consts'
import useSWR from 'swr';
import { checkFetcher } from '../../../../utils/fetcher';


const FollowButton = ({ uid }: { uid: string }) => {
    const { user } = useAuth()
    const [following, setFollwoing] = useState(false)
    const { data } = useSWR(`${API_URL}/user/follow/${uid}`, checkFetcher)

    useEffect(() => {
        if (data != null) {
            setFollwoing(data)
        }
    }, [data])

    function handleDoFollow(id: string) {
        setFollwoing(true)
        fetch(`${API_URL}/user/follow/${id}`, {
            method: "PATCH"
        })
    }

    function handleUnFollow(id: string) {
        setFollwoing(false)
        fetch(`${API_URL}/user/follow/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <div className="ml-auto w-auto">
            {uid !== user?.id ?

                following ?
                    <button onClick={() => handleUnFollow(uid)}
                        className="rounded-full p-2 bg-blue-300 text-white flex items-center shadow-sm"
                    ><CheckIcon className='h-4 w-4' />フォロー中</button>
                    :
                    <button onClick={() => handleDoFollow(uid)}
                        className="ring-1 ring-outline rounded-full p-2 bg-gray-700 text-white shadow-sm"
                    >フォローする</button>
                :
                <Link href={"/setting/profile"} className="ring-1 ring-outline rounded-full p-2"
                >プロフィールを編集</Link >
            }
        </div>
    )
}
export default FollowButton