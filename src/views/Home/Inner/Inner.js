import styled from 'styled-components'
import Articles from './Articles/Articles'
import Icons from './Icons/Icons'
import Searchbar from './Searchbar/Searchbar'
import TopHeadlines from "./TopHeadlines/TopHeadlines"
import Trending from "./Trending/Trending"
import {articles as master} from '../../../data/articles'

const StyledInner = styled.div`
	/* overflow-y: scroll; */
	height: 100vh;
	padding: 1rem 0;
	padding-right: 0;
	background-color: transparent;
`

const Inner = () => {
	const articles1 = master.slice(0, 8)
	const articles2 = master.slice(0, 8)
	return (
		<StyledInner id="inner">
			<Searchbar />
			<Icons />
			<Articles articles={articles1} />
			<TopHeadlines />
			<Articles articles={articles2} bg='black' />
			<Trending />
		</StyledInner>
	)
}

export default Inner
