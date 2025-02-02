import React, { useState } from 'react'
import blogList from '../../utilis/blogdata.js'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'

const socialList = [
	{ link: '#', iconName: 'icofont-facebook', className: 'facebook' },
	{ link: '#', iconName: 'icofont-twitter', className: 'twitter' },
	{ link: '#', iconName: 'icofont-linkedin', className: 'linkedin' },
	{ link: '#', iconName: 'icofont-instagram', className: 'instagram' },
	{ link: '#', iconName: 'icofont-pinterest', className: 'pinterest' },
]

const SingleBlog = () => {
	const [blog, setBlog] = useState(blogList)
	const { id } = useParams()
	const result = blog.filter(item => item.id === Number(id))

	return (
		<div>
			<PageHeader
				title={'Single Blog Pages'}
				currentPage={'Blog / Blog Details'}
			/>
			<div className='section-bg blog-section blog-single padding-tb'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8 col-12'>
							<article>
								<div className='section-wrapper'>
									<div className='row row-cols-1 justify-content-center g-4'>
										<div className='col'>
											<div className='post-item style-2'>
												<div className='post-inner'>
													{result.map(item => (
														<div key={item.id}>
															<div className='post-thumb'>
																<img
																	src={item.imgUrl}
																	alt=''
																	className='w-100'
																/>
															</div>

															<div className='post-content'>
																<h3>{item.title}</h3>
																<div className='meta-post'>
																	<ul className='lab-ul'>
																		{item.metaList.map((meta, i) => (
																			<li key={i}>
																				<i className={meta.iconName}></i>
																				{meta.text}
																			</li>
																		))}
																	</ul>
																</div>
																<p>
																	Lorem ipsum dolor sit amet consectetur
																	adipisicing elit. Accusantium magnam vitae
																	voluptatibus distinctio aliquam, ad minima
																	laborum saepe blanditiis consequatur qui,
																	voluptates quae. Labore omnis iure minima
																	impedit laborum error! Lorem ipsum dolor sit
																	amet consectetur adipisicing elit. Corporis,
																	mollitia. Laudantium esse nam sapiente
																	aspernatur nostrum, labore autem blanditiis
																	repellat molestias consequuntur sunt,
																	architecto, animi recusandae ab molestiae odit
																	debitis.
																</p>

																<blockquote>
																	<p>
																		Lorem ipsum dolor sit, amet consectetur
																		adipisicing elit. Omnis magni ipsam, rerum
																		asperiores ullam similique consequatur.
																		Dicta culpa accusamus laudantium dolores.
																		Sequi at id nulla minima deserunt quaerat
																		blanditiis fuga.
																	</p>
																	<cite>
																		<a href=''>Omilkhanov Sherzod...</a>
																	</cite>
																</blockquote>

																<p>
																	Lorem ipsum dolor sit amet consectetur
																	adipisicing elit. Fugiat ad maiores, vitae
																	possimus nobis sequi sit molestiae, error ab
																	tenetur veritatis laborum facere obcaecati
																	saepe corrupti illum commodi assumenda. Non
																	deserunt architecto ab quidem obcaecati
																	voluptatum beatae adipisci, pariatur ex
																	tempora voluptate blanditiis praesentium iure
																	harum. Expedita ipsam autem ea iste fugiat,
																	aperiam, qui earum et assumenda aut, itaque
																	placeat.
																</p>
																<img
																	src='/src/assets/images/blog/single/01.jpg'
																	alt=''
																/>
																<p>
																	Lorem ipsum dolor sit amet consectetur
																	adipisicing elit. Nam laboriosam labore
																	excepturi voluptatum? Quia possimus, tenetur,
																	odit ratione reprehenderit tempore veritatis
																	voluptatum consectetur ut enim tempora
																	quisquam sunt quod, beatae qui amet. Illo
																	veritatis, voluptatum incidunt architecto
																	vitae sed ut possimus error ullam fuga qui
																	quaerat ad quod laboriosam suscipit mollitia
																	expedita voluptas explicabo aspernatur fugiat
																	autem id iure! Corrupti?
																</p>
																<div className='video-thumb'>
																	<img
																		src='/src/assets/images/blog/single/02.jpg'
																		alt=''
																	/>
																	<a target='_blank' rel="noreferrer"
																		href='https://youtu.be/LGYEE4Jjpkc?si=rqJ49_OOgliVEwT2'
																		className='video-button popup'
																	>
																		<i className='icofont-ui-play'></i>
																	</a>
																</div>

																<p>
																	Lorem ipsum, dolor sit amet consectetur
																	adipisicing elit. Reprehenderit, quod? Hic,
																	neque illo possimus cum corporis
																	necessitatibus sed debitis odit. Vero, facilis
																	dolorum consequuntur aliquam tempora unde
																	molestiae soluta rerum. Sint adipisci,
																	mollitia autem neque doloremque vel facere
																	veniam, minima maiores ea alias ut. Ipsam
																	neque eveniet vitae eum provident. Voluptates
																	veniam incidunt dicta temporibus autem nostrum
																	quibusdam ipsa aliquid?
																</p>

																<div className='tags-section'>
																	<ul className='tags lab-ul'>
																		<li>
																			<a href='#'>Agency</a>
																		</li>
																		<li>
																			<a href='#'>Business</a>
																		</li>
																		<li>
																			<a href='#'>Personal</a>
																		</li>
																	</ul>
																	<ul className='lab-ul social-icons'>
																		{socialList.map((item, i) => (
																			<li key={i}>
																				<a href='' className={item.className}>
																					<i className={item.iconName}></i>
																				</a>
																			</li>
																		))}
																	</ul>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
										<div className='navigations-part'>
											<div className='left'>
												<a href='#' className='prev'>
													<i className='icofont-double-left'></i>Previous Blog
												</a>
												<a href='#' className='title'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Quae, cumque!
												</a>
											</div>
											<div className='right'>
												<a href='#' className='next'>
													Next Blog
													<i className='icofont-double-right'></i>
												</a>
												<a href='#' className='title'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Quae, cumque!
												</a>
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>
						<div className='col-lg-4 col-12'>
							<aside>
								<Tags />
								<PopularPost />
							</aside>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleBlog
