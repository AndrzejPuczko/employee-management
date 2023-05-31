import PropTypes from 'prop-types'
import { Wrapper, StyledInfo } from '/@/components/_modules/UsersListItem/UsersListItem.styles'
import { Average } from '/@/components/_elements/Average/Average.styles.jsx'
import Button from '/@/components/_elements/Button/Button'



const UsersListItem = ({ userData: { average, name, lengthOfService } }) => (
	<Wrapper>
		<Average value={average}>{average}</Average>
		<StyledInfo>
			<p>{name}</p>
			<p>{lengthOfService}</p>
		</StyledInfo>
		<Button />
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
