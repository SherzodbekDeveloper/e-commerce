import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom'

const CheckOutPage = () => {
	const [show, setShow] = useState(false)
	const [activeTab, setActiveTab] = useState('visa')

	const handleTabChange = tabId => {
		setActiveTab(tabId)
	}

	const handleShow = () => {
		setShow(true)
	}

	const handleClose = () => {
		setShow(false)
	}
	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || '/'

	const handleOrderConfirm = () => {
		alert('Your Order is Placed Successfully!')
		localStorage.removeItem('cart')
		navigate(from, {replace:true})
	}

	return (
		<div className='modalCard'>
			<Button variant='primary' className='py-2' onClick={handleShow}>
				Proceed to Checkout
			</Button>

			<Modal
				className='modal fade'
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<div className='modal-dialog'>
					<h5 className='px-3 mb-3 '>Select your Payment method</h5>
					<div className='modal-content'>
						<div className='modal-body'>
							<div className='tabs mt-3'>
								<ul className='nav nav-tabs' id='myTab' role='tablist'>
									<li className='nav-item' role='presentation'>
										<a
											href='#visa'
											className={`nav-link ${
												activeTab === 'visa' ? 'active' : ''
											}`}
											id='visa-tab'
											data-toggle='tab'
											role='tab'
											aria-controls='visa'
											aria-selected={activeTab === 'visa'}
											onClick={() => handleTabChange('visa')}
										>
											<img
												src='https://i.imgur.com/sB4jftM.png'
												width={80}
												alt=''
											/>
										</a>
									</li>
									<li className='nav-item' role='presentation'>
										<a
											href='#paypal'
											className={`nav-link ${
												activeTab === 'paypal' ? 'active' : ''
											}`}
											id='paypal-tab'
											data-toggle='tab'
											role='tab'
											aria-controls='paypal'
											aria-selected={activeTab === 'paypal'}
											onClick={() => handleTabChange('paypal')}
										>
											<img
												src='https://i.imgur.com/yK7EDD1.png'
												width={80}
												alt=''
											/>
										</a>
									</li>
								</ul>
								<div className='tab-content' id='myTabContent'>
									<div
										className={`tab-pane fade ${
											activeTab === 'visa' ? 'show active' : ''
										}`}
										id='visa'
										role='tabpanel'
										aria-labelledby='visa-tab'
									>
										<div className='mt-4 mx-4'>
											<div className='text-center'>
												<h5>Credit Card</h5>
											</div>
											<div className='form mt-3'>
												<div className='inputbox'>
													<input
														type='text'
														id='name'
														name='name'
														className='form-control'
														required
													/>
													<span>Cardholder Name</span>
												</div>
												<div className='inputbox'>
													<input
														type='text'
														id='number'
														name='number'
														className='form-control'
														required
														min={16}
														max={16}
													/>
													<span>Card Number</span>
												</div>
												<div className='d-flex flex-row'>
													<div className='inputbox'>
														<input
															type='text'
															id='number'
															name='number'
															className='form-control'
															required
															min={16}
															max={16}
														/>
														<span>Expiration Date</span>
													</div>
													<div className='inputbox'>
														<input
															type='text'
															id='number'
															name='number'
															className='form-control'
															required
															min={16}
															max={16}
														/>
														<span>CVV</span>
													</div>
												</div>

												<div className='px-5 pay'>
													<button className='btn btn-success btn-block' onClick={handleOrderConfirm}>
														Check
													</button>
												</div>
											</div>
										</div>
									</div>

									<div
										className={`tab-pane fade ${
											activeTab === 'paypal' ? 'show active' : ''
										}`}
										id='paypal'
										role='tabpanel	'
										aria-labelledby='paypal-tab'
									>
										<div className='mt-4 mx-4'>
											<div className='text-center'>
												<h5>Paypal Account Info</h5>
											</div>
											<div className='form mt-3'>
												<div className='inputbox'>
													<input
														type='text'
														id='name'
														name='name'
														className='form-control'
														required
													/>
													<span>Enter your Email</span>
												</div>
												<div className='inputbox'>
													<input
														type='text'
														id='number'
														name='number'
														className='form-control'
														required
														min={16}
														max={16}
													/>
													<span>Your name</span>
												</div>
												<div className='d-flex flex-row'>
													<div className='inputbox'>
														<input
															type='text'
															id='number'
															name='number'
															className='form-control'
															required
															min={16}
															max={16}
														/>
														<span>Extra Info</span>
													</div>

													<div className='inputbox'>
														<input
															readOnly
															type='text'
															id='number'
															name='number'
															className='form-control'
															required
															min={16}
															max={16}
														/>
														<span></span>
													</div>
												</div>
												<div className='px-5 pay'>
													<button className='btn btn-success btn-block' onClick={handleOrderConfirm}>
														Add Paypal
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<p className='mt-3 px-4 p-Disclaimer'>
									<em>Payment Disclaimer</em>: Lorem ipsum, dolor sit amet
									consectetur adipisicing elit. Modi esse, illum consectetur
									maiores vel est quibusdam incidunt{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default CheckOutPage
