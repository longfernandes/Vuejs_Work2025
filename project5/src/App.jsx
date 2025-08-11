import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <MainLayout />
      }>
        <Route index element={<HomePage />} />
      </Route>

    </Routes>
  )
}

export default App
