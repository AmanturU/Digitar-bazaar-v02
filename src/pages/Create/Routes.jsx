import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChooseCreateVariant from '.'
import CreateCollectionPage from './CreateCollection'
import CreateItemPage from './CreateItem'

const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ChooseCreateVariant />} />
      <Route path="/:id/createCollection" element={<CreateCollectionPage />} />
      <Route path="/:id/createNFT" element={<CreateItemPage />} />
    </Routes>
  )
}

export default CreateRoutes