import Header from '../../components/layout/Header'
import SuggestFeed from './SuggestFeed'
import UserModal from '../../components/features/UserModal';
import AnswerLists from './AnswerLists';
import { FetchAnswerType } from '../../model/types';

export const dynamic = "force-dynamic";

export default async function page() {

    const getAnswers = async (): Promise<FetchAnswerType[]> => {
        const res = await fetch(`https://quasta.vercel.app/api/answer`, {
            method: "GET"
        },)
        return res.json()
    };
    const anwers = await getAnswers();

    return (
        <div>
            <div className="md:hidden">
                <UserModal />
                <Header />
            </div>
            <div className="border-x border-shadow">
                <AnswerLists initialData={anwers} />
                {/* <SuggestFeed /> */}
        </div>
        </div>
    )
}
