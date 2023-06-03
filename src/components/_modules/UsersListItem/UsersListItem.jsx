import PropTypes from 'prop-types'
import { Wrapper, StyledInfo } from '/@/components/_modules/UsersListItem/UsersListItem.styles'
import { Average } from '/@/components/_elements/Average/Average.styles.jsx'
import DeleteButton from '/@/components/_elements/DeleteButton/DeleteButton'

const UsersListItem = ({deleteUser, userData: { average, name, lengthOfService, id } }) => (
	<Wrapper>
		<Average value={average}>{average}</Average>
		<StyledInfo>
			<p>{name}</p>
			<p>{lengthOfService}</p>
		</StyledInfo>
		<DeleteButton onClick={() => deleteUser(id)} />
	</Wrapper>
)

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.string,
		name: PropTypes.string.isRequired,
		lengthOfService: PropTypes.string,
	}),
}

export default UsersListItem
