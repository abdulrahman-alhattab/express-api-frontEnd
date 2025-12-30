import React from 'react'

function Petlist({ pets }) {
  return (
    <div>
      <h1>Pet List</h1>

      {
      !pets.length ?
      <div>No Pets available</div>
      :
        <ol>
          {pets.map((onePet) => (
            <li key={onePet._id}>{onePet.name}</li>
          ))}
        </ol>
        }


    </div>
  )
}

export default Petlist
