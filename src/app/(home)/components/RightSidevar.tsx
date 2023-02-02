import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { popularQuestions } from '../../../model/db'

const RightSidevar = () => {
    return (
        <div className="hidden lg:flex flex-col p-5 min-w-[280px] h-screen sticky top-0 items-center space-y-8 overflow-y-auto">

            <div className="flex items-center w-[100%] px-2 bg-shadow rounded-xl h-10 ">
                <MagnifyingGlassIcon className="h-5 w-5  text-gray-500" />
                <input type="text" placeholder="#トピック・Quastaを検索" className="bg-shadow w-[100%] py-1 px-2 border-transparent focus:ring-0 border-none h-10" />
            </div>
            <div className="w-full flex flex-col items-center ring-outline shadow-sm ring-1 rounded-xl">
                <div className="text-center w-full border-b border-outline">Popular</div>
                {popularQuestions.map((q, i) => {
                    return (
                        <div className="w-full  text-gray-700 p-1" key={i}>{q.name}</div>
                    )
                })}
            </div>
            <Image src="/dog.jpg" width={100} height={100} alt="dog" className="w-full h-auto rounded-xl" />
            <Image src="/cat.jpg" width={100} height={100} alt="cat" className="w-full h-auto rounded-xl" />
        </div>
    )
}
export default RightSidevar