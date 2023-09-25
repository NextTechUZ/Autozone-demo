import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Catalogs from '../pages/Catalogs'

function AppLayout() {
  return (

    <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/catalogs' element={<Catalogs/>} />
     </Routes>  )
}

export default AppLayout