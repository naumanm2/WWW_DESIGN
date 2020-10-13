import React from 'react'
import Map from '../components/Map/Map'

const Home = (props) => {
  const helsinki = {
    lat: 60.1733244,
    lng: 24.9410248
  }
  return (
    <div>
      <Map
        center={helsinki}
        zoom={11}
        pins={props.pins}
      />
    </div>
  )
}

export default Home
