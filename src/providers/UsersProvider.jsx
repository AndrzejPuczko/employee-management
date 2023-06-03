import React, { useState } from 'react'
import { users as usersData } from '../data/users'

export const UsersContext = React.createContext({
	user: [],
	handleAddUser: () => {},
	deleteUser: () => {},
})

const UsersProvider = ({ children }) => {
	const [user, setUser] = useState(usersData)

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
