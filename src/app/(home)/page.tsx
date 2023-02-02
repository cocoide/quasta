import Header from '../../components/layout/Header'
import TimelineFilter from './components/TimelineFilter'
import SuggestFeed from './SuggestFeed'
import TimeLineView from './TimeLineView'


const page = () => {
    return (
        <>
            <div className="md:hidden">
                <Header />
            </div>
        <div className="border-x border-shadow">
            <TimelineFilter />
            <TimeLineView />
            <SuggestFeed />
            <TimeLineView />
        </div>
        </>
    )
}
export default page