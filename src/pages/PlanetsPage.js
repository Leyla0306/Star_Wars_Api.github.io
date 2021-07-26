import React, { useEffect, useState } from 'react'
import { PlanetsItem } from '../components/PlanetsItem'


function PlanetsPage() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    Promise.all([
      loadPlanets(),
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const loadPlanets = () => {
    return fetch('https://swapi.dev/api/planets/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPlanets(data.results)
      })
  }

  const searchPlanets = (query) => {
    return planets.filter(some => some.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
  }

  const filteredPlanets = searchPlanets(search)

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <input type="text" placeholder="Search..." className="form-control mb-3" value={search} onChange={(event) => setSearch(event.target.value)} />

      <h3>Planets</h3>

      <ul className="list-group">
        {filteredPlanets.map((man, idx) => (
          <PlanetsItem data={man} key={idx} />
        ))}
      </ul>
    </div>
  )
}

export {PlanetsPage}