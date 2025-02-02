import React, { useState } from 'react'
import StarCounter from '../../components/StarCounter'
import { Link } from 'react-router-dom'

const ProductDisplay = ({ item }) => {
	const { name, seller, id, price, ratingsCount, quantity, ratings, img } = item

	const [preQuantity, setPreQuantity] = useState(quantity)
	const [coupon, setCoupon] = useState('')
	const [size, setSize] = useState('Select a Size')
	const [color, setColor] = useState('Select a Color')

	const handleSizeChanger = e => {
		setSize(e.target.value)
	}
	const handleColorChanger = e => {
		setColor(e.target.value)
	}

	const handleDecrease = () => {
		if (preQuantity > 1) {
			setPreQuantity(preQuantity - 1)
		}
	}
	const handleIncrease = () => {
		setPreQuantity(preQuantity + 1)
	}

	const handleSubmit = e => {
		e.preventDefault()
		const product = {
			id: id,
			img: img,
			name: name,
			price: price,
			quantity: preQuantity,
			size: size,
			color: color,
			coupon: coupon,
		}
		console.log(product)
		
			const existingCart = JSON.parse(localStorage.getItem('cart')) || []
			const existingProductIndex = existingCart.findIndex((item) => item.id === id)

			if(existingProductIndex !== -1){
				existingCart[existingProductIndex].quantity += preQuantity
			}
			else{
				existingCart.push(product);
			}
			localStorage.setItem('cart', JSON.stringify(existingCart))

			setPreQuantity(0)
			setSize('Select a Size')
			setColor('Select a Color')
			setCoupon('')
	}

	return (
		<div>
			<div>
				<h4>{name}</h4>
				<p className='rating'>
					{<StarCounter star={ratings} />}
					<span> {ratingsCount} review</span>
				</p>
				<h4>${price}.00</h4>
				<h6>from: {seller}</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit
					odit quod explicabo esse, doloremque repudiandae expedita iure rerum .
				</p>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='select-product size'>
						<select value={size} onChange={handleSizeChanger}>
							<option value='Select Size'>Select Size</option>
							<option value='SM'>SM</option>
							<option value='MD'>MD</option>
							<option value='LG'>LG</option>
							<option value='XL'>XL</option>
							<option value='XXL'>XXL</option>
						</select>
						<i className='icofont-rounded-down'></i>
					</div>{' '}
					<div className='select-product color'>
						<select value={color} onChange={handleColorChanger}>
							<option value='Select Color'>Select Color</option>
							<option value='Pink'>Pink</option>
							<option value='Ash'>Ash</option>
							<option value='Red'>Red</option>
							<option value='Blue'>Blue</option>
							<option value='White'>White</option>
							<option value='Black'>Black</option>
						</select>
						<i className='icofont-rounded-down'></i>
					</div>
					<div className='cart-plus-minus'>
						<div className='dec qtybutton' onClick={handleDecrease}>
							-
						</div>
						<input
							type='text'
							className='cart-plus-minus-box'
							name='qtybutton'
							id='qtybutton'
							value={preQuantity}
							onChange={() => setPreQuantity(parseInt(e.target.value, 10))}
						/>
						<div className='inc qtybutton' onClick={handleIncrease}>
							+
						</div>
					</div>
					<div className='discount-code mb-2'>
						<input
							type='text'
							value={coupon}
							placeholder='Enter Discount Code'
							onChange={e => setCoupon(e.target.value)}
						/>
					</div>
					<button type='submit' className='lab-btn'>
						<span>Add to Cart</span>
					</button>
					<Link to={'/cart-page'} className='lab-btn bg-primary'>
						<span>Check Cart</span>
					</Link>
				</form>
			</div>
		</div>
	)
}

export default ProductDisplay
