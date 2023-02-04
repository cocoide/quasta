import Header from '../../components/layout/Header'
import TimelineFilter from './components/TimelineFilter'
import SuggestFeed from './SuggestFeed'
import TimeLineView from './TimeLineView'
import UserModal from '../../components/features/UserModal';
import AnswerLists from './AnswerLists';

export const revalidate = 300

const page = async () => {
    return (
        <>
            <div className="md:hidden">
                <UserModal />
                <Header />
            </div>
            <div className="border-x border-shadow">
                {/* @ts-expect-error Server Component  */}
                <AnswerLists />
            <SuggestFeed />
            <TimeLineView />
        </div>
        </>
    )
}
export default page