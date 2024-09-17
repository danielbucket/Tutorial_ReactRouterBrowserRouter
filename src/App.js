import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Pricing from './pages/Pricing/Pricing'
import About from './pages/About/About'
import Inventory from './pages/Inventory/Inventory'
import { StyledAppWrapper, ChildrenContainer } from './components/pageLayout'

function App() {
  return (
    <>
    <StyledAppWrapper>
      <NavBar />
      <ChildrenContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </ChildrenContainer>
    </StyledAppWrapper>
    </>
  )
}

export default App