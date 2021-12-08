import React from 'react'
import { List } from '../../components/list/List'
import { useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/voteSlice'
import { Helmet } from 'react-helmet'
import styles from './FinishedVotes.module.css'

export const FinishedVotes: React.FC = () => {
	const finishedVotes = useAppSelector(selectVotes).filter(
		(vote) => !vote.isActive
	)
	return (
		<div className={styles.container}>
			<Helmet>
				<title>Finished Votes | Voting App</title>
			</Helmet>
			<List listItems={finishedVotes} />
		</div>
	)
}
