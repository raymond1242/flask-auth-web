import React from 'react'
import './App.css'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'


const App:React.FC = () => {
  return (
    <>
      <div>App</div>
      <LoginPage />
      <SignUpPage />
    </>
  )
}


export default App
