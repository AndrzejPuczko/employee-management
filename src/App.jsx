// import UsersList from './components/_templates/UsersList/UsersList'
// import Form from './Views/AddUser'
// import React, { useState } from 'react'
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'
import { Wrapper } from './App.styles'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout'
import Dashboard from './Views/Dashboard'
import AddUser from './Views/AddUser'
import UsersProvider from './providers/UsersProvider'

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainLayout>
					<UsersProvider>
						<Wrapper>
							<Routes>
								<Route path="/add-user" element={<AddUser />} />
								<Route path="/" element={<Dashboard />} />
							</Routes>
						</Wrapper>
					</UsersProvider>
				</MainLayout>
			</ThemeProvider>
		</Router>
	)
}
export default App
