import React, { useState } from 'react'
import StarCounter from '../../components/StarCounter'

const reviwtitle = 'Add a Review'

let ReviewList = [
	{
		imgUrl: '/src/assets/images/instructor/01.jpg',
		imgAlt: 'Client thumb',
		name: 'Ganelon Boileau',
		date: 'Posted on Jun 10, 2022 at 6:57 am',
		desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
	},
	{
		imgUrl: '/src/assets/images/instructor/02.jpg',
		imgAlt: 'Client thumb',
		name: 'Morgana Cailot',
		date: 'Posted on Jun 10, 2022 at 6:57 am',
		desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
	},
	{
		imgUrl: '/src/assets/images/instructor/03.jpg',
		imgAlt: 'Client thumb',
		name: 'Telford Bois',
		date: 'Posted on Jun 10, 2022 at 6:57 am',
		desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
	},
	{
		imgUrl: '/src/assets/images/instructor/04.jpg',
		imgAlt: 'Client thumb',
		name: 'Cher Daviau',
		date: 'Posted on Jun 10, 2022 at 6:57 am',
		desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
	},
]

const Review = () => {
	const [reviewShow, setReviewShow] = useState(true)
	return (
		<>
			<ul
				className={`review-nav lab-ul ${
					reviewShow ? 'RevActive' : 'DescActive'
				}`}
			>
				<li className='desc' onClick={() => setReviewShow(!reviewShow)}>
					Description
				</li>
				<li className='rev' onClick={() => setReviewShow(!reviewShow)}>
					Review{' '}
				</li>
			</ul>

			<div
				className={`review-content ${
					reviewShow ? 'review-content-show' : 'description-show'
				}`}
			>
				<div className='review-showing'>
					<ul className='content lab-ul'>
						{ReviewList.map((NavItem, i) => (
							<li key={i}>
								<div className='post-thumb'>
									<img src={NavItem.imgUrl} alt={NavItem.imgAlt} />
								</div>
								<div className='post-content'>
									<div className='entry-meta'>
										<div className='posted-on'>
											<a href='#'>{NavItem.name}</a>
											<p>{NavItem.date}</p>
										</div>
									</div>
									<div className='entry-content'>
										<p>{NavItem.desc}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className='client-review'>
						<div className='review-form'>
							<div className='review-title'>
								<h5>{reviwtitle}</h5>
							</div>

							<form className='row' action='action'>
								<div className='col-md-4 col-12'>
									<input
										type='text'
										name='name'
										id='name'
										placeholder='Full Name'
									/>
								</div>

								<div className='col-md-4 col-12'>
									<input
										type='email'
										name='email'
										id='name'
										placeholder='Your Email'
									/>
								</div>
								<div className='col-md-4 col-12'>
									<div className='rating'>
										<span className='me-2'>Your Rating</span>
										<StarCounter star={5} />
									</div>
								</div>
								<div className='col-md-12  col-12'>
									<textarea
										name='message'
										id='message'
										rows={8}
										placeholder='Type Here Message!'
									></textarea>
								</div>
								<div className='col-12'>
									<button className='default-button' type='submit'>
										<span>Submit Review</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='description'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
						asperiores ipsum adipisci. Consequatur asperiores voluptates, at
						architecto, necessitatibus iste, facilis est laborum corporis
						dignissimos ut modi eaque. Soluta harum praesentium perspiciatis
						delectus deleniti magni, qui porro labore nulla asperiores,
						cupiditate laudantium nisi in a? Illo voluptas neque nisi veritatis
						doloribus. Ut amet sequi, similique quas ea provident quasi
						laudantium natus itaque esse aut dolores fugiat reiciendis? Autem
						aspernatur eius aut voluptatem excepturi saepe est possimus
						perspiciatis illum ullam explicabo repudiandae aliquam quae,
						eligendi sit maxime commodi culpa reprehenderit earum corporis
						accusamus iure veniam cum odit. Assumenda illo officiis doloremque
						ratione.
					</p>

					<div className='post-item'>
						<div className='post-thumb'>
							<img src='/src/assets/images/shop/01.jpg' alt='' />
						</div>
						<div className='post-content'>
							<ul className='lab-ul'>
								<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum?</li>
								<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum?</li>
								<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum?</li>
								<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum?</li>
								<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, rerum?</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Review
