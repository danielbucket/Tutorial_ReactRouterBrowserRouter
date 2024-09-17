import React from 'react'

import About from '../pages/About/About'
import Pricing from '../pages/Pricing/Pricing'
import Penis from '../pages/Penis/Penis'

const aboutText = () => {
  const text = { about: 'text about penis' }

  return text
}

export const AppChildren = [
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'pricing',
    element: <Pricing />,
  },
  {
    path: 'penis',
    element: <Penis />,
    loader: aboutText,
  },
]