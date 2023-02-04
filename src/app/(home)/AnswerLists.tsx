"use client"
import Answer from './Answer';
import { useAnswerDataSWR } from '../../../utils/hooks/useSWR';
import { FetchAnswerType } from '../../model/types';


const AnswerLists = ({ initialData }: { initialData: FetchAnswerType[] }) => {
    const { data } = useAnswerDataSWR(initialData)
    return (
        <div className="flex flex-col   bg-white ring-1 ring-shadow divide-y divide-shadow">
            {data?.map((a, i) => {
                return (
                    <Answer key={i} answer={a} />
                )
            })}
        </div>
    )
}
export default AnswerLists