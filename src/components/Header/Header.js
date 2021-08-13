import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo-1.png'

const StyledHeader = styled.header`
    padding: 2rem;
    display: none;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: none;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
	#logo {
		img {
			max-width: 110px;
            object-fit: cover;
		}
	}
    button {
        background-color: rgba(220,220,220,.6);
        font-size: 12px;
        transition: color .33s ease,background-color .33s ease;
        border-radius: 12px;
        padding: 6px 1.2rem;
        border: none;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
`

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/" id="logo">
				<img src={logo} alt="" />
			</Link>
            <button>
                Menu
            </button>
		</StyledHeader>
	)
}

export default Header
