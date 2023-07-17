import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import SingUp from './SignUp'

const AuthLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SingUp />} />
    </Routes>
  )
}

export default AuthLayout