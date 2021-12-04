import React from 'react'
import { Button } from '../button/Button'
import styles from './Vote.module.css'

interface VoteProps {
	title: string
	votes: number
	timeLeft: string
	isActive: boolean
}

export const Vote: React.FC<VoteProps> = ({
	title,
	votes,
	timeLeft,
	isActive,
}: VoteProps) => {
	return (
		<div className={`${styles.container} ${isActive ? styles.active : ''}`}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.votes}>Votes: {votes}</p>
			<p className={styles.timeLeft}>
				{isActive ? `Time left: ${timeLeft}` : 'Vote Ended'}
			</p>
			<div className={styles.buttons}>
				<Button content='View' buttontype='primary' animation='pulsating' />
				<Button content='Vote' buttontype='secondary' />
			</div>
		</div>
	)
}
