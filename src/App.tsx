import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'
import { VoteDisplay } from './pages/voteDisplay/VoteDisplay'
import { FinishedVotes } from './pages/finishedVotes/FinishedVotes'

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='votes/finished' element={<FinishedVotes />} />
					<Route path='votes/:id' element={<VoteDisplay />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
