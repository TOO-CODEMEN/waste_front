import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const filesApi = createApi({
    reducerPath: 'filesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:5000',
    }),
    endpoints: (builder) => ({
        postFile: builder.mutation({
            query: (body) => ({
                url: '/file',
                method: 'POST',
                body
            })
        }),
    }),
})

export const { usePostFileMutation } = filesApi