import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'


const Signin = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SigninForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default Signin