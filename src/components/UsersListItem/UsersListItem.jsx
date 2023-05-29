import PropTypes from 'prop-types'

const UsersListItem = ({ userData: { average, name, lengthOfService } }) => (
	<li>
		<div>{average}</div>
		<div>
			<p>{name}</p>
			<p>{lengthOfService}</p>
		</div>
		<button>X</button>
	</li>
)

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.string,
		name: PropTypes.string.isRequired,
		lengthOfService: PropTypes.string,
	}),
}

export default UsersListItem
