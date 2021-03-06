import React from 'react'
import Map from '../components/Map/Map'
import Navbar from '../components/NavBar/Navbar'
import Drawer from '../components/Drawer/Drawer'


/*--
Main page holding components. Sets map to center around Helsinki.
 --*/
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
    <Navbar home={true} redirect='/about'/>
      <Drawer />
    </div>
  )
}

export default Home
