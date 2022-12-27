import React from 'react'
import { useState,useEffect,useRef } from 'react'
import axios from '../api/axios';
const REGISTER_URL='/signup'
const Register = () => {
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const EMAIL_REGEX=/^[a-zA-Z0-9.!$%&'*+/=?^_ `{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/

    const nameref=useRef(null)
    const errorref=useRef(null)
    const [name,setName]=useState('')
    const[validName,setValidName]=useState(false)
    const [nameFocus,setNameFocus]=useState('')

    const [email,setEmail]=useState('')
    const[validEmail,setValidEmail]=useState(true)
    const [emailFocus,setEmailFocus]=useState('')

    const [pwd,setPwd]=useState('')
    const[validPwd,setValidPwd]=useState(false)
    const [pwdFocus,setPwdFocus]=useState('')

    const [confirmpwd,setConfirmPwd]=useState('')
    const[validConfirmPwd,setValidConfirmPwd]=useState(false)
    const [confirmPwdFocus,setConfirmPwdFocus]=useState('')
    const [error,setError]=useState('')


    useEffect(()=>{
        nameref.current.focus()
    },[])
    useEffect(()=>{
        setValidName(USER_REGEX.test(name))
        console.log(validName);
    },[name])

    useEffect(()=>{
        setValidName(EMAIL_REGEX.test(email))
        
    },[email])

    useEffect(()=>{
        setValidPwd(PWD_REGEX.test(pwd))

    },[pwd])

    useEffect(()=>{
        setValidConfirmPwd(pwd===confirmpwd)
    },[confirmpwd])

    async function handleSubmit (e) {
        e.preventDefault()
        try {
            const response=await axios.post(REGISTER_URL,JSON.stringify({user:name,password:pwd}),{withCredentials:true,headers:{'content-Type':'application/json'}})
        } catch (error) {
            if (!error?.response) {
                setError('NO SERVER RESPONSE');
            }else if (error?.response===409){
                setError('USERNAME TAKEN');
            }else{
                setError('REGISTRATION FAILED');
            }
            errorref.current.focus()
        }
    }

  return (
    <div className='Register'>
        
        <form onSubmit={handleSubmit}>
        {error&& <div className="error" ref={errorref}>{error}</div>}
            <h1>Create an E-ticket Account</h1>
            <div className='fullname'>
            <label htmlFor="fullname">Fullname</label>
            <input
            ref={nameref}
            aria-describedby="uidnote"
            aria-invalid={validName?'false':'true'}
            id='fullname'
            name='fullname'
            type="text"
            required
            autoComplete='true'
            onChange={(e)=>setName(e.target.value)}
            value={name}
            onFocus={()=>setNameFocus(true)}
            onBlur={()=>setNameFocus(false)}
            />
            {!validName&&name&&nameFocus  && <div>sdtfyghjkljhfgdgxfcgh</div>}

            </div>

            <div className='email'>
            <label htmlFor="email">Email</label>
            <input
            id='email'
            name='email'
            type="email"
            required
            autoComplete='true'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            onFocus={()=>setEmailFocus(true)}
            onBlur={()=>setEmailFocus(false)}
            aria-invalid={validEmail?'false':'true'}
            />
            {!validEmail&&email &&emailFocus && <div>sdtfyghjkljhfgdgxfcgh</div>}
            </div>

            <div className="password">
            <label htmlFor="password">Password</label>
            <input
            id='password'
            name='password'
            type="password"
            required
            onChange={(e)=>setPwd(e.target.value)}
            value={pwd}
            onFocus={()=>setPwdFocus(true)}
            onBlur={()=>setPwdFocus(false)}
            aria-describedby="password"
            aria-invalid={validPwd?'false':'true'}
            />
            {!validPwd&&pwd &&pwdFocus && <div>sdtfyghjkljhfgdgxfcgh</div>}
            </div>

            <div className="confirmpassword">
            <label htmlFor="confirmpassword">Confirm password</label>
            <input
            id='confirmpassword'
            name='confirmpassword'
            type="password"
            required
            onChange={(e)=>setConfirmPwd(e.target.value)}
            value={confirmpwd}
            />
            {!validConfirmPwd&&confirmpwd  && <div>sdtfyghjkljhfgdgxfcgh</div>}
            </div>
            
            <button type="submit" disabled={!validConfirmPwd ||!validEmail || !validPwd ||!validEmail || !validName?true:false }>submit</button>
                   </form>
    </div>
  )
}

export default Register