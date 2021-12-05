import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState = {
	isActive: false,
}

export const voteModalSlice = createSlice({
	name: 'voteModal',
	initialState,
	reducers: {
		toggleIsActive: (state, { payload }) => {
			return {
				...state,
				isActive: payload || !state.isActive,
			}
		},
	},
})

export const { toggleIsActive } = voteModalSlice.actions
export const selectIsActive = (state: RootState): boolean =>
	state.voteModal.isActive

export default voteModalSlice.reducer
