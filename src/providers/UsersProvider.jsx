import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UsersContext = React.createContext({
	user: [],
	handleAddUser: () => {},
	deleteUser: () => {},
})

const UsersProvider = ({ children }) => {
	const [user, setUser] = useState([])

	useEffect(() => {
		axios.get('/employees').then(({ data }) => setUser(data.employees))
	}, [])

	const deleteUser = filteredId => {
		setUser(prevState => prevState.filter(user => user.id !== filteredId))
	}

	const handleAddUser = values => {
		const newUser = {
			name: values.name,
			lengthOfService: values.lengthOfService,
			average: values.average,
		}

		setUser(prevState => [newUser, ...prevState])
		// setFormValues(initialFormState)
	}
	return (
		<UsersContext.Provider
			value={{
				user,
				handleAddUser,
				deleteUser,
			}}>
			{children}
		</UsersContext.Provider>
	)
}

export default UsersProvider
