import React, { useState, useContext, useReducer } from 'react'
import FormField from '../components/_modules/FormField/FormField'
import Button from '../components/_elements/Button/Button'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import { Title } from '../components/_elements/Title/Title'
import { UsersContext } from '../providers/UsersProvider'
import { useForm } from '../hooks/useForm'

const initialFormState = {
	name: '',
	lengthOfService: '',
	average: '',
	rules: false,
	error: '',
}

const AddUser = () => {
	const { handleAddUser } = useContext(UsersContext)
	const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleRules } = useForm(initialFormState)

	const handleSubmitUser = e => {
		e.preventDefault()

		if (formValues.rules) {
			handleAddUser(formValues)
			handleClearForm(initialFormState)
		} else {
			handleThrowError('You need to accept the rules')
		}
	}

	return (
		<ViewWrapper as="form" onSubmit={handleSubmitUser}>
			<Title>Add new Employee</Title>
			<FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
			<FormField label="Length Of Service" id="lengthOfService" name="lengthOfService" value={formValues.lengthOfService} onChange={handleInputChange} />
			<FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
			<FormField label="Rules" id="rules" name="rules" type="checkbox" value={formValues.rules} onChange={handleToggleRules} />
			<Button type="submit">Add</Button>
			{formValues.error && <p>{formValues.error}</p>}
		</ViewWrapper>
	)
}

export default AddUser
