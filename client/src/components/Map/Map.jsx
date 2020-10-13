import React, {useState} from 'react'
import GoogleMap from 'google-map-react'
import Info from '../Info/Info'
import Pin from '../Pin/Pin'



const Map = (props) => {

  const [info, setInfo] = useState(null)

  const [show, setShow] = useState('')
  const visible = { display: show ? '' : 'none' }

  const onChildMouseEnter = (key, childProps) => {
    console.log("entering")
    setInfo(childProps)
    setShow(key)
   }

   const onChildMouseLeave = (key, childProps) => {
     console.log("leaving")
     console.log(childProps)
     setInfo(null)
     setShow('')
   }

   const markers = props.pins.map(pin =>
     <Pin
       key={pin._id}
       lat={pin.lat.$numberDecimal}
       lng={pin.lng.$numberDecimal}
       input={pin}
       show={show==pin._id}>
     </Pin>
   )


  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMap
      bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      onChildMouseEnter={onChildMouseEnter}
      onChildMouseLeave={onChildMouseLeave}
      >
      {markers}


    </GoogleMap>
  </div>
  )
}

export default Map
