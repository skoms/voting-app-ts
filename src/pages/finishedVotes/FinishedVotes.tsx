import React from 'react'
import { List } from '../../components/list/List'
import { useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/list/listSlice'
import { Helmet } from 'react-helmet'

export const FinishedVotes: React.FC = () => {
	const finishedVotes = useAppSelector(selectVotes).filter(
		(vote) => !vote.isActive
	)
	return (
		<div>
			<Helmet>
				<title>Finished Votes | Voting App</title>
			</Helmet>
			<List listItems={finishedVotes} />
		</div>
	)
}
