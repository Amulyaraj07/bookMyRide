import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        },
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
        }
    });

  return (
    <div>
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}  
        </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
