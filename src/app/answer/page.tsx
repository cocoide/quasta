import { PencilIcon } from '@heroicons/react/24/solid'

const questionLists = [
    { title: "東京でお金を節約して遊べるスポットを知りたい" },
    { title: "お金がたくさんあっても不安感が拭えないとはどんな感覚なのだろう" },
    { title: "就活をする上で大切な判断軸は何がありそう？" },
    { title: "大学生でよくあるやりたい事がない悩みの対症療法" },

]

const page = () => {
    return (
        <div className="w-full flex flex-col">
            {questionLists.map((q, i) => {
                return <div className="p-5 border-b border-shadow flex flex-col justify-center space-y-2 hover:bg-neutral duration-500" key={i}>
                    <div className="text-[17px] font-bold">{q.title}</div>
                    <button className="ring-1 ring-primary text-primary mr-auto rounded-xl px-3 py-1 flex items-center"><PencilIcon className='h-4 w-4' />回答する</button>
                </div>
            })}
        </div>
    )
}
export default page