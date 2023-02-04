import { FetchAnswerType } from '../src/model/types';

export const answerFetcher = async (url: string): Promise<FetchAnswerType[]> => {
    const res = await fetch(url)
    return await res.json() as FetchAnswerType[]
};