import React from 'react'
import styles from './Home.module.css'
import { List } from '../../components/list/List'
import { VoteData } from '../../components/voteSlice'
import { useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/voteSlice'
import { Helmet } from 'react-helmet'
import { VoteModal } from '../../components/voteModal/VoteModal'

export const Home: React.FC = () => {
	const votes: VoteData[] = useAppSelector(selectVotes)

	return votes?.length > 0 ? (
		<div className={styles.container}>
			<Helmet>
				<title>Home | Voting App</title>
			</Helmet>
			<List listItems={votes} />
			<VoteModal />
		</div>
	) : (
		<React.Fragment />
	)
}
