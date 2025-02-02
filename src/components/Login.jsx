import React from 'react'

const Login = () => {

	const handleLogin = () => {
		console.log('Btn clicked');
		
	}

	return (
		<div className='m-5 p-5'>
			<button className='bg-primary' onClick={handleLogin}>Login</button>
		</div>
	)
}

export default Login