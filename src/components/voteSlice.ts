import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

const initialState = {
	votes: [
		{
			id: 1,
			title: 'What is your gender?',
			options: [
				{
					option: 'Female',
					votes: 7,
				},
				{
					option: 'Male',
					votes: 9,
				},
				{
					option: 'Other',
					votes: 3,
				},
			],
			votes: 19,
			timeLeft: '5 days',
			isActive: true,
		},
		{
			id: 2,
			title: 'Is the answer yes?',
			options: [
				{
					option: 'Yes',
					votes: 12,
				},
				{
					option: 'No',
					votes: 6,
				},
				{
					option: 'Maybe',
					votes: 23,
				},
			],
			votes: 41,
			timeLeft: '5 days',
			isActive: true,
		},
		{
			id: 3,
			title: 'What do you think of globalization?',
			options: [
				{
					option: 'Good',
					votes: 23,
				},
				{
					option: 'Bad',
					votes: 8,
				},
				{
					option: "I don't know",
					votes: 4,
				},
			],
			votes: 35,
			timeLeft: '5 days',
			isActive: false,
		},
		{
			id: 4,
			title: 'Drugs are bad, mkay?',
			options: [
				{
					option: 'Mkay',
					votes: 7,
				},
				{
					option: 'No mkay',
					votes: 3,
				},
				{
					option: "I don't know dude",
					votes: 13,
				},
			],
			votes: 23,
			timeLeft: '5 days',
			isActive: false,
		},
	],
}

export interface VoteData {
	id: number
	title: string
	options: Option[]
	votes: number
	timeLeft: string
	isActive: boolean
}

export interface Option {
	option: string
	votes: number
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
