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

//? DataSet Structure
// {
// 	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// 	datasets: [
// 		{
// 			label: '# of Votes',
// 			data: [12, 19, 3, 5, 2, 3],
// 			backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 				'rgba(153, 102, 255, 0.2)',
// 				'rgba(255, 159, 64, 0.2)',
// 			],
// 			borderColor: [
// 				'rgba(255, 99, 132, 1)',
// 				'rgba(54, 162, 235, 1)',
// 				'rgba(255, 206, 86, 1)',
// 				'rgba(75, 192, 192, 1)',
// 				'rgba(153, 102, 255, 1)',
// 				'rgba(255, 159, 64, 1)',
// 			],
// 			borderWidth: 1,
// 		},
// 	],
// }

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
