import PropTypes from 'prop-types'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import UsersList from '../components/_templates/UsersList/UsersList'
import { UserShape } from '../types/types'

const Dashboard = ({ user, deleteUser }) => {
	return (
		<ViewWrapper>
			<UsersList user={user} deleteUser={deleteUser} />
		</ViewWrapper>
	)
}

Dashboard.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
	deleteUser: PropTypes.func,
}

export default Dashboard
