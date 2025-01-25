import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router';
import HomePage from '../pages/HomePage';
import NavBar from './components/NavBar';
import CreatePage from '../pages/CreatePage';

function App() {

  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
