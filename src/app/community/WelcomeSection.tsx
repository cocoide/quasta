import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const WelcomeSection = () => {
    return (
        <div className="w-auto bg-white ring-1 ring-shadow rounded-xl shadow-sm p-5 flex justify-center space-x-3 items-center m-5">
            <div className=" flex flex-col space-y-2">
                <h3 className="text-gray-600 font-bold text-[12px] md:text-base">🎉コミュニティへようこそ</h3>
                <div className="text-[10px] text-gray-400 md:text-sm">あなたにピッタリなコミュニティを見つけよう</div>
                <div className="flex justify-center items-center space-x-3 text-[7px]  text-blue-300 mt-3">
                    <button className="ring-1 ring-blue-300 rounded-full p-1 flex items-center"><PlusCircleIcon className="h-4 w-4" />作成</button>
                    <button className="ring-1 ring-blue-300 rounded-full p-1 flex items-center"> <Image src="/icon/compass.svg" width={150} height={100} alt="seminar" className="h-[15px] w-auto" />検索</button>
                </div>
            </div>
            <Image src="/discussion.svg" width={140} height={100} alt="seminar" className="h-[100px] w-auto" />
        </div>
    )
}
export default WelcomeSection