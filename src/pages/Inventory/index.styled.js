import styled from 'styled-components';
import { Link } from 'react-router-dom';

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