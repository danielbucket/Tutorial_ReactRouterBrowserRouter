import { StyledNavBar, SiteTitle, UL, StyledLink } from './index.styled.js';

function NavBar() {

  return (
    <>
      <StyledNavBar>
        <SiteTitle to='/'>App Name</SiteTitle>
        <UL>
          <CustomLink to='/about'>About</CustomLink>
          <CustomLink to='/pricing'>Pricing</CustomLink>
          <CustomLink to='/inventory'>Inventory</CustomLink>
        </UL>
      </StyledNavBar>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}

export default NavBar
