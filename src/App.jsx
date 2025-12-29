import { useEffect, useState } from 'react'
import * as petService from './services/petService.js'
import './App.css'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getAllPets = async () => {
      const data = await petService.index()
      setPets(data)
      console.log(data)
    }
    getAllPets()
  }, [])
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
