import TimelineFilter from './components/TimelineFilter'
import SuggestFeed from './SuggestFeed'
import TimeLineView from './TimeLineView'


const page = () => {
    return (
        <div className="md:m-2">
            <TimelineFilter />
            <TimeLineView />
            <div className="md:hidden">
                <SuggestFeed />
            </div>
            <TimeLineView />
        </div>
    )
}
export default page