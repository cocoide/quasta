import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import NextjsImage from '../../../components/Elements/Image/NextjsImage'

interface CommunityProps {
    id: string
    name: string
    overview: string
    image: string | undefined
}

const SuggestFeed = ({ community }: { community: CommunityProps[] }) => {
    return (
        <div className="flex flex-col bg-white ring-1 ring-shadow shadow-sm p-3 space-y-2">
            <div className="text-center font-bold text-gray-600 text-[15px]">コミュニティ</div>
            {community.slice(0, 3).map((s, i) => {
                return (
                    <div key={i} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <NextjsImage src={s.image} alt={s.name} w={70} h={70} style={'rounded-2xl aspect-square h-15 w-15'} />
                            <h3 className="font-bold text-gray-600 text-[13px]">{s.name}</h3>
                        </div>
                        <button className="flex items-center bg-blue-50 text-blue-400 rounded-xl p-1 whitespace-nowrap text-[13px]"><PlusCircleIcon className="h-5 w-5" />フォローする</button>
                    </div>)
            })}
            <Link href={"/community"} className="text-center font-base text-blue-300 text-[13px] border-b mx-auto border-blue-200 p-1">コミュニティを詳しく</Link>
        </div>
    )
}
export default SuggestFeed