import { FetchAnswerType, FetchUserType } from '../../src/model/types'
import { API_URL } from '../../src/libs/consts';
import useSWR, { SWRResponse } from 'swr';
import { answerFetcher, userFetcher } from '../fetcher';

export const useAnswerDataSWR = (
    fallbackData: FetchAnswerType[]
  ): SWRResponse<FetchAnswerType[]> => {
    return useSWR(`${API_URL}/answer`, answerFetcher, { fallbackData })
  };
  
export const useUserDataSWR = (
    fallbackData: FetchUserType
  ): SWRResponse<FetchUserType> => {
    return useSWR(`${API_URL}/user`, userFetcher, { fallbackData })
  };