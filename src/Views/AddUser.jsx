import React, { useState, useContext, useReducer } from 'react'
import FormField from '../components/_modules/FormField/FormField'
import Button from '../components/_elements/Button/Button'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import { Title } from '../components/_elements/Title/Title'
import { UsersContext } from '../providers/UsersProvider'

const initialFormState = {
	name: '',
	lengthOfService: '',
	average: '',
	rules: false,
	error: '',
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'INPUT CHANGE':
			return {
				...state,
				[action.field]: action.value,
			}
		case 'CLEAR VALUE':
			return initialFormState
		case 'RULES':
			return {
				...state,
				rules: !state.rules,
			}
		case 'THROW ERROR':
			return {
				...state,
				error: action.errorValue,
			}
		default:
			break
	}
}

const AddUser = () => {
	const [formValues, dispatch] = useReducer(reducer, initialFormState)
	const { handleAddUser } = useContext(UsersContext)

	const handleInputChange = e => {
		dispatch({
			type: 'INPUT CHANGE',
			field: e.target.name,
			value: e.target.value,
		})
	}

	const handleSubmitUser = e => {
		e.preventDefault()

		if (formValues.rules) {
			handleAddUser(formValues)
			dispatch({ type: 'CLEAR VALUE' })
		} else {
			dispatch({ type: 'THROW ERROR', errorValue: 'You need to accept the rules' })
		}
	}

	return (
		<ViewWrapper as="form" onSubmit={handleSubmitUser}>
			<Title>Add new Employee</Title>
			<FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
			<FormField label="Length Of Service" id="lengthOfService" name="lengthOfService" value={formValues.lengthOfService} onChange={handleInputChange} />
			<FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
			<FormField label="Rules" id="rules" name="rules" type="checkbox" value={formValues.rules} onChange={() => dispatch({ type: 'RULES' })} />
			<Button type="submit">Add</Button>
			{formValues.error && <p>{formValues.error}</p>}
		</ViewWrapper>
	)
}

export default AddUser
