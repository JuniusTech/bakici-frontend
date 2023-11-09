import React from "react"
import AppRouter from "./router/AppRouter"
import LoginProvider from "./context/LoginProvider"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
      <ToastContainer />
    </div>
  )
}

export default App
