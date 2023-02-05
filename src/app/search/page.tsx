import { db } from '../../libs/prisma';
import AnswerSuggest from './AnswerSuggest';

export const dynamic = "force-dynamic";

async function fetchQuestions() {
    const results = await db.question.findMany({
        select: {
            query: true,
        }
    });
    return results
}

const page = async ({
    searchParams, }: {
        searchParams?: Record<string, string | string[] | undefined>;
    }) => {
    const results = await fetchQuestions()

    return (
        <div className="">
            <AnswerSuggest
                questions={results}
                keyword={searchParams?.q as string} />
        </div>
    )
}
export default page