"use client"
import CreateView from '../../components/ui/modal/CreateView';
import { useRecoilState } from 'recoil';
import { answerModalAtom, selectQueryAtom } from '../../model/atoms';

const AnswerModal = () => {
    const [isModalOpen, setModalOpen] = useRecoilState(answerModalAtom);
    const [isSelectQuery, focusSelectQuery] = useRecoilState(selectQueryAtom)

    function closeModal() {
        return setModalOpen(false)
    };
    function postAnswer() {
        return
    };

    return (
        <CreateView
            closeFunction={closeModal}
            postFunction={postAnswer}
            isModalOpen={isModalOpen}
            postAction={"回答する"}
            placeholder={"回答、意見などを記入"}
        ><h3 className="text-xl text-gray-700 m-10">{isSelectQuery}</h3>
        </CreateView>
    )
}
export default AnswerModal