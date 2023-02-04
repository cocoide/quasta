import { FetchAnswerType } from '../../src/model/types'
import { API_URL } from '../../src/libs/consts';
import useSWR, { SWRResponse } from 'swr';
import { answerFetcher } from '../fetcher';

export const useAnswerDataSWR = (
    fallbackData: FetchAnswerType[]
  ): SWRResponse<FetchAnswerType[]> => {
    return useSWR(`${API_URL}/answer`, answerFetcher, { fallbackData })
  };