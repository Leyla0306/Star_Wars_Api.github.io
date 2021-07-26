import React from 'react'

function StarshipsItem(props) {
  const {data} = props

  return (
    <li className="list-group-item">
      <h3>{data.name}</h3>

      <table className="table w-100">
        <tbody>
          <tr>
            <td>Passengers</td>
            <td>{data.passengers}</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>{data.length}</td>
          </tr>
          <tr>
            <td>Consumables</td>
            <td>{data.consumables}</td>
          </tr>
          <tr>
            <td>Starship_class</td>
            <td>{data.starship_class}</td>
          </tr>
        </tbody>
      </table>
    </li>
  )
}

export {StarshipsItem}