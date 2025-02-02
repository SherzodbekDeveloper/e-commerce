import React from 'react'

const GoogleMap = () => {
	return (
		<div className='map-area'>
			<div className='maps'>
				<iframe
					className='w'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6141653.77653471!2d59.325829639275454!3d41.268506360255266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2s!4v1738336572300!5m2!1sen!2s'
				></iframe>
			</div>
		</div>
	)
}

export default GoogleMap
