import styled from 'styled-components'

const StyledIcon = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    color: white;
    /* margin-right: 1.2rem; */
    #image {

    }
    > div {
        background-color: rgba(0, 0, 0, 0.8);
        width: 60px;
        height: 56px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 1.75rem;
        }
    }
    span {
        text-shadow: var(--textShadow);
        white-space: nowrap;
        font-weight: 500;
    }
`

const Icon = ({name, icon}) => {
    return (
        <StyledIcon>
            <div id="image">
                {icon}
            </div>
            <span>{name}</span>
        </StyledIcon>
    )
}

export default Icon
