import styled from 'styled-components'
import { ViewWrapper } from '../../_modules/ViewWrapper/ViewWrapper'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	grid-row: 1 / 3;
	grid-column: 3 / 3;
	border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
	padding: 50px;
	overflow-y: scroll;
`

export const NewsSectionHeader = styled.h2`
	margin-right: auto;
	color: ${({ theme }) => theme.colors.darkGrey};
`

export const ArticleWrapper = styled(ViewWrapper)`
	margin: 40px 0;
	width: 100%;
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.darkGrey};
	max-width: unset;
	font-size: ${({ theme }) => theme.fontSize.lg};
	p {
		line-height: 1.8;
	}
`
export const TitleWrapper = styled.div`
	h3 {
		font-size: ${({ theme }) => theme.fontSize.xl};
	}
	p {
		font-size: ${({ theme }) => theme.fontSize.lg};
	}
	padding: 10px 0;
`

export const ContentWrapper = styled.div`
	display: flex;

	img {
		max-width: 200px;
		object-fit: cover;
		margin-left: 25px;
	}
`
