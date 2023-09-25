import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Travel from './pages/Travel'
import Home from './pages/Home'
import Product from './pages/Product'


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pricelist' element={<Product />} />
          <Route path='/travel' element={<Travel />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
