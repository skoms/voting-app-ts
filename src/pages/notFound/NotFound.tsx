import React from 'react'
import { Helmet } from 'react-helmet'

export const NotFound: React.FC = () => {
	return (
		<div>
			<Helmet>
				<title>404 - Page Not Found</title>
			</Helmet>
			<h2>Page not found</h2>
		</div>
	)
}
