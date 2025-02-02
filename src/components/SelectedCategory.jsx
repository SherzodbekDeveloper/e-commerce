import React from 'react'

const OptionCategories = [
	{ value: 'all', title: 'All Categories' },
	{ value: 'electronics', title: 'Electronics' },
	{ value: 'computer', title: 'Computer' },
	{ value: 'smart-home', title: 'Smart Home' },
	{ value: 'automotive', title: 'Automotive' },
	{ value: 'baby', title: 'Baby' },
	{ value: 'beauty', title: 'Beauty' },
	{ value: 'personal-care', title: 'Personal Care' },
	{ value: 'butcher-shop', title: 'Butcher Shop' },
	{ value: 'cafe', title: 'Cafe' },
	{ value: 'charity-2', title: 'Charity' },
	{ value: 'church', title: 'Church' },
	{ value: 'clinic', title: 'Clinic' },
	{ value: 'college', title: 'College' },
	{ value: 'conference', title: 'Conference' },
	{ value: 'construction', title: 'Construction' },
	{ value: 'corona-virus', title: 'Corona Virus' },
	{ value: 'corporate', title: 'Corporate' },
	{ value: 'covid19', title: 'Covid19' },
	{ value: 'digital-products', title: 'Digital Products' },
	{ value: 'doctors', title: 'Doctors' },
	{ value: 'ecological', title: 'Ecological' },
	{ value: 'education', title: 'Education' },
	{ value: 'entertainment', title: 'Entertainment' },
	{ value: 'environment', title: 'Environment' },
	{ value: 'environmental', title: 'Environmental' },
	{ value: 'events', title: 'Events' },
	{ value: 'fitness', title: 'Fitness' },
	{ value: 'food-shop', title: 'Food Shop' },
	{ value: 'free', title: 'Free' },
	{ value: 'gym', title: 'Gym' },
	{ value: 'halloween', title: 'Halloween' },
	{ value: 'health', title: 'Health' },
	{ value: 'healthcare', title: 'Healthcare' },
	{ value: 'learnpress', title: 'Learnpress' },
	{ value: 'meat-shop', title: 'Meat Shop' },
	{ value: 'medical', title: 'Medical' },
	{ value: 'medical-prevention', title: 'Medical Prevention' },
	{ value: 'meetup', title: 'Meetup' },
	{ value: 'mobile-apps', title: 'Mobile Apps' },
	{ value: 'music', title: 'Music' },
	{ value: 'news', title: 'News' },
	{ value: 'nonprofit', title: 'Nonprofit' },
	{ value: 'onepage', title: 'Onepage' },
	{ value: 'online-course', title: 'Online Course' },
	{ value: 'personal-blog', title: 'Personal Blog' },
	{ value: 'portfolio', title: 'Portfolio' },
	{ value: 'pregnancy', title: 'Pregnancy' },
	{ value: 'premium', title: 'Premium' },
	{ value: 'psd', title: 'PSD' },
	{ value: 'religion', title: 'Religion' },
	{ value: 'restaurants', title: 'Restaurants' },
	{ value: 'school', title: 'School' },
	{ value: 'seo', title: 'SEO' },
	{ value: 'software', title: 'Software' },
	{ value: 'startups', title: 'Startups' },
	{ value: 'university', title: 'University' },
	{ value: 'vcard', title: 'Vcard' },
	{ value: 'woocommerce', title: 'WooCommerce' },
	{ value: 'yoga', title: 'Yoga' },
	{ value: 'magazine', title: 'Magazine' },
	{ value: 'event-wordpress', title: 'Event' },
]

const SelectedCategory = select => {
	return (
		<select name='' id=''>
			{OptionCategories.map((category, i) => (
				<option key={i} value={category.value}>
					{category.title}
				</option>
			))}
		</select>
	)
}

export default SelectedCategory
