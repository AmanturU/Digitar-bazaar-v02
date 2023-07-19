import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './pages/Auth/Layout'
import TestPage from './pages/Test'
import MainPage from './pages/Main'
import Coinstobuy from './test/Coinstobuy'
import Footer from './components/main/Footer'
import Explore from './pages/Explore'
import EditProfilePage from './pages/EditProfile'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/buy" element={<Coinstobuy />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/edit" element={<EditProfilePage />} />
      </Routes>
    </div>
  )
}

export default App