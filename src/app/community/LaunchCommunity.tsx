"use client"
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../libs/consts';

const LaunchCommunity = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({})

    const onSubmitAction = async (data: any) => {
        await axios.post(`${API_URL}/community`, data)
        reset()
    };

    const commonRules = {
        required: "※入力必須",
        minLength: { value: 3, message: `※3文字以上で入力して下さい` },
        maxLength: { value: 15, message: `※15文字以内で入力して下さい` },
    }

    return (
        <form onSubmit={handleSubmit(onSubmitAction)} className="p-10 bg-white flex flex-col">
            <input {...register("id", commonRules)} type="text" placeholder="コミュニティのID" className="rounded-md"></input>
            <p className="text-red-400"><>{errors.id && errors.id.message}</></p>
            <input {...register("name", commonRules)} type="text" placeholder="コミュニティの名前" className="rounded-md mt-2"></input>
            <p className="text-red-400"><>{errors.name && errors.name.message}</></p>
            <input {...register("overview", commonRules)} type="text" placeholder="コミュニティの概要" className="rounded-md mt-2"></input>
            <p className="text-red-400"><>{errors.overview && errors.overview.message}</></p>
            <button type="submit" className="bg-primary text-white p-2 rounded-xl mt-2 mx-auto">作成完了</button>
        </form>
    )
}
export default LaunchCommunity