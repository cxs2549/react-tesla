import styled from 'styled-components'
import Icon from './Icon/Icon'
import { GiSportMedal } from 'react-icons/gi'
import { AiOutlineShoppingCart, AiTwotoneAppstore } from 'react-icons/ai'
import { FaCloudSun } from 'react-icons/fa'
import { RiVirusFill } from 'react-icons/ri'

import { BiShoppingBag } from 'react-icons/bi'
import { IoMdPhotos } from 'react-icons/io'
import { BsFillCameraVideoFill } from 'react-icons/bs'

const StyledIcons = styled.div`
	margin-top: 8%;
	width: 100%;
	/* overflow-x: scroll; */
	font-size: 13px;
	text-transform: capitalize;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: .75rem;
	align-items: center;
	justify-content: center;
	overflow-x: scroll;
	max-width: 100%;
	padding: 0 1rem;
	margin-bottom: 3.5rem;
	@media (min-width: 768px) {
		display: flex;
		grid-template-columns: repeat(10, 1fr);
		justify-content: space-between;
		max-width: 90%;
		margin: 8% auto;
	}
	@media (min-width: 1280px) {
		max-width: 60%;
		margin: 4% auto;

	}
`

const Icons = () => {
	const icons = [
		// { name: 'olympics', icon: <GiTorch /> },
		{ name: 'weather', icon: <FaCloudSun /> },
		{ name: 'groceries', icon: <AiOutlineShoppingCart /> },
		{ name: 'COVID-19', icon: <RiVirusFill /> },
		{ name: 'rewards', icon: <GiSportMedal /> },
		// { name: 'wallpapers', icon: <MdWallpaper /> },
		{ name: 'shopping', icon: <BiShoppingBag /> },
		{ name: 'images', icon: <IoMdPhotos /> },
		// { name: 'math', icon: <AiOutlineCalculator /> },
		{ name: 'videos', icon: <BsFillCameraVideoFill /> },
		{ name: 'see all', icon: <AiTwotoneAppstore /> }
	]
	return (
		<StyledIcons>
			{icons.map((icon, i) => <Icon name={icon.name} icon={icon.icon} />)}
		</StyledIcons>
	)
}

export default Icons
