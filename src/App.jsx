import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'

import './App.css'
// Services
import * as petService from './services/petService'
// Components
import PetList from './components/PetList/PetList';
import PetDetail from './components/petDetail/PetDetail';
import PetForm from './components/petForm/PetForm'
import EditPetForm from './components/V2/EditPetForm/EditPetForm';
import { Link } from 'react-router';

function App() {
  const [pets, setPets] = useState([]);
  const [petToUpdate, setPetToUpdate] = useState(null)

  // // we only want to fetch the pets list
  // // ONCE, when the component first mounts
  useEffect(()=>{
    const getAllPets = async () => {
      try{
        const pets = await petService.index()
        setPets(pets)
      }catch(error){
        console.log(error)
      }
    }

    getAllPets()
  },[])

  const updatePets = (pet) => {
    setPets([...pets, pet])
  }

  const findPetToUpdate = (petId) => {
    const foundPet = pets.find( pet => pet._id === petId)
    setPetToUpdate(foundPet)
  }

  return (
    <>
      <div>
        <Link to="/">Home</Link> | {' '}
        <Link to="/pets/new">Create Pet</Link>
      </div>

      <Routes>
        {/* EJS STYLE */}
        <Route path="/pets/:id/edit" element={<EditPetForm/>} />

        {/* LIFT STATE STYLE */}
        <Route path='/' element={ <PetList pets={pets} />} />
        {/* <Route path='/' element={ <PetListV2 />} /> */}
        <Route path="/pets/:id" element={<PetDetail findPetToUpdate={findPetToUpdate}/>} />
        <Route path="/pets/new" element={<PetForm updatePets={updatePets}/>} />
        <Route path="/pets/:id/update" element={<PetForm petToUpdate={petToUpdate} updatePets={updatePets}/>} />

      </Routes>
    </>
  )

}

export default App
