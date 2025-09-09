import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../api'


const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')

    const navigate = useNavigate()
    const {user,setUser} = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data)
                setIsLoading(false)
            }
        }).catch((error) => {
            localStorage.removeItem('token')
            navigate('/login')
        })
    }
    , [token])

    if (isLoading) {
        return <div>Loading...</div>
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectWrapper
