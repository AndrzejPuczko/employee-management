import React, { useContext } from 'react'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import UsersList from '../components/_templates/UsersList/UsersList'
import { UsersContext } from '../providers/UsersProvider'

const Dashboard = () => {
	const { user } = useContext(UsersContext)

	return (
		<ViewWrapper>
			<UsersList user={user} />
		</ViewWrapper>
	)
}

export default Dashboard
