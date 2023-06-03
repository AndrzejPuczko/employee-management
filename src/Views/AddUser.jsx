import React, { useState, useContext } from 'react'
import FormField from '../components/_modules/FormField/FormField'
import Button from '../components/_elements/Button/Button'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import { Title } from '../components/_elements/Title/Title'
import { UsersContext } from '../providers/UsersProvider'

const initialFormState = {
	name: '',
	lengthOfService: '',
	average: '',
}

const AddUser = () => {
	const [formValues, setFormValues] = useState(initialFormState)
	const { handleAddUser } = useContext(UsersContext)

	const handleInputChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmitUser = e => {
		e.preventDefault()
		handleAddUser(formValues)
		setFormValues(initialFormState)
	}

	return (
		<ViewWrapper as="form" onSubmit={handleSubmitUser}>
			<Title>Add new student</Title>
			<FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
			<FormField label="Length Of Service" id="lengthOfService" name="lengthOfService" value={formValues.lengthOfService} onChange={handleInputChange} />
			<FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
			<Button type="submit">Add</Button>
		</ViewWrapper>
	)
}

export default AddUser
