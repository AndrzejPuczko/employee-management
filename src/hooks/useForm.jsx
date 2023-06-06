import { useReducer } from 'react'

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
			return {
				...action.initialValues,
			}
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

export const useForm = initialValues => {
	const [formValues, dispatch] = useReducer(reducer, initialFormState)

	const handleInputChange = e => {
		dispatch({
			type: 'INPUT CHANGE',
			field: e.target.name,
			value: e.target.value,
		})
	}

	const handleClearForm = () => {
		dispatch({ type: 'CLEAR VALUE', initialValues })
	}
	const handleThrowError = errorMessage => {
		dispatch({ type: 'THROW ERROR', errorValue: errorMessage })
	}

	const handleToggleRules = () => {
		dispatch({ type: 'RULES' })
	}

	return {
		formValues,
		handleInputChange,
		handleClearForm,
		handleThrowError,
		handleToggleRules,
	}
}
