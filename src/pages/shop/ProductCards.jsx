/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import StarCounter from '../../components/StarCounter'

const ProductCards = ({ GridList, products }) => {
	return (
		<div
			className={`shop-product-wrap row justify-content-center ${
				GridList ? 'grid' : 'list'
			}`}
		>
			{products.map((product, i) => (
				<div key={i} className='col-lg-4 col-md-6 col-12'>
					<div className='product-list-item'>
						<div className='product-thumb'>
							<div className='pro-thumb'>
								<img src={product.img} alt='' />
							</div>

							<div className='product-action-link'>
								<Link to={`/shop/${product.id}`}>
									<i className='icofont-eye'></i>
								</Link>
								<a>
									<i className='icofont-heart'></i>
								</a>
								<Link to={'/cart-page'}>
									<i className='icofont-cart'></i>
								</Link>
							</div>
						</div>
						<div className='product-content'>
							<h5>
								<Link to={`/shop/${product.id}`}>{product.name}</Link>
							</h5>
							<span>from: {product.seller}</span>
							<p className='productRating'>
								<StarCounter star={product.ratings} />
							</p>
							<h6>${product.price}.00</h6>
						</div>
					</div>



					<div className='product-item'>
						<div className='product-thumb'>
							<div className='pro-thumb'>
								<img src={product.img} alt='' />
							</div>

							<div className='product-action-link'>
								<Link to={`/shop/${product.id}`}>
									<i className='icofont-eye'></i>
								</Link>
								<a>
									<i className='icofont-heart'></i>
								</a>
								<Link to={'/cart-page'}>
									<i className='icofont-cart'></i>
								</Link>
							</div>
						</div>
						<div className='product-content'>
							<h5>
								<Link to={`/shop/${product.id}`}>{product.name}</Link>
							</h5>

							<p className='productRating'>
								<StarCounter star={product.ratings} />
							</p>
							<h6>${product.price}.00</h6>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default ProductCards
