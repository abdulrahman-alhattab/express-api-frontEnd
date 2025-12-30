import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'

// services
import * as petService from './services/petService.js'
// components
import PetList from './components/petList/PetList'
import PetDetail from './components/petDetail/PetDetail'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getAllPets = async () => {
      try {
        const data = await petService.index()
        setPets(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    getAllPets()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<PetList pets={pets} />} />
        <Route path="/pets/:id" element={<PetDetail />} />
      </Routes>
    </>
  )
}

export default App
