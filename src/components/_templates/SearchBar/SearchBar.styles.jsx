import styled from "styled-components"
import { Input } from "../../_elements/Input/Input"

export const SearchBarWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	grid-row: 1 / 1;
	grid-column: 2 / 3;
	padding: 0 40px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

	${Input} {
		font-size:  ${({ theme }) => theme.fontSize.l};
		color: ${({ theme }) => theme.colors.darkGrey};
		height: 50px;
		width: 70%;
		max-width: 500px;
		border: 2px solid ${({ theme }) => theme.colors.lightPurple};
	}
`



export const StatusInfo = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l};
	margin-right: 40px;
	p {
		margin: 5px;
	}
`