import React from 'react'

function PlanetsItem(props) {
  const {data} = props

  return (
    <li className="list-group-item">
      <h3>{data.name}</h3>

      <table className="table w-100">
        <tbody>
          <tr>
            <td>Rotation_period</td>
            <td>{data.rotation_period}</td>
          </tr>
          <tr>
            <td>Climate</td>
            <td>{data.climate}</td>
          </tr>
          <tr>
            <td>Diameter</td>
            <td>{data.diameter}</td>
          </tr>
          <tr>
            <td>Gravity</td>
            <td>{data.gravity}</td>
          </tr>
        </tbody>
      </table>
    </li>
  )
}

export {PlanetsItem}