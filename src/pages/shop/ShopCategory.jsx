import React from 'react'
import Data from '../../products.json'


const ShopCategory = ({
	filterItem,
	setItem,
	menuItems,
	setProducts,
	selectedCategory,
}) => {
	return (
		<>
			<div className='widget-header'>
				<h5 className='ms-2'>All categories</h5>
			</div>
			<div>
				<button
					className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`} onClick={() => setProducts(Data)}
				>
					All
				</button>
				{menuItems.map((Val, id) => {
					return (
						<button
							onClick={() => filterItem(Val)}
							key={id}
							className={`m-2 ${selectedCategory === Val ? 'bg-warning' : ''}`}
						>
							{Val}
						</button>
					)
				})}
			</div>
		</>
	)
}

export default ShopCategory
