import Navigation from '../../_templates/Navigation/Navigation'
import { Wrapper } from './MainLayout.styles'

const MainLayout = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			{children}
		</Wrapper>
	)
}

export default MainLayout
