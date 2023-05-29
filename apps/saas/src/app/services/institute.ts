import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const instituteApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl:
//       'https://b925d043-66e7-442f-87ec-4863e6832977.mock.pstmn.io/institutes',
//   }),
//   endpoints: (builder) => ({
//     getInstituteByName: builder.query({
//       query: (name: string) => `institutes`,
//     }),
//   }),
// });

const BASEURL =
  'https://b925d043-66e7-442f-87ec-4863e6832977.mock.pstmn.io/institutes';

export const instituteApi = createApi({
  reducerPath: 'noteAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({}),
});
