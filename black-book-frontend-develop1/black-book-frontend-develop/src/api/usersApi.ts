import { BaseQueryFn, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { FetchBaseQueryError, createApi } from '@reduxjs/toolkit/query/react';

import { IError, IUser, IUsersList } from '../types';

type GetUsersArgs = {
  page: number;
  searchValue: string;
};

type GetUserArgs = {
  id?: string;
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError<IError>>,

  endpoints: (build) => ({
    getUsers: build.query<IUsersList, GetUsersArgs>({
      query: ({ page, searchValue }) =>
        `users?page=${page}&search=${searchValue} `,
    }),
    getUser: build.query<IUser, GetUserArgs>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
