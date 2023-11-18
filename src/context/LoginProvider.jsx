import React, { createContext, useContext, useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  )

  const token = document.cookie.split("=")[1]

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token)
      if (currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(decode))
      } else {
        localStorage.removeItem("currentUser")
      }
    }
  }, [currentUser, token])

  const values = { currentUser, setCurrentUser }

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}

export const useLoginContext = () => useContext(LoginContext)

export default LoginProvider
