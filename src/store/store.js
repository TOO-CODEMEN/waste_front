import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import { filesApi } from '../api/file'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		app: appReducer,
		[filesApi.reducerPath]: filesApi.reducer,
	}, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filesApi.middleware) 
})

setupListeners(store.dispatch)
