import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const RightSidevar = () => {
    return (
        <div className="hidden lg:flex flex-col p-3 min-w-[250px] h-screen sticky top-0">

            <div className="flex items-center w-[100%] px-2 bg-shadow rounded-md mb-2 h-10  ">
                <MagnifyingGlassIcon className="h-5 w-5  text-gray-500" />
                <input
                    type="search" placeholder="Questaを検索" className="bg-shadow w-[100%] py-1 px-2 border-transparent focus:ring-0 border-none h-10" />
            </div>

            <h3>よき回答者さん</h3>
            <div>田中さん</div>
            <div>よすが</div>
            <div>ワタナベ</div>
            <div>井上</div>
        </div>
    )
}
export default RightSidevar