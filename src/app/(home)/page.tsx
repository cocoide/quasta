import TimelineFilter from './components/TimelineFilter'
import TimeLineView from './TimeLineView'


const page = () => {
    return (
        <div className="md:m-2">
            <TimelineFilter />
            <TimeLineView />
        </div>
    )
}
export default page