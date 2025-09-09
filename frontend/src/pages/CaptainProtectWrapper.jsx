import React from 'react'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext.jsx'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api';


const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain,setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
        }

        axios.get(`${BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        }).catch((error) => {
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    }, [token])

    if (isLoading) {
        return <div>Loading...</div>
    }
  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper
