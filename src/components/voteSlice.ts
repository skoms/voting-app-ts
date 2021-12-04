import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

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

export interface VoteData {
	id: number
	title: string
	votes: number
	timeLeft: string
	isActive: boolean
}

export const voteSlice = createSlice({
	name: 'vote',
	initialState,
	reducers: {
		addVote: (state, action) => {
			return state
		},
	},
})

export const { addVote } = voteSlice.actions
export const selectVotes = (state: RootState): VoteData[] => state.vote.votes

export default voteSlice.reducer
