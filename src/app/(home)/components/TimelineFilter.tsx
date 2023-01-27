import { AdjustmentsHorizontalIcon, ChevronDownIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const TimelineFilter = () => {
    return (
        <div className="p-2 flex justify-between items-center space-x-2">
            <div className="flex items-center space-x-2">
                <button className="flex items-center p-1 bg-white text-gray-600 rounded-md"
                > <ChevronDownIcon className="h-4 w-4" />急上昇</button>
                <button className="py-1 px-2 bg-white text-gray-600 rounded-md">#哲学</button>
                <button className="py-1 px-2 bg-nothing text-gray-600 rounded-md">#勉強法</button>
            </div>
            <PlusCircleIcon className="text-primary h-8 w-8"></PlusCircleIcon>
        </div>
    )
}
export default TimelineFilter