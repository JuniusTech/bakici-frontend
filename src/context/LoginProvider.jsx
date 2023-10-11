import React, { createContext, useContext, useState } from "react"

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const values = { user, setUser }

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}

export const useLoginContext = () => useContext(LoginContext)

export default LoginProvider
