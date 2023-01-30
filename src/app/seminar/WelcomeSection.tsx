import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const WelcomeSection = () => {
    return (
        <div className="w-auto bg-white ring-1 ring-shadow rounded-2xl shadow-sm p-5 flex justify-center space-x-3 items-center m-3 md:m-5">
            <div className=" flex flex-col space-y-2">
                <h3 className="text-gray-600 font-bold">ゼミナールへようこそ</h3>
                <div className="text-[13px] text-gray-400">気なるゼミナールに参加して、交流しながら学びを深めてみよう</div>
                <div className="flex justify-center items-center space-x-3 text-sm text-primary">
                    <button className="ring-1 ring-primary rounded-full p-1 flex items-center"><PlusCircleIcon className="h-5 w-5" />作成</button>
                    <button className="ring-1 ring-primary rounded-full p-1 flex items-center"> <Image src="/icon/compass.svg" width={150} height={100} alt="seminar" className="h-[20px] w-auto" />検索</button>
                </div>
            </div>
            <Image src="/discussion.svg" width={150} height={100} alt="seminar" className="h-[100px] w-auto" />
        </div>
    )
}
export default WelcomeSection