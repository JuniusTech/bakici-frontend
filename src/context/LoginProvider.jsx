import React, { createContext, useContext, useState, useEffect } from "react"

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  )

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    } else {
      localStorage.removeItem("currentUser")
    }
  }, [currentUser])

  const values = { currentUser, setCurrentUser }

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}

export const useLoginContext = () => useContext(LoginContext)

export default LoginProvider
