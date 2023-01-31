import { InboxArrowDownIcon } from '@heroicons/react/24/outline'

const Invitation = () => {
    return (
        <div className="hidden sm:flex max-h-[200px] m-3 md:m-5
        lg:w-[280px] w-[250px] bg-white  flex-col text-gray-600 rounded-md shadow-sm relative text-center divide-y divide-shadow ring-1 ring-shadow">
            <h3 className="p-2">保留中の招待</h3>
            <div className="p-5 text-sm items-center justify-center flex flex-col">
                <InboxArrowDownIcon className="h-5 w-5" />
                招待はありません
            </div>
        </div>
    )
}
export default Invitation