import TimelineFilter from './components/TimelineFilter'
import SuggestFeed from './SuggestFeed'
import TimeLineView from './TimeLineView'


const page = () => {
    return (
        <div className="border-x border-shadow">
            <TimelineFilter />
            <TimeLineView />
            <SuggestFeed />
            <TimeLineView />
        </div>
    )
}
export default page