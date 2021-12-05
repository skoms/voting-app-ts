import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import voteReducer from '../components/voteSlice'
import voteDisplayReducer from '../pages/voteDisplay/voteDisplaySlice'
import voteModalReducer from '../components/voteModal/voteModalSlice'

export const store = configureStore({
	reducer: {
		vote: voteReducer,
		voteDisplay: voteDisplayReducer,
		voteModal: voteModalReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
