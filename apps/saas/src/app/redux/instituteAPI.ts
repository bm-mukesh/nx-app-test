import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMutateNote, INote, INoteResponse } from './types';

const BASEURL = 'https://b925d043-66e7-442f-87ec-4863e6832977.mock.pstmn.io/';

export const institutesAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    institutes: builder.query({
      query: () => '/institutes',
    }),
  }),
});

export const { useInstitutesQuery } = institutesAPI;
