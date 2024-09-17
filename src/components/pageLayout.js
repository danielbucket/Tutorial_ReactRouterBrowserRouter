import styled from 'styled-components'

export const StyledAppWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows:
    [NavBar] 4rem
    [Children] 1fr;
  height: 100vh;
  width: 100vw;
  background-color: #555;
`

export const ChildrenContainer = styled.div`
  grid-area: Children;
  height: 100%;
  width: 100%;
  border: 1px solid green;
`

export const PageLayout = styled.div`
  display: flex;
  justify-content: center;
`