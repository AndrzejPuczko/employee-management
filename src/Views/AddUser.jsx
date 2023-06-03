// import UsersListItem from '/@/components/_modules/UsersListItem/UsersListItem'
// import { Wrapper, StyledList, StyledTitle } from '../components/_templates/UsersList/UserList.styles'
import FormField from '../components/_modules/FormField/FormField'
import Button from '../components/_elements/Button/Button'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import { Title } from '../components/_elements/Title/Title'

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
	return (
		<>
			<ViewWrapper as="form" onSubmit={handleAddUser}>
				<Title>Add new employee</Title>
				<FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
				<FormField label="Length Of Service" id="lengthOfService" name="lengthOfService" value={formValues.lengthOfService} onChange={handleInputChange} />
				<FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
				<Button type="submit">Add</Button>
			</ViewWrapper>
		</>
	)
}

export default AddUser
