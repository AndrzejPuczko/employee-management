
import Navigation from '../../_templates/Navigation/Navigation'
import { Wrapper } from './MainLayout.styles'
import SearchBar from '../../_templates/SearchBar/SearchBar'
import NewsSection from '../../_templates/NewsSection/NewsSection'





const MainLayout = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			{children}
			<NewsSection />
		</Wrapper>
	)
}

export default MainLayout
