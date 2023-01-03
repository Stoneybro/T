import React from 'react'
import { useAuth } from '../Context/Auth'
import {useLocation} from 'react-router-dom'
import { axiosPrivate } from '../api/axios'
import Refreshtoken from './Refreshtoken'
import { useEffect } from 'react'
const useAxiosPrivate = () => {
    const {auth} =useAuth()
    const Location=useLocation()
    const refresh=Refreshtoken()
useEffect(()=>{

    const request=axiosPrivate.interceptors.request.use(
        config=>{
            if (!config.headers['Authorization']) {
                config.headers['Authorization']=`Bearer ${auth?.accesstoken}`
            }
            return config
        },error=Promise.reject(error)
    )

    const response=axiosPrivate.interceptors.response.use(
        response=>response,
        async(error)=>{
            const prevRequest=error?.config
            if (error?.response?.status===401 && !prevRequest.sent) {
                prevRequest.sent=true
                let newaccesstoken=refresh()
                prevRequest.header['Authorization']=`Bearer ${newaccesstoken}`
            }
            return axiosPrivate(prevRequest)
        },error=Promise.reject(error)
    )
    return()=>{
        axiosPrivate.interceptors.request.eject(request)
        axiosPrivate.interceptors.response.eject(response)
    }

},[auth,refresh])

  return (
    axiosPrivate
  )
}

export default useAxiosPrivate