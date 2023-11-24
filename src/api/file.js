import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const filesApi = createApi({
	reducerPath: 'filesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://185.119.59.25:5000',
	}),
	endpoints: (builder) => ({
		postFile: builder.mutation({
			query: (body) => ({
				url: '/file',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { usePostFileMutation } = filesApi
