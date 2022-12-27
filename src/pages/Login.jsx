import React,{useState} from 'react'
import axios from '../api/axios'
import {useAuth} from '../Context/Auth'
const Login = () => {
  const LOGIN_URL='/login'
  const {setAuth}=useAuth()
  const [email,setEmail]=useState('')
  const [pwd,setPwd]=useState('')
  const [error,setError]=useState('')
  console.log(auth);
  async function handleSubmit(params) {
    try {
      const response=await axios.post(LOGIN_URL,JSON.stringify(({email,password:pwd}),{withCredentials:true,headers:{'content-Type':'application/json'}}))
      const accesstoken=response?.data?.accesstoken
      
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
    <div>
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
            onChange={(e)=>setPwd(e.target.value)}
            value={pwd}
            aria-describedby="password"
            />
            <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login