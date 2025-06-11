import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Createnew from './pages/Createnew';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/create' element={<Createnew/>}></Route>
      </Routes>
    </Router>
  )
}

export default App