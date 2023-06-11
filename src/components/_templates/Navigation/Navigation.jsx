import React from 'react'
import { Logo, StyledLink, Wrapper } from './Navigation.styles'

const Navigation = () => {
	return (
		<Wrapper>
			<Logo>
				<h1>
					Employee
					<br />
					Management
				</h1>
			</Logo>
			<StyledLink to="/departments">Dashboard</StyledLink>
			<StyledLink to="/add-user">Add user</StyledLink>
	
		</Wrapper>
	)
}

export default Navigation
