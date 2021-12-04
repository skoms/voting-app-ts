import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/voteSlice'
import { selectVote, setVote } from './voteDisplaySlice'

export const VoteDisplay: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const votes = useAppSelector(selectVotes)
	const vote = useAppSelector(selectVote)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		dispatch(setVote({ votes, id }))
	}, [dispatch, id, votes])

	useEffect(() => {
		if (!loading && vote === null) {
			navigate('/not-found')
		} else {
			setLoading(false)
		}
	}, [vote, loading, navigate])

	return vote ? (
		<div>
			<Helmet>
				<title>Vote: {vote.title}</title>
			</Helmet>
			{vote.isActive && (
				<p>The vote is still active for another: {vote.timeLeft}</p>
			)}
			<p>{vote.title}</p>
			<p>Total Votes: {vote.votes}</p>
		</div>
	) : (
		<React.Fragment />
	)
}
