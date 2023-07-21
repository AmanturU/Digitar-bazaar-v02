import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './pages/Auth/Layout'
import TestPage from './pages/Test'
import MainPage from './pages/Main'
import Coinstobuy from './test/Coinstobuy'
import EditProfilePage from './pages/EditProfile'
import CreateItemPage from './pages/CreateItem'
import ChooseSellTypePage from './pages/ChooseSellType'
import CreateCollectionPage from './pages/CreateCollection'
import DropzoneComponent from './components/dragndrop'




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/buy" element={<Coinstobuy />} />
        <Route path="/edit" element={<EditProfilePage />} />
        <Route path="/createnft" element={<CreateItemPage />} />
        <Route path="/createcollection" element={<CreateCollectionPage />} />
        <Route path="/choose" element={<ChooseSellTypePage />} />
        <Route path="/drag" element={<DropzoneComponent />} />
      </Routes>
    </div>
  )
}

export default App