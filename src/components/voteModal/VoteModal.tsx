import styles from './VoteModal.module.css'
import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectVote } from '../../pages/voteDisplay/voteDisplaySlice'
import { useEffectOnce } from 'react-use'
import { Option } from '../voteSlice'
import { Button } from '../button/Button'
import { selectIsActive } from './voteModalSlice'

export const VoteModal: React.FC = () => {
	const vote = useAppSelector(selectVote)
	const isActive = useAppSelector(selectIsActive)
	const [selectedOption, setSelectedOption] = useState<Option | null>(null)

	useEffectOnce(() => {
		if (vote) {
			setSelectedOption(vote.options[0])
		}
	})

	const submit = () => {
		return selectedOption //! TEMPORARY
	}
	return (
		vote && (
			<div className={`${styles.container} ${!isActive && styles.hidden}`}>
				<h1 className={styles.title}>{vote.title}</h1>
				<div className={styles.options}>
					{vote.options.map((option: Option, idx) => (
						<div className={styles.option} key={`option${idx}`}>
							<input type='radio' name={`option${idx}`} id={`option${idx}`} />
							<label htmlFor={`option${idx}`}>{option.option}</label>
						</div>
					))}
				</div>
				<Button content='Submit' buttontype='primary' onClick={submit} />
			</div>
		)
	)
}