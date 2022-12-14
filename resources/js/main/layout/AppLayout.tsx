import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutComponent from './LayoutComponent'
const AppLayout: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<LayoutComponent />} />
    </Routes>
  )
}

export default AppLayout
