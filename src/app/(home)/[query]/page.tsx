import { API_URL } from '../../../libs/consts'
import { db } from '../../../libs/prisma'
import { FetchAnswerType } from '../../../model/types'

export const dynamicParams = false

// async function fetchAnswers(query: string): Promise<FetchAnswerType[]> {
//     const res = await fetch(`${API_URL}/answer/${query}`)
//     return res.json()
// }
async function fetchAnswers(query: string) {
    const res = await db.question.findMany({
        where: { query: query },
        select: { query: true }
    })
    return res
}


const page = async ({ params }: { params: { query: string } }) => {
    const answers = await fetchAnswers(params.query)
    return (
        <div className="">
            {answers.map((a, i) => {
                return (<div className="" key={i}>{a.query}</div>)
            })}
        </div>
    )
}
export default page

// export async function generateStaticParams() {
//     const questions = await db.question.findMany({
//         select: { query: true }
//     })
//     return questions.map((q) => ({
//         query: q.query
//     }));
// }

