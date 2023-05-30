import UsersList from './components/UsersList/UsersList'
import './assets/GlobalStyles.scss'
import styled from 'styled-components'

const Wrapper = styled.div`
	background-color: #f7f8fa;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`

function App() {
	return (
		<Wrapper>
			<UsersList />
		</Wrapper>
	)
}

export default App
