import { useState, useEffect } from 'react'
import Button from '../../_elements/Button/Button'
import { NewsSectionHeader, Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles'
import axios from 'axios'
// const data = [
// 	{
// 		title: 'New computers in our company',
// 		category: 'Tech news',
// 		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates a ut saepe illum voluptatum, voluptate officiis aspernatur nihil quisquam accusamus',
// 		image: null,
// 	},
// 	{
// 		title: 'in our company',
// 		category: 'Tech news',
// 		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates a ut saepe illum voluptatum, voluptate officiis aspernatur nihil quisquam accusamus',
// 		image: 'https://source.unsplash.com/featured/500x400',
// 	},
// 	{
// 		title: 'New computers',
// 		category: 'Lorem',
// 		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates a ut saepe illum voluptatum, voluptate officiis aspernatur nihil quisquam accusamus',
// 		image: 'https://source.unsplash.com/featured/500x400',
// 	},
// ]

const API_TOKEN = 'b08eb3be02687ffdd1218c13db3177'

const NewsSection = () => {
	const [articles, setArticles] = useState([])

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
						Authorization: `Bearer ${API_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				setArticles(data.allArticles)
			})
			.catch(err => console.log(err))
	})

	return (
		<Wrapper>
			<NewsSectionHeader>Company news</NewsSectionHeader>
			{articles.map(({ title, category, content, image = null }) => (
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
			))}
		</Wrapper>
	)
}

export default NewsSection
