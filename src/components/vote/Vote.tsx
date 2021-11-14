import React from 'react'
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
			<h3>{title}</h3>
			<p>Votes: {votes}</p>
			<p>Time left: {timeLeft}</p>
		</div>
	)
}
