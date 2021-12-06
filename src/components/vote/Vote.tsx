import React from 'react'
import { Button } from '../button/Button'
import styles from './Vote.module.css'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setVote } from '../../pages/voteDisplay/voteDisplaySlice'
import { toggleIsActive } from '../voteModal/voteModalSlice'
import { selectVotes, VoteData } from '../voteSlice'

interface VoteProps {
	id: number
	title: string
	votes: number
	timeLeft: string
	isActive: boolean
	voted: boolean
}

export const Vote: React.FC<VoteProps> = ({
	id,
	title,
	votes,
	timeLeft,
	isActive,
	voted,
}: VoteProps) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const votesArr = useAppSelector(selectVotes)

	const openModal = (id: number, votes: VoteData[]) => {
		dispatch(setVote({ id, votes }))
		dispatch(toggleIsActive(true))
	}

	return (
		<div className={`${styles.container} ${isActive ? styles.active : ''}`}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.votes}>Votes: {votes}</p>
			<p className={styles.timeLeft}>
				{isActive ? `Time left: ${timeLeft}` : 'Vote Ended'}
			</p>
			<div className={styles.buttons}>
				{voted || !isActive ? (
					<Button
						content='View'
						buttontype='primary'
						animation='pulsating'
						onClick={() => navigate(`/votes/${id}`)}
					/>
				) : (
					isActive && (
						<Button
							content='Vote'
							buttontype='secondary'
							onClick={() => openModal(id, votesArr)}
						/>
					)
				)}
			</div>
		</div>
	)
}
