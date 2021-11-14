import React from 'react'
import { Vote } from '../vote/Vote'

interface ListProps {
	listItems: VoteData[]
}

export interface VoteData {
	id: number
	title: string
	votes: number
	timeLeft: string
	isActive: boolean
}

export const List: React.FC<ListProps> = ({ listItems }: ListProps) => {
	return (
		<div>
			{listItems?.map((item, idx) => {
				if ('votes' in item) {
					return (
						<Vote
							isActive={item.isActive}
							title={item.title}
							timeLeft={item.timeLeft}
							votes={item.votes}
							key={idx}
						/>
					)
				} else {
					return <React.Fragment />
				}
			})}
		</div>
	)
}
