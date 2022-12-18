import React, { createContext, useEffect, useState } from 'react'
import useStickyState from '../hooks/useStickyState';
import axios from 'axios'
import { Outlet } from 'react-router-dom'

const AuthContext = createContext({});

export const AuthProvider = () => {
  const [ token, setToken ] = useStickyState(null, 'token')
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  useEffect(() => {
    if (token?.length) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        token,
        setToken,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  )
}

export default AuthContext;