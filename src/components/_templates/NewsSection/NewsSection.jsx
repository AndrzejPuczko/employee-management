import { useState, useEffect } from 'react'
import Button from '../../_elements/Button/Button'
import { NewsSectionHeader, Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles'
import axios from 'axios'

const API_KEY = process.env.API_KEY

const NewsSection = () => {
	const [articles, setArticles] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		axios
			.post(
				'https://graphql.datocms.com/',
				{
					query: `
		{
			allArticles {
			  id
			  title
			  category
			  content
			  image {
				url
			  }
			}
		  }
		`,
				},
				{
					headers: {
						Authorization: `Bearer ${API_KEY}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				setArticles(data.allArticles)
			})
			.catch(() => {
				setError('Sorry, we couldn`t load articles for you')
			})
	}, [])

	return (
		<Wrapper>
			<NewsSectionHeader>Company news</NewsSectionHeader>
			{articles.length > 0 ? (
				articles.map(({ title, category, content, image = null }) => (
					<ArticleWrapper key={title}>
						<TitleWrapper>
							<h3>{title}</h3>
							<p>{category}</p>
						</TitleWrapper>
						<ContentWrapper>
							<p>{content}</p>
							{image && <img src={image.url} alt="article" />}
						</ContentWrapper>
						<Button isBig>Click me</Button>
					</ArticleWrapper>
				))
			) : (
				<NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
			)}
		</Wrapper>
	)
}

export default NewsSection
