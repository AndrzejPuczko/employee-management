import { users } from '/@/data/Users'
import UsersListItem from '/@/components/_modules/UsersListItem/UsersListItem'
import { Wrapper, StyledList } from './UserList.styles'

const UsersList = () => {
	return (
		<Wrapper>
			<StyledList>
				{users.map(userData => (
					<UsersListItem userData={userData} />
				))}
			</StyledList>
		</Wrapper>
	)
}

export default UsersList
