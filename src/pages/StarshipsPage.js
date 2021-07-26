import React, { useEffect, useState } from 'react'
import { StarshipsItem } from '../components/StarshipsItem'

function StarshipsPage() {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    Promise.all([
      loadStarships()
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const loadStarships = () => {
    return fetch('https://swapi.dev/api/starships/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setStarships(data.results)
      })
  }
  const searchStarships = (query) => {
    return starships.filter(some => some.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
  }

  const filteredStarships = searchStarships(search)

  if (loading) return <div>Loading...</div>

  return (
    <div>
       <input type="text" placeholder="Search..." className="form-control mb-3" value={search} onChange={(event) => setSearch(event.target.value)} />

      <h3 className="my-3">Starships</h3>
      
      <ul className="list-group">
        {filteredStarships.map((starship, idx) => (
          <StarshipsItem data={starship} key={idx} />
        ))}
      </ul>
    </div>
  )
}

export {StarshipsPage}