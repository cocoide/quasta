"use client"
import CreateView from '../../components/ui/modal/CreateView';
import { useRecoilState } from 'recoil';
import { answerModalAtom, selectQueryAtom } from '../../model/atoms';
import { API_URL } from '../../libs/consts';
import { ChangeEvent, useRef, useState } from 'react';
import useAutosizeTextArea from '../../../utils/hooks/useAutosizeTextArea';

const AnswerModal = () => {


    const [isModalOpen, setModalOpen] = useRecoilState(answerModalAtom);
    const [isSelectQuery, setSelectQuery] = useRecoilState(selectQueryAtom)
    const [answerText, setAnswerText] = useState("")

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [textAreaValue, setTextAreaValue] = useState("");
    useAutosizeTextArea(textAreaRef?.current, textAreaValue);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setAnswerText(e.target?.value)
        const value = e.target?.value;
        setTextAreaValue(value);
    };

    function closeModal() {
        return setModalOpen(false)
    };

    async function postAnswer() {

        if (answerText.length > 5) {
            await fetch(`${API_URL}/answer/${isSelectQuery}`, {
                method: "POST",
                body: answerText
            })
            setSelectQuery("")
            setAnswerText("")
            return setModalOpen(false)
        }
    };

    return (
        <CreateView
            closeFunction={closeModal}
            postFunction={postAnswer}
            isModalOpen={isModalOpen}
            postAction={"回答する"}
            placeholder={"回答、意見、提案などを記入"}
            inputText={answerText}
            textAreaRef={textAreaRef}
            handleChange={handleChange}
        ><h3 className="text-xl text-gray-700 m-10">{isSelectQuery}</h3>
        </CreateView>
    )
}
export default AnswerModal