import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { VoteData } from './List'

const initialState = {
	votes: [
		{
			id: 1,
			title: 'test title',
			votes: 5,
			timeLeft: '5 days',
			isActive: true,
		},
		{
			id: 2,
			title: 'test title',
			votes: 5,
			timeLeft: '5 days',
			isActive: true,
		},
		{
			id: 3,
			title: 'test title',
			votes: 5,
			timeLeft: '5 days',
			isActive: true,
		},
		{
			id: 4,
			title: 'test title',
			votes: 5,
			timeLeft: '5 days',
			isActive: false,
		},
		{
			id: 5,
			title: 'test title',
			votes: 5,
			timeLeft: '5 days',
			isActive: false,
		},
		{
			id: 6,
			title: 'test title',
			votes: 5,
			timeLeft: '5 days',
			isActive: false,
		},
	],
}

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		addVote: (state, action) => {
			return state
		},
	},
})

export const { addVote } = listSlice.actions
export const selectVotes = (state: RootState): VoteData[] => state.list.votes

export default listSlice.reducer
