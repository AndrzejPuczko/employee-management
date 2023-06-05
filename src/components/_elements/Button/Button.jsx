import styled from 'styled-components'

const Button = styled.button`
	margin: 15px 0;
	padding: ${({ isBig }) => (isBig ? '10px 70px' : '7px 20px')};
	font-size: ${({ isBig, theme}) => (isBig ? theme.fontSize.lg : theme.fontSize.s)};
	background-color: ${({ theme }) => theme.colors.lightPurple};
	border-radius: 20px;
	border: none;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.darkGrey};
	cursor: pointer;
`

export default Button
