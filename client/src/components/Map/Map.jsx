import React from 'react'
import GoogleMapReact from 'google-map-react'
import Info from '../Info/Info'



const Map = (props) => {

  const Marker = props => {
  return <div className="SuperAwesomePin">
    see me
  </div>
  }

console.log(props.pins)
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
      defaultCenter={props.center}
      defaultZoom={props.zoom}>

      {props.pins.map(pin =>
        <Info
          key={pin.id}
          position={{
            lat: pin.lat,
            lng: pin.lng
          }}
          input={pin}>
        </Info>
      )}


    </GoogleMapReact>
  </div>
  )
}

export default Map
