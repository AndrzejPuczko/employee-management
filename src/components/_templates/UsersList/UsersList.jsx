// import { useState } from 'react'
// import { users as usersData } from '/@/data/Users'
// import FormField from '../../_modules/FormField/FormField'
// import Button from '../../_elements/Button/Button'
import PropTypes from 'prop-types'
import UsersListItem from '/@/components/_modules/UsersListItem/UsersListItem'
import { StyledList } from './UserList.styles'
import { UserShape } from '../../../types/types'
import { Title } from '../../_elements/Title/Title'


const UsersList = ({ user }) => {
	return (
		<>
			<Title>Employee List</Title>
			
			<StyledList>
				{user.map((userData, index) => (
					<UsersListItem key={index} userData={userData} />
				))}
			</StyledList>
		</>
	)
}

UsersList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
	deleteUser: PropTypes.func,
}

export default UsersList
