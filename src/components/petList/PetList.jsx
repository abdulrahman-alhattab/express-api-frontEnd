import React from 'react'
import { Link } from 'react-router'

function PetList({ pets }) {
  return (
    <div>
      <h1>Pet List</h1>

      {!pets.length ? (
        <div>No Pets available</div>
      ) : (
        <ol>
          {pets.map((onePet) => (
            <li key={onePet._id}>
              <Link to={`/pets/${onePet._id}`}> {onePet.name} </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default PetList
