"use client"
import CreateView from '../../components/ui/modal/CreateView';
import { useRecoilState } from 'recoil';
import { answerModalAtom, selectQueryAtom } from '../../model/atoms';
import { API_URL } from '../../libs/consts';
import { ChangeEvent, useRef, useState } from 'react';
import useAutosizeTextArea from '../../../utils/hooks/useAutosizeTextArea';
import { v4 as uuidv4 } from "uuid";
import { useAuth } from '../../../utils/hooks/useAuth';
import { supabase } from '../../libs/supabase';
import { useForm } from 'react-hook-form';
import RenderImage from '../../components/ui/image/RenderImage';
import { CameraIcon, PhotoIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const accept = '.png, .jpg, .jpeg, .gif'

const AnswerModal = () => {

    const { user } = useAuth()
    const [isModalOpen, setModalOpen] = useRecoilState(answerModalAtom);
    const [isSelectQuery, setSelectQuery] = useRecoilState(selectQueryAtom)
    const [answerText, setAnswerText] = useState("")

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [textAreaValue, setTextAreaValue] = useState("");
    useAutosizeTextArea(textAreaRef?.current, textAreaValue);


    const { register, handleSubmit, setValue, reset } = useForm({})
    const [imagePath, setImagePath] = useState<string>()


    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setAnswerText(e.target?.value)
        const value = e.target?.value;
        setTextAreaValue(value);
        setValue("answer", answerText)
    };

    function closeModal() {
        setImagePath(undefined)
        reset()
        setAnswerText("")
        return setModalOpen(false)
    };


    const onSubmit = async (data: any) => {
        if (answerText.length > 2) {
            await axios.post(`${API_URL}/answer/${isSelectQuery}`, data)
            setSelectQuery("")
            setAnswerText("")
            setImagePath(undefined)
            console.log(data)
            return setModalOpen(false)
        }
    };


    async function uploadStorage(imageFile: File) {
        const pathName = `${user?.id}/posts/${uuidv4()}`
        const { data } = await supabase.storage
            .from("quasta")
            .upload(pathName, imageFile)
        setValue("image", `https://kwiypgkubpkqnbedclhy.supabase.co/storage/v1/object/public/quasta/${data?.path}`)
        setImagePath(`https://kwiypgkubpkqnbedclhy.supabase.co/storage/v1/object/public/quasta/${data?.path}`)
    }
    async function handleUploadImage(e: ChangeEvent<HTMLInputElement>) {
        const imageFile = e.target?.files![0]
        uploadStorage(imageFile)
    }


    return (
        <CreateView
            closeFunction={closeModal}
            postFunction={handleSubmit(onSubmit)}
            isModalOpen={isModalOpen}
            postAction={"回答する"}
            placeholder={"回答、意見、提案などを記入"}
            inputText={answerText}
            textAreaRef={textAreaRef}
            handleChange={handleChange}
        ><>
                <h3 className="text-xl text-gray-700 m-10">{isSelectQuery}</h3>
                {answerText}
                <label className="w-full p-3">

                    {imagePath != undefined ?
                        <RenderImage src={imagePath as string} alt={answerText}
                            style={"h-[200px] w-auto mx-auto mb-3"} />
                        :
                        <CameraIcon className="h-5 w-5 text-primary mr-auto "></CameraIcon>
                    }
                    <input type="file" className="sr-only" accept={accept}
                        onChange={handleUploadImage} />
                </label>
            </>
        </CreateView>
    )
}
export default AnswerModal