import React from 'react'
import GoogleMapReact from 'google-map-react'



const Map = (props) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    ></GoogleMapReact>
  </div>
  )
}

export default Map
