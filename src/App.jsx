import { useEffect, useState } from 'react'
import * as petService from './services/petService.js'
import './App.css'
import PetList from './components/petList/PetList'
function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getAllPets = async () => {
      try {
        const data = await petService.index()
        setPets(data)
        console.log(data )
      } catch (error) {
        console.error(error)
      }
    }
    getAllPets()
  }, [])

  return (
    <>
    <PetList pets={pets} />
    </>
  )
}

export default App
