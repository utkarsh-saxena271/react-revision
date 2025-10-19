import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../Pages/AuthPage'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'
import ProtectedRoute from './ProtectedRoute'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route element={<AuthPage/>}>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Route>
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
    </Routes>
  )
}

export default MainRoutes