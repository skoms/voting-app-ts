import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'
import { VoteDisplay } from './pages/voteDisplay/VoteDisplay'
import { FinishedVotes } from './pages/finishedVotes/FinishedVotes'
import { NotFound } from './pages/notFound/NotFound'
import { Helmet } from 'react-helmet'

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<Helmet>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
				/>
			</Helmet>
			<Router>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='votes/finished' element={<FinishedVotes />} />
						<Route path='votes/:id' element={<VoteDisplay />} />
						<Route path='not-found' element={<NotFound />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
