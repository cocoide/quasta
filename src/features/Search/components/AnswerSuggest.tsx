"use client"

import { useEffect, useState } from 'react'

type QuestionType = {
    query: string
}
const AnswerSuggest = ({ questions, keyword }: { questions: QuestionType[], keyword?: string }) => {

    const [suggestions, setSuggestion] = useState<QuestionType[]>()

    useEffect(() => {
        if (keyword?.length == 0) {
            return
        }
        let matches = []
        matches = questions.filter((opts) => {
            const regex = new RegExp(`${keyword}`, "gi");
            return opts.query.match(regex)
        })
        setSuggestion(matches)
    }, [keyword, questions])

    return (
        <div className="">
            {suggestions?.map((s, i) => {
                return <div className="" key={i}>{s.query}</div>
            })}
        </div>
    )
}
export default AnswerSuggest