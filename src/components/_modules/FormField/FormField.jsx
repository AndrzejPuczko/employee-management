import PropTypes from 'prop-types'
import { Label } from '../../_elements/Label/Label'
import { Input } from '../../_elements/Input/Input'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

    ${Label} {
        margin: 10px 0;
    }
`

const FormField = ({ onChange, value, label, name, id, type = 'text', ...props }) => {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<Input name={name} id={id} type={type} value={value} onChange={onChange}></Input>
		</Wrapper>
	)
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
}

export default FormField
