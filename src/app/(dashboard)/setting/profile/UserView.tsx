"use client"
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { API_URL } from '../../../../libs/consts';
import { userFetcher } from '../../../../../utils/fetcher';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { supabase } from '../../../../libs/supabase';
import { useAuth } from '../../../../../utils/hooks/useAuth';
import NextjsImage from '../../../../components/ui/image/NextjsImage';


const accept = '.png, .jpg, .jpeg, .gif'

const UserView = () => {
    const { register, handleSubmit, setValue } = useForm({})
    const { data } = useSWR(`${API_URL}/user`, userFetcher)
    const { user } = useAuth()
    const [imagePath, setImagePath] = useState<string>()
    
    async function handleUploadImage(e: ChangeEvent<HTMLInputElement>) {
        const imageFile = e.target?.files![0]
        uploadStorage(imageFile)
    }
    const onSubmit = async (data: any) => {
        await axios.patch(`${API_URL}/user`, data)
    };

    async function uploadStorage(imageFile: File) {
        const pathName = `${user?.id}/avater/${uuidv4()}`
        const { data } = await supabase.storage
            .from("quasta")
            .upload(pathName, imageFile)
        setValue("image", `https://kwiypgkubpkqnbedclhy.supabase.co/storage/v1/object/public/quasta/${data?.path}`)
        setImagePath(`https://kwiypgkubpkqnbedclhy.supabase.co/storage/v1/object/public/quasta/${data?.path}`)
    }

    useEffect(() => {
        setValue("name", data?.name)
        setValue("occupation", data?.profile?.occupation)
        setValue("overview", data?.profile?.overview)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 flex flex-col md:flex-row w-full  h-full">
            <div className="mr-5 mb-3 flex-none">
                    <div>
                        <label>
                        {imagePath != undefined ?
                            <NextjsImage src={imagePath} alt={data?.name as string} w={70} h={70} style={"h-[70px] w-[70px] rounded-full bg-shadow"} />
                            :
                            data?.image &&
                            <Image src={data?.image as string} alt={data?.name as string} width={100} height={100}
                                className="h-[70px] w-[70px] rounded-full bg-shadow" />
                        }
                        <input type="file" className="sr-only" accept={accept}
                                onChange={handleUploadImage} />
                        </label>
                </div>
            </div>

            <div className="flex flex-col space-y-1 w-full ">
                <div className="text-[15px]">表示名</div>
                <input {...register("name")}
                    className="w-full ring-1 ring-shadow rounded-md p-2 bg-blue-50"></input>
                <p className="h-5"></p>

                <div className="text-[15px]">職業</div>
                <input  {...register("occupation")}
                    className="w-full ring-1 ring-shadow rounded-md p-2 bg-blue-50"></input>
                <p className="h-5"></p>

                <div className="text-[15px]">自己紹介</div>
                <textarea  {...register("overview")}
                    rows={2} className="w-full ring-1 ring-shadow rounded-md border-none
            bg-blue-50 p-2"></textarea>
                <p className="h-5"></p>
                <button type="submit"
                    className="bg-primary text-white rounded-md p-1 w-[150px] mx-auto
            flex items-center justify-center"><ArrowPathIcon className="w-5 h-5"></ArrowPathIcon>更新する</button>
            </div>
        </form>
    )
}
export default UserView