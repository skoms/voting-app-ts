import React from 'react'
import styles from './Header.module.css'
import utilStyles from '../../styles/utils.module.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<h1 className={utilStyles.heading2Xl} onClick={() => navigate('/')}>
					Voting App
				</h1>
			</div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='votes/finished'>Finished Votes</Link>
			</nav>
		</div>
	)
}
