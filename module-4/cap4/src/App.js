import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import About from './About'

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/movies/:id' element={<Movie />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App
