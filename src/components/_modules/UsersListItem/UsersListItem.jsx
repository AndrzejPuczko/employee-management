import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, StyledInfo } from '/@/components/_modules/UsersListItem/UsersListItem.styles'
import { Average } from '/@/components/_elements/Average/Average.styles.jsx'
import DeleteButton from '/@/components/_elements/DeleteButton/DeleteButton'
import { UserShape } from '../../../types/types'
import { UsersContext } from '../../../providers/UsersProvider'

const UsersListItem = ({ userData: { average, name, lengthOfService, id } }) => {
	const { deleteUser } = useContext(UsersContext)

	return (
		<Wrapper>
			<Average value={average}>{average}</Average>
			<StyledInfo>
				<p>{name}</p>
				<p>{lengthOfService}</p>
			</StyledInfo>
			<DeleteButton onClick={() => deleteUser(id)} />
		</Wrapper>
	)
}

UsersListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
}

export default UsersListItem
