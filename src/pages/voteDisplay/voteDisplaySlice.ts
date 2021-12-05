import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { VoteData } from '../../components/voteSlice'

const initialState = {
	vote: null,
	chartData: null,
}

export interface ChartData {
	labels: string[]
	datasets: ChartDataset[]
}

export interface ChartDataset {
	label: string
	data: number[]
	backgroundColor?: string[]
	borderColor?: string[]
	borderWidth?: number
}

export const voteDisplaySlice = createSlice({
	name: 'voteDisplay',
	initialState,
	reducers: {
		setVote: (state, { payload }) => {
			const result = state
			let parsedId: number
			try {
				parsedId = parseInt(payload.id)
			} catch (error) {
				return result
			}
			result.vote =
				payload.votes.filter((vote: VoteData) => vote.id === parsedId)[0] ||
				null
			return result
		},
	},
})

export const { setVote } = voteDisplaySlice.actions
export const selectVote = (state: RootState): VoteData | null =>
	state.voteDisplay.vote

export default voteDisplaySlice.reducer
