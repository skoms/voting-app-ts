import React from 'react'
import styles from './Home.module.css'
import { List, VoteData } from '../../components/list/List'
import { useAppSelector } from '../../app/hooks'
import { selectVotes } from '../../components/list/listSlice'
import { Helmet } from 'react-helmet'

export const Home: React.FC = () => {
	const votes: VoteData[] = useAppSelector(selectVotes)
	return votes?.length > 0 ? (
		<div className={styles.container}>
			<Helmet>
				<title>Home | Voting App</title>
			</Helmet>
			<List listItems={votes} />
		</div>
	) : (
		<React.Fragment />
	)
}
