import { FetchAnswerType, FetchUserType } from '../src/model/types';

export const answerFetcher = async (url: string): Promise<FetchAnswerType[]> => {
    const res = await fetch(url)
    return await res.json() as FetchAnswerType[]
};

export const userFetcher = async (url: string): Promise<FetchUserType> => {
    const res = await fetch(url)
    return await res.json() as FetchUserType
};

export const checkFetcher = async (url: string): Promise<boolean> => {
    const res = await fetch(url)
    return await res.json() as boolean
};