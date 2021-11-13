import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<h1 className={styles.title}>Voting App</h1>
			</div>
			<nav className={styles.nav}>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/'>
					<a>Finished Votes</a>
				</Link>
			</nav>
		</div>
	)
}
