import React from 'react'
import { useState, useEffect } from 'react'
import * as petService from '../../services/petService.js'
import { useParams } from 'react-router'

function PetDetail() {
  const [pet, setPet] = useState(null)
  const { id } = useParams()

  if (!id) return <h1>id does'nt exist</h1>

  useEffect(() => {
    const getOnePet = async (id) => {
      const pet = await petService.show(id)
      console.log('pet', pet)
      setPet(pet)
    }

    getOnePet(id)
  }, [id])

  if (!pet) return <h1>loading...</h1>  

  return (
    <div>
      <h1>pet Details</h1>
      name: {pet.name}
      <br />
      age: {pet.age}
      <br />
      breed: {pet.breed}
    </div>
  )
}

export default PetDetail
