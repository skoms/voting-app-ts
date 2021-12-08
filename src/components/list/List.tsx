import React from 'react'
import { Vote } from '../vote/Vote'
import { VoteData } from '../voteSlice'
import styles from './List.module.css'

interface ListProps {
	listItems: VoteData[]
}

export const List: React.FC<ListProps> = ({ listItems }: ListProps) => {
	return (
		<div className={styles.container}>
			{listItems?.map((item, idx) => {
				if ('votes' in item) {
					return <Vote {...item} key={idx} />
				} else {
					return <React.Fragment />
				}
			})}
		</div>
	)
}
