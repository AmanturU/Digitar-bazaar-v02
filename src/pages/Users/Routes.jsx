import React from 'react'
// import NotFound from 'components/NotFound'
import { Route, Routes } from 'react-router-dom'
import { Users } from '.'
// import MainLayout from 'elements/layouts/MainLayout'

export const UsersRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/:id" element={<Users.Profile />} /> */}
      {/* <Route path="/:id/createItem" element={<Users.CreateItemPage />} /> */}
      <Route path="/:id/myCollections" element={<Users.MyCollectionPage />} />
      <Route path="/:id/settings" element={<Users.EditProfilePage />} />
      <Route path="/:id/profile" element={<Users.UserProfilePage />} />
      <Route path="/:id/nft" element={<Users.NFTDetailsPage />} />
    </Routes>
  )
}
