import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://randomuser.me/api/'}),
  endpoints: builder => ({
    getUserName: builder.query({
      query: () => '',
    }),
  }),
});

export const {useGetUserNameQuery} = userApi;
