import React from 'react'

const StarCounter = ({ star }) => {
	let result = []

	for (let i = 0; i < star; i++) { result.push(i)
	}

	return (
		<>
			{result.map(item => (
				<i key={item} className='icofont-ui-rating'></i>
			))}
		</>
	)
}

export default StarCounter
