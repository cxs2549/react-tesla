import styled from 'styled-components'
import modelS from '../../../assets/model-s.jpeg'

const StyledModelS = styled.div`
	width: 100vw;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	height: 100vh;
	overflow: hidden;
	border: 2px solid red;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 30vh;
		background-image: linear-gradient(to bottom, #BFD0E3, white);
        z-index: 10;
	}
	img {
		transform: scale(.75);
		/* object-position: -28px 0; */
		position: absolute;
		height: 100%;
		top: 0;
		left: -70%;
		right: 0;
	}
`

const ModelS = () => {
	return (
		<StyledModelS>
			<img src={modelS} alt="" />
		</StyledModelS>
	)
}

export default ModelS
