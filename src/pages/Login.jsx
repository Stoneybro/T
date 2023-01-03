import React,{useState} from 'react'
import axios from '../api/axios'
import {useAuth} from '../Context/Auth'
import {useLocation,useNavigate} from 'react-router-dom'

const Login = () => {
  const LOGIN_URL='/login/'
  const {setAuth,auth}=useAuth()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const Location=useLocation()
  const navigate=useNavigate()
  const from=Location.state?.from?.pathname || '/'
  const [success,setSuccess]=useState(false)
  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      const response=await axios.post(LOGIN_URL,JSON.stringify({email,password}),{headers:{'content-Type':'application/json'}})
      const accesstoken=response?.data?.access_token
      setAuth({email,accesstoken})
      navigate(from,{replace:true})
    } catch (error) {
      if (!error?.response) {
        setError('NO SERVER RESPONSE')
      }else if(error?.response===400) {
        setError('WRONG EMAIL OR PASSWORD')
      }else if(error?.response===401){
        setError('UNAUTHORIZED')
      }else{
        setError('LOGIN FAILED')
      }
    }
  }

  return (
    <>
 
      <form onSubmit={handleSubmit}>
        <h1>Sign into your account</h1>
        {error&& <div className="error">{error}</div>}
        <label htmlFor="email">Email</label>
            <input
            id='email'
            name='email'
            type="email"
            required
            autoComplete='true'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />

            <label htmlFor="password">Password</label>
            <input
            id='password'
            name='password'
            type="password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            aria-describedby="password"
            />
            <button type="submit">Sign in</button>
      </form>
    
    </>
   
  )
}

export default Login