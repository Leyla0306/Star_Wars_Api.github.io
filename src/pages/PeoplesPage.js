import React, { useEffect, useState } from 'react'
import { PeopleItem } from '../components/PeopleItem'


function PeoplesPage() {
  const [peoples, setPeoples] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    Promise.all([
      loadPeoples(),
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const loadPeoples = () => {
    return fetch('https://swapi.dev/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPeoples(data.results)
      })
  }

  const searchPeoples = (query) => {
    return peoples.filter(some => some.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
  }

  const filteredPeoples = searchPeoples(search)

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <input type="text" placeholder="Search..." className="form-control mb-3" value={search} onChange={(event) => setSearch(event.target.value)} />

      <h3>People</h3>

      <ul className="list-group">
        {filteredPeoples.map((man, idx) => (
          <PeopleItem data={man} key={idx} />
        ))}
      </ul>
    </div>
  )
}

export {PeoplesPage}