import React from 'react'
import axios from '../api/axios'
import { useAuth } from '../Context/Auth'

const REFRESH_URL='/token/refresh'
const Refreshtoken = () => {
    const {setAuth}=useAuth()
    async function refresh(params) {
        
            const response=await axios.get(REFRESH_URL,{withCredential:true})
            const accesstoken=response?.data?.access_token
            console.log(response);
           setAuth(prev=>{
            return{
                ...prev,accesstoken
            }
           })
           return accesstoken
    }
  return refresh
}

export default Refreshtoken