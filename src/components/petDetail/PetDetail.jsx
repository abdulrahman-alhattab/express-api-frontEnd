import { useState, useEffect } from "react"
import * as petService from '../../services/petService'
import { Link, useParams, useNavigate } from "react-router"

function PetDetail(props) {
  const {findPetToUpdate} = props;
  const [pet, setPet] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(
    () => {
      const getOnePet = async (id) => {
        const pet = await petService.show(id)
        setPet(pet)
      }

      if(id) getOnePet(id)
    }, [id]
  )

  const handleDelete = async () => {
    const deletedPet = await petService.deleteOne(id)

    if(deletedPet){
      navigate('/')
    }else{
      console.log('something went wrong!')
    }
  }

  if(!id) return <h1>Loading...</h1>
  if (!pet) return <h1>Loading..</h1>

  return (
    <div>
      <h1>{pet.name}</h1>
      <h4>{pet.age}</h4>
      <p>{pet.breed}</p>
      <div>
        <Link onClick={()=>  findPetToUpdate(id) } to={`/pets/${id}/update`}>Edit</Link>
        <br />
        <Link to={`/pets/${id}/edit`}>NEW Edit</Link>
        <br />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default PetDetail
