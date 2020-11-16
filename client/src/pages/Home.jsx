import React, {useState} from 'react'
import Map from '../components/Map/Map'
import Navbar from '../components/NavBar/Navbar'
import Drawer from '../components/Drawer/Drawer'

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
      />
    <Navbar />
    <Drawer />
    </div>
  )
}

export default Home
