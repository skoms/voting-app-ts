import React, { useEffect, useState } from 'react'
import styles from './VoteDisplay.module.css'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/voteSlice'
import { ChartData, selectVote, setVote } from './voteDisplaySlice'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

export const VoteDisplay: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const votes = useAppSelector(selectVotes)
	const vote = useAppSelector(selectVote)
	const [loading, setLoading] = useState<boolean>(true)
	const [data, setData] = useState<ChartData | null>(null)

	ChartJS.register(ArcElement, Tooltip, Legend)

	useEffect(() => {
		dispatch(setVote({ votes, id }))
		if (vote) {
			if (!vote.voted && vote.isActive) {
				navigate('/')
			}
			setData({
				labels: [...vote.options.map((option) => option.option)],
				datasets: [
					{
						label: '# of Votes',
						data: [...vote.options.map((option) => option.votes)],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
			})
		}
	}, [dispatch, navigate, id, votes, vote])

	useEffect(() => {
		if (!loading) {
			if (vote === null) {
				navigate('/not-found')
			} else {
				setLoading(false)
			}
		}
	}, [vote, loading, navigate])

	return vote ? (
		<div className={styles.container}>
			<Helmet>
				<title>Vote: {vote.title}</title>
			</Helmet>
			{vote.isActive && (
				<p className={styles.timeLeft}>
					The vote is still active for another: {vote.timeLeft}
				</p>
			)}
			<h2 className={styles.title}>{vote.title}</h2>
			<div className={styles.chartContainer}>{data && <Pie data={data} />}</div>
			<p className={styles.votes}>Total Votes: {vote.votes}</p>
		</div>
	) : (
		<React.Fragment />
	)
}
