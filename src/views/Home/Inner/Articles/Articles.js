import styled from 'styled-components'
import Article from './Article/Article'

const StyledArticles = styled.div`
	padding: 1rem;
	display: flex;
	flex-flow: column;
	background-color: ${(props) => props.bg || 'transparent'};
	> div:last-of-type {
		margin-bottom: 0;
	}
	@media (min-width: 640px) {
		/* display: grid; */
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		flex-flow: row;
		width: 100vw;
		overflow-x: scroll;
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1280px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const Articles = ({ bg, articles }) => {
	return (
		<StyledArticles bg={bg}>
			{articles.map((article, i) => <Article article={article} key={i} minWidth="360px" />)}
		</StyledArticles>
	)
}

export default Articles
