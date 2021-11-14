import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/list/listSlice'

export const VoteDisplay: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const vote = useAppSelector(selectVotes).filter((vote) => {
		const parsedId = parseInt(id || '0')
		if (parsedId === 0) {
			navigate('forbidden')
			return false
		}
		return parsedId === vote.id
	})[0]

	return vote ? (
		<div>
			<p>{vote.title}</p>
		</div>
	) : (
		<React.Fragment />
	)
}
