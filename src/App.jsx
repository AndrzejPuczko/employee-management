import React, { useState } from 'react'
import UsersList from './components/_templates/UsersList/UsersList'
import Form from './Views/AddUser'
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'
import { Wrapper } from './App.styles'
import { users as usersData } from '/@/data/Users'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout'
import Dashboard from './Views/Dashboard'
import AddUser from './Views/AddUser'

const initialFormState = {
	name: '',
	lengthOfService: '',
	average: '',
}

const App = () => {
	const [user, setUser] = useState(usersData)
	const [formValues, setFormValues] = useState(initialFormState)

	const deleteUser = filteredId => {
		setUser(prevState => prevState.filter(user => user.id !== filteredId))
	}

	const handleInputChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		})
	}

	const handleAddUser = e => {
		e.preventDefault()
		const newUser = {
			name: formValues.name,
			lengthOfService: formValues.lengthOfService,
			average: formValues.average,
		}

		setUser(prevState => [newUser, ...prevState])
		setFormValues(initialFormState)
	}

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainLayout>
					<Wrapper>
						<nav>
							<Link to="/">Home</Link>
							<Link to="/add-user">Add User</Link>
						</nav>
						<Routes>
							<Route path="/" element={<Dashboard deleteUser={deleteUser} user={user} />} />
							<Route path="/add-user" element={<AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />} />
						</Routes>
					</Wrapper>
				</MainLayout>
			</ThemeProvider>
		</Router>
	)
}

export default App
