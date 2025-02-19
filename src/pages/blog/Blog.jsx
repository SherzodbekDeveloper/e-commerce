import PageHeader from '../../components/PageHeader'
import blogList from '../../utilis/blogdata.js'
import { Link } from 'react-router-dom'

const Blog = () => {
	return (
		<div>
			<PageHeader title={'Our Blog Page'} currentPage={'blog'} />
			<div className='blog-section padding-tb section-bg'>
				<div className='container'>
					<div className='section-wrapper'>
						<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4'>
							{blogList.map(blog => (
								<div key={blog.id} className='col'>
									<div className='post-item'>
										<div className='post-inner'>
											<div className='post-thumb'>
												<Link to={`/blog/${blog.id}`}>
													<img src={blog.imgUrl} alt='' />
												</Link>
											</div>
											<div className='post-content'>
												<Link to={`/blog/${blog.id}`}>
													<h4>{blog.title}</h4>
												</Link>
												<div className='meta-post'>
													<ul className='lab-ul'>
														{blog.metaList.map((meta,i) => (
															<li key={i}><i className={meta.iconName}></i>{meta.text}</li>
														))}
													</ul>
												</div>
												<p>{blog.desc}</p>
											</div>
											<div className='post-footer'>
												<div className='pf-left'>
													<Link className='lab-btn-text' to={`/blog/${blog.id}`}>
													{blog.btnText}
													<i className='icofont-external-link'></i>
													</Link>
												</div>
												<div className='pf-right'>
													<i className='icofont-comment'></i>
													<span className='comment-count'>{blog.commentCount}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog
