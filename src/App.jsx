import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Ticket from './pages/Ticket'
import Merch from './pages/Merch'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import Events from './pages/Events'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Requireauth from './pages/Requireauth'
function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />} />

    <Route path='/blog' element={<Blog />} />
    <Route path='/merch' element={<Merch />} />

    <Route element={<Requireauth />}>
    <Route path='events' element={<Events />} />
    <Route path='ticket' element={<Ticket />}/>
    </Route>
   
    <Route path='/admin' element={<Admin />} />
    

    </Route>
   </Routes>
      )
}

export default App
