import React from 'react'
import styles from './Footer.module.css'
import utilStyles from '../../styles/utils.module.css'

export const Footer: React.FC = () => {
	return (
		<div className={styles.container}>
			<h4 className={utilStyles.lightText}>
				Made by{' '}
				<a href='https://github.com/skoms' className={styles.githubLink}>
					Andreas Skomsoey{' '}
					<i
						style={{ color: '#790079' }}
						className='devicon-github-original colored'
					/>
				</a>
			</h4>
		</div>
	)
}
