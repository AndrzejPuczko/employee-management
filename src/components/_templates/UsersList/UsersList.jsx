import { useState } from 'react'
import { users as usersData } from '/@/data/Users'
import UsersListItem from '/@/components/_modules/UsersListItem/UsersListItem'
import { Wrapper, StyledList, StyledTitle } from './UserList.styles'
import FormField from '../../_modules/FormField/FormField'
import Button from '../../_elements/Button/Button'

const UsersList = ({ user, deleteUser }) => {
	return (
		<>
			<StyledTitle>Employee List</StyledTitle>
			<StyledList>
				{user.map((userData, index) => (
					<UsersListItem key={index} deleteUser={deleteUser} userData={userData} />
				))}
			</StyledList>
		</>
	)
}

export default UsersList
