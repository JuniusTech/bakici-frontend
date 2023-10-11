import React from "react"
import AppRouter from "./router/AppRouter"
import LoginProvider from "./context/LoginProvider"

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
    </div>
  )
}

export default App
