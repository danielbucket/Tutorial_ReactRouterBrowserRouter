import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { PageLayout } from '../../components/pageLayout.js'
import { UL, StyledLink } from './index.styled.js'
import Vinyl from './pages/Vinyl'
import Cassette from './pages/Cassette'
import CD from './pages/CD'
import Merch from './pages/Merch'

function Inventory() {
  const text = 'Inventory'

  return (
    <>
      <PageLayout>{text}</PageLayout>
      <UL>
        <CustomLink to='/vinyl'>Vinyl</CustomLink>
        <CustomLink to='/cassette'>Cassette</CustomLink>
        <CustomLink to='/cd'>CD</CustomLink>
        <CustomLink to='/merch'>Merch</CustomLink>
      </UL>
      <Routes>
        <Route path='/vinyl' element={<Vinyl />} />
        <Route path='/cassette' element={<Cassette />} />
        <Route path='/cd' element={<CD />} />
        <Route path='/merch' element={<Merch />} />
      </Routes>
    </>
  )
}

function CustomLink({ to, children, ...props}) {

  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}


export default Inventory