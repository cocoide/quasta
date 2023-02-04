import Header from '../../components/layout/Header'
import SuggestFeed from './SuggestFeed'
import TimeLineView from './TimeLineView'
import UserModal from '../../components/features/UserModal';
import AnswerLists from './AnswerLists';
import { API_URL } from '../../libs/consts';
import { FetchAnswerType } from '../../model/types';

export const dynamic = "force-dynamic";

const getAnswers = async (): Promise<FetchAnswerType[]> => {
    const res = await fetch(`${API_URL}/answer`, {
        method: "GET", cache: 'no-store'
    },)
    return res.json()
};
const HomePage = async () => {
    const anwers = await getAnswers()

    return (
        <>
            <div className="md:hidden">
                <UserModal />
                <Header />
            </div>
            <div className="border-x border-shadow">
                <AnswerLists initialData={anwers} />
            <SuggestFeed />
            <TimeLineView />
        </div>
        </>
    )
}
export default HomePage
