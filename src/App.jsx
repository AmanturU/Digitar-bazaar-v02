import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './pages/Auth/Layout'
import TestPage from './pages/Test'
import MainPage from './pages/Main'
import Coinstobuy from './test/Coinstobuy'
import Footer from './components/main/Footer'
import Explore from './pages/Explore'
import Item from './pages/Create-item'
import Profile from './pages/Profile'
import MyCollection from './pages/MyCollection'
import CollectionStats from './pages/collectionStats'


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
        <Route path="/item" element={<Item />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/MyCollection" element={<MyCollection />} />
        <Route path="/CollectionStats" element={<CollectionStats />} />
      </Routes>
    </div>
  )
}

export default App