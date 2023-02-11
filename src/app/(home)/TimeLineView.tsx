import { BookmarkIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

const postLists = [
    { subject: "今の日本で幸せに生きる方法", liked: 13, coment: 5, hashtag: ["人生哲学", "キャリア"], thumbnail: "https://i.gzn.jp/img/2020/07/06/oxford-how-live-happy-life/00.jpg" },
    { subject: "AGIの開発とその後", liked: 13, coment: 5, hashtag: ["Tech", "未来予想"], thumbnail: "https://www.cct-inc.co.jp/wp-content/uploads/2020/07/ai07_thum.jpg" },
    { subject: "ChatGPTの活用方法", liked: 13, coment: 5, hashtag: ["Tech", "AI"], thumbnail: "https://cdn-business.nikkei.com/atcl/gen/19/00511/012500009/s800.jpg?__scale=w:750,h:563&_sh=0d0d003702" },
    { subject: "男の人が浮気をする心理", liked: 13, coment: 5, hashtag: ["心理学", "恋愛の悩み",], thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUaw-5HnHko84zwjnWYu_jcFXEeCQ_TnH5A&usqp=CAU" },
    { subject: "ユダヤ人に天才が多い理由", liked: 13, coment: 5, hashtag: ["歴史"], thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xt9wePtnDVTfZrbmyXzJ7SaywCKgWzdjtA&usqp=CAU" },
]
const TimeLineView = () => {
    return (
        <div className="rounded-md">
            {postLists.map((p, i) => {
                return <div className="flex flex-col space-y-2
                p-5 bg-nothing ring-1 ring-shadow" key={i}>
                    <div className="relative">
                        <img src={p.thumbnail} className="aspect-video rounded-md brightness-90 w-[100%] " />
                        <button className="absolute top-3 right-3"><BookmarkIcon className=" h-6 w-6 text-white" /></button>
                    </div>
                    <div className="text-bold font-base">
                        {p.subject}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                            {p.hashtag.map((p, i) => {
                                return (
                                    <div className="bg-shadow text-gray-700 text-sm py-1 px-2 rounded-md" key={i}>{p}</div>
                                )
                            })}
                        </div>
                        <div className="text-primary flex items-center">
                            <ChatBubbleOvalLeftIcon className=" h-5 w-5" />{p.coment}件
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
export default TimeLineView