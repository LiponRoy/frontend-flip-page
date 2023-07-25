import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
	reducerPath: 'dataApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '',
	}),
	tagTypes: ['dataTag'],
	endpoints: (builder) => ({
		getData: builder.query({
			query: () => '/',
			transformResponse: (res) => res.reverse(),
			providesTags: ['dataTag'],
		}),

	}),
});

export const { useGetDataQuery} = dataApi;