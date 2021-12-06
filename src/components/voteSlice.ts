import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export const sampleVotes = [
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
		voted: false,
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
		voted: false,
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
		voted: false,
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
		voted: false,
		isActive: false,
	},
]

const initialState: { votes: VoteData[] } = {
	votes:
		typeof localStorage.getItem('voted') === 'string'
			? JSON.parse(localStorage.getItem('voted') || '')
			: sampleVotes,
}

export interface VoteData {
	id: number
	title: string
	options: Option[]
	votes: number
	timeLeft: string
	isActive: boolean
	voted: boolean
}

export interface Option {
	option: string
	votes: number
}

export const voteSlice = createSlice({
	name: 'vote',
	initialState,
	reducers: {
		addVote: (state, { payload }) => {
			const vote = payload
			const result = state
			result.votes = [
				...result.votes,
				{
					...vote,
					id: result.votes.length + 1,
				},
			]
			localStorage.setItem('voted', JSON.stringify(result.votes))
			return result
		},
		submitVote: (state, { payload }) => {
			const result = state
			result.votes = [
				...result.votes.filter((v) => v.id !== payload.id),
				{ ...payload, voted: true },
			]
			localStorage.setItem('voted', JSON.stringify(result.votes))
			return result
		},
	},
})

export const { addVote, submitVote } = voteSlice.actions
export const selectVotes = (state: RootState): VoteData[] => state.vote.votes

export default voteSlice.reducer
