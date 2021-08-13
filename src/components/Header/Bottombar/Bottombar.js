import { useEffect } from 'react'
import styled from 'styled-components'
import Icons from './Icons/Icons'

const StyledBottombar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 69px;
	background-color: var(--navBGC);
	color: white;
	transition: bottom 500ms;
	z-index: 99;
	@media (min-width: 640px) {
		display: none;
	}
`

const Bottombar = () => {
  
	useEffect(() => {
		let prev = window.pageYOffset
		const see = () => {
			var current = window.pageYOffset
			if (prev > current || window.pageYOffset < 50) {
				document.getElementById('bottombar').style.bottom = 0
			} else {
				document.getElementById('bottombar').style.bottom = '-100%'
			}
			prev = current
		}

		window.addEventListener('scroll', see)
		return () => window.removeEventListener('scroll', see)
	}, [])
	return (
		<StyledBottombar id="bottombar">
			<Icons />
		</StyledBottombar>
	)
}

export default Bottombar
