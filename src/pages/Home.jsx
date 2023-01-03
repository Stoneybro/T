import React from 'react'
import Navbar from '../components/Navbar'
import Refreshtoken from '../hooks/Refreshtoken'
import { useAuth } from '../Context/Auth'
const Home = () => {
  const {auth} =useAuth()
  const refresh=Refreshtoken()
  
  return (
    <div>
      <Navbar />
    {auth&&<button onClick={refresh}>refresh</button>}
    </div>
  )
}

export default Home