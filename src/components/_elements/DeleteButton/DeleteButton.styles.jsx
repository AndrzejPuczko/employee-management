import styled from 'styled-components'

export const StyledButton = styled.button`
	width: 25px;
	height: 25px;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50%;
	border: none;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	svg {
		width: 100%;
		height: 100%;
		margin-top:2px;
	}
`
