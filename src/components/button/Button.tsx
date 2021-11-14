import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
	content: string
	buttontype?: 'primary' | 'secondary'
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
	className?: string | undefined
	type?: 'button' | 'submit' | 'reset' | undefined
	animation?: 'pulsating' | ''
}

export const Button: React.FC<ButtonProps> = ({
	content,
	buttontype,
	onClick = undefined,
	className = '',
	type = 'button',
	animation = '',
}: ButtonProps) => {
	if (buttontype === 'primary')
		return (
			<button
				onClick={onClick}
				className={`${className} ${styles.primary} ${animation}`}
				type={type}
			>
				{content}
			</button>
		)
	if (buttontype === 'secondary')
		return (
			<button
				onClick={onClick}
				className={`${className} ${styles.secondary} ${animation}`}
				type={type}
			>
				{content}
			</button>
		)
	return (
		<button
			onClick={onClick}
			className={`${className} ${styles.button} ${animation}`}
			type={type}
		>
			{content}
		</button>
	)
}
