import React from 'react'
import Head from 'next/head'
import styles from './Footer.module.css'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<div className={styles.container}>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
				/>
			</Head>
			<div className={styles.message}>
				<h6>
					Made by{' '}
					<a href='https://github.com/skoms' className={styles.githubLink}>
						Andreas Skomsoey <i className='devicon-github-original' />
					</a>{' '}
					using
				</h6>
				<span className={styles.nextJsIcon}>
					<a href='https://nextjs.org/'>
						<i className='devicon-nextjs-plain-wordmark' title='Next.js' />
					</a>
				</span>
			</div>
		</div>
	)
}
