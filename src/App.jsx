import UsersList from './components/_templates/UsersList/UsersList'
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'
import { Wrapper } from './App.styles'

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Wrapper>
			<UsersList />
		</Wrapper>
	</ThemeProvider>
)

export default App
