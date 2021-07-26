import React from 'react'

function PeopleItem(props) {
  const {data} = props

  return (
    <li className="list-group-item">
      <h3>{data.name}</h3>

      <table className="table w-100">
        <tbody>
          <tr>
            <td>Mass</td>
            <td>{data.mass}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>Heir Color</td>
            <td>{data.hair_color}</td>
          </tr>
          <tr>
            <td>Birth Year</td>
            <td>{data.birth_year}</td>
          </tr>
        </tbody>
      </table>
    </li>
  )
}

export {PeopleItem}