import { users } from '../../data/Users'
import UsersListItem from '../UsersListItem/UsersListItem'

const UsersList = () => {
	return (
		<div>
			<ul>
				{users.map(userData => (
					<UsersListItem userData={userData} />
				))}
			</ul>
		</div>
	)
}

export default UsersList
