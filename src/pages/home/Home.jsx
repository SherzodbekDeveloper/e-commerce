import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Banner from './Banner'
import CategoryShowCase from './CategoryShowCase'
import HomeCategory from './HomeCategory'
import Location from './Location'
import Register from './Register'
import Sponsor from './Sponsor'

const Home = () => {
	return (
		<div>
			<Banner />
			<HomeCategory/>
			<CategoryShowCase/>
			<Register/>
			<Location/>
			<AboutUs/>
			<AppSection/>
			<Sponsor/>
		</div>
	)
}

export default Home
