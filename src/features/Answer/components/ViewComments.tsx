"use client"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../../../utils/hooks/useAuth'
import { API_URL } from '../../../libs/consts';

type InputType = {
    comment: string,
}
type CommentViewType = {
    answerId: string,
    comments: {
        comment: string;
        author: {
            name: string | null;
            image: string | null;
        };
    }[]
};
const ViewComments = ({ answerId, comments }: CommentViewType) => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm<InputType>();
    const onSubmit: SubmitHandler<InputType> = async (data) => {
        await fetch(`${API_URL}/comment/${answerId}`, {
            method: "POST",
            body: data.comment
        })
        return reset()
    }
    return (
        <div className="flex flex-col w-full">
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center w-full">
                <div className="flex flex-row items-center p-2 w-full bg-white border-y border-neutral">
                    <Image src={user?.image as string} width={150} height={100} alt={user?.name as string}
                        className="h-[35px] w-[35px] rounded-full bg-shadow" />
                    <input {...register("comment", { minLength: 3, maxLength: 50 })}
                        className="bg-neutral w-full h-9 rounded-full mx-3 py-1 px-2 
                 outline-none ring-none focus:ring-transparent"></input>
                    <button className="flex items-center">
                        <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                    </button>
                </div>
            </form>
            {comments.map((comment, i) => {
                return (
                    <div key={i} className="flex  flex-col  pt-2 pl-2 bg-white ">
                        <div className="flex flex-row items-center space-x-2 ">
                            <Image src={comment.author.image as string} width={70} height={70} alt={comment.author.name as string} className="h-[30px] w-[30px] rounded-full bg-shadow" />
                            <div className="flex flex-col justify-center">
                                <div className="text-[13px] text-gray-600">{comment.author.name}</div>
                            </div>
                        </div>
                        <h3 className="text-gray-500 text-[13px] p-1">{comment.comment}</h3>
                    </div>
                )
            })}

        </div>
    )
}
export default ViewComments