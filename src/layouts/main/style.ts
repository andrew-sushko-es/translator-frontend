import {styled} from '@linaria/react'

export const Header = styled.header`
    height: 4.5rem;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: green;
`

export const MainContent = styled.div`
    display: flex;
`

export const Navigation = styled.nav`
    position: sticky;
    display: flex;
    flex-basis: 200px;
    flex-shrink: 0;
    overflow-y: auto;
    height: calc(100vh - 4.5rem);
    padding: 1rem 2rem 1.5rem 1.5rem;
`

export const ListContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    & li:last-child {
        margin-top: auto;
    }
`
