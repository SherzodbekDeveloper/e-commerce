import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { Link } from 'react-router-dom'
import delImg from '../../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage'

const CartPage = () => {
	const [cartItems, setCartItems] = useState([])
	useEffect(() => {
		const storedCartItems = JSON.parse(localStorage.getItem('cart')) || []
		setCartItems(storedCartItems)
	}, [])

	const calculateTotalPrice = item => {
		return item.price * item.quantity
	}

	const handleIncrease = item => {
		item.quantity += 1
		setCartItems([...cartItems])

		localStorage.setItem('cart', JSON.stringify(cartItems))
	}

	const handleDecrease = item => {
		if (item.quantity > 1) {
			item.quantity -= 1
			setCartItems([...cartItems])

			localStorage.setItem('cart', JSON.stringify(cartItems))
		}
	}

	const handleDeleteItem = item => {
		const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id)
		setCartItems(updatedCart)

		updateLocalStorage(updatedCart)
	}

	const updateLocalStorage = cart => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	const cartSubTotal = cartItems.reduce((total, item) => {
		return total + calculateTotalPrice(item)
	}, 0)

	const orderTotal = cartSubTotal
	return (
		<div>
			<PageHeader title={'Shop Cart'} currentPage={'Cart Page'} />

			<div className='shop-cart padding-tb'>
				<div className='container'>
					<div className='section-wrapper'>
						<div className='cart-top'>
							<table>
								<thead>
									<tr>
										<th className='cart-product'>Product</th>
										<th className='cart-price'>Price</th>
										<th className='cart-quantity'>Quantity</th>
										<th className='cart-toprice'>Overall</th>
										<th className='cart-edit'>Edit</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map((item, i) => (
										<tr key={i}>
											<td className='product-item cart-product'>
												<div className='p-thumb'>
													<Link to={`/shop/${item.id}`}>
														<img src={item.img} alt='' />
													</Link>
												</div>
												<div className='p-content'>
													<Link to={`/shop/${item.id}`}>{item.name}</Link>
												</div>
											</td>
											<td className='cat-price'>${item.price}.00</td>
											<td className='cat-quantity'>
												<div className='cart-plus-minus'>
													<div
														className='dec qtybutton'
														onClick={() => handleDecrease(item)}
													>
														-
													</div>
													<input
														type='text'
														className='cart-plus-minus-box'
														name='qtybutton'
														value={item.quantity}
													/>
													<div
														className='inc qtybutton'
														onClick={() => handleIncrease(item)}
													>
														+
													</div>
												</div>
											</td>
											<td className='cat-toprice'> ${calculateTotalPrice(item)}.00</td>
											<td className='cat-edit '>
												<a href='#' onClick={() => handleDeleteItem(item)}>
													<img  src={delImg} alt="" />
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="cart-bottom">
							<div className="cart-checkout-box">
								<form className='coupon '>
										<input className='cart-page-input-text' type="text" name="coupon" id="coupon" placeholder='Enter Coupon Code' />
										<input type="submit" value={'Apply Coupon'} />
								</form>
								<form className='cart-checkout'>
									<input type="submit" value={'Update Cart'} />
									<div><CheckOutPage/></div>
								</form>
							</div>
							<div className='shiping-box'>
									<div className='row'>
										<div className='col-md-6 col-12'>
											<div className='calculate-shiping'>
												<h3>Calculate Shipping</h3>
												<div className="outline-select">
													<select>
														<option value="uk">United Kingdom</option>
														<option value="bd">Bangladesh</option>
														<option value="pak">Pakistan</option>
														<option value="India">india</option>
														<option value="Nepal">Nepal</option>
													</select>
													<span className='select-icon'>
														<i className="icofont-rounded-down"></i>
													</span>
												</div>
												<div className="outline-select shipping-select">
												<select>
														<option value="uk">New york</option>
														<option value="bd">London</option>
														<option value="pak">Dhaka</option>
														<option value="India">Korachi</option>
														<option value="Nepal">New dehli</option>
													</select>
													<span className='select-icon'>
														<i className="icofont-rounded-down"></i>
													</span>
												</div>
												<input type="text" name='postalCode' id='postalCode' className='cart-page-input-text' placeholder='Postcode/ZIP *'/>
												<button type='submit'>Update Address</button>
											</div>
										</div>
										<div className='col-md-6 col-12'>
											<div className="cart-overview">
												<h3>Cart Totals</h3>
												<ul className='lab-ul'>
													<li>
														<span className='pull-left'>Subtotal</span>
														<p className='pull-right'>${cartSubTotal}.00</p>
													</li>
													<li>
														<span className='pull-left'>Shipping and Handling</span>
														<p className='pull-right'>	Free shipping</p>
													</li>
													<li>
														<span className='pull-left'>Order Total</span>
														<p className='pull-right'>	{orderTotal.toFixed(2	)}</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartPage
