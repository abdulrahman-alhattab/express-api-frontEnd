import axios from 'axios'
const BASE_URL = `${import.meta.env.VITE_PUPPIES_URL}/pets`

const index = async () => {
  try {
    console.log(BASE_URL)
    const response = await axios.get(BASE_URL)
    console.log(response)
    return response.data.pets
  } catch (error) {
    console.error(error)
  }
}
const show = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`)
    console.log('Show response', response.data.pet)
    return response.data.pet
  } catch (error) {
    console.error(error)
  }
}
const create = async (formState) => {
  try {
    const response = await axios.post(BASE_URL, formState)
    // console.log(response.data.pets)
    return response.data.pets
  } catch (error) {
    console.error(error)
  }
}
const update = async (formState) => {
  try {
    const updated = await axios.put(`${BASE_URL}/${petId}`, formState)
    // console.log(response.data.pets)
    return updated.data.pets
  } catch (error) {
    console.error(error)
  }
}

export { index, show, create, update }
