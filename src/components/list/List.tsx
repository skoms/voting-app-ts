import React from 'react'
import { Vote } from '../vote/Vote'
import { VoteData } from '../voteSlice'

interface ListProps {
	listItems: VoteData[]
}

export const List: React.FC<ListProps> = ({ listItems }: ListProps) => {
	return (
		<div>
			{listItems?.map((item, idx) => {
				if ('votes' in item) {
					return (
						<Vote
							id={item.id}
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
