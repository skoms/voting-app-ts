import styles from './VoteModal.module.css'
import React, { useState, useEffect, useRef } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectVote } from '../../pages/voteDisplay/voteDisplaySlice'
import { Option, submitVote } from '../voteSlice'
import { Button } from '../button/Button'
import { selectIsActive, toggleIsActive } from './voteModalSlice'
import { useClickAway } from 'react-use'

export const VoteModal: React.FC = () => {
	const vote = useAppSelector(selectVote)
	const dispatch = useAppDispatch()
	const isActive = useAppSelector(selectIsActive)
	const [selectedOption, setSelectedOption] = useState<Option | null>(null)
	const modalRef = useRef(null)

	const closeModal = () => {
		dispatch(toggleIsActive(false))
	}

	const submit = () => {
		if (vote && selectedOption) {
			dispatch(
				submitVote({
					...vote,
					votes: vote.votes + 1,
					options: vote.options.map((opt) => {
						if (opt === selectedOption) {
							return { ...selectedOption, votes: selectedOption.votes + 1 }
						}
						return opt
					}),
				})
			)
			closeModal()
		}
	}

	const select = (e: React.MouseEvent<HTMLElement>) => {
		if (vote) {
			const { value } = e.currentTarget.dataset
			const newVote = vote.options.find((option) => option.option === value)
			newVote && setSelectedOption(newVote)
		}
	}

	useEffect(() => {
		if (vote) {
			setSelectedOption(vote.options[0])
		}
	}, [vote, isActive])

	useClickAway(modalRef, closeModal)

	return (
		vote && (
			<div className={`${styles.container} ${isActive && styles.active}`}>
				<div className={styles.modal} ref={modalRef}>
					<button onClick={() => closeModal()} className={styles.exitButton}>
						X
					</button>
					<h1 className={styles.title}>{vote.title}</h1>
					<div className={styles.options}>
						{vote.options.map((option: Option, idx) => (
							<p
								className={`${styles.option} ${
									selectedOption === option ? styles.selected : ''
								}`}
								data-value={option.option}
								key={`option${idx}`}
								onClick={select}
							>
								{option.option}
							</p>
						))}
					</div>
					<Button
						className={styles.submitButton}
						content='Submit'
						buttontype='primary'
						onClick={submit}
					/>
				</div>
			</div>
		)
	)
}
