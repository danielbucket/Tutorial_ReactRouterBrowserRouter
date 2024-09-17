import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.div`
  grid-area: NavBar;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  width: 100vw;
`

export const SiteTitle = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
`

export const UL = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
`

export const StyledLink = styled(Link)`
  color: inherit;
  padding: .25rem;
  text-decoration: none;
  &.active, &:hover {
    background-color: #777;
  }
`