import React, {useState, useRef} from 'react'
import GoogleMapReact from 'google-map-react'
import Info from '../Info/Info'
import Pin from '../Pin/Pin'

import Supercluster from 'supercluster'
import useSupercluster from 'use-supercluster';

import {MapContainer, ClusterMarker} from './Map.styles'

import { connect } from 'react-redux'

const Marker = ({ children }) => children



const Map = (props) => {


  const mapRef = useRef()

  const filteredPins = props.pins.filter(x =>
    !props.filter || (x.name.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
  )

  const [bounds, setBounds] = useState(null)
  const [zoom, setZoom] = useState(10)
  const points = filteredPins.map(pin => ({
    type: "Feature",
    properties: {
      cluster: false, ...pin

    },
    geometry: { type: "Point", coordinates: [
        pin.lng.$numberDecimal,
        pin.lat.$numberDecimal
      ]
    }
  }))

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  const [info, setInfo] = useState(null)

  const [show, setShow] = useState('')
  const visible = { display: show ? '' : 'none' }

  const onChildMouseEnter = (key, childProps) => {
    console.log("entering")
    console.log(key)
    setInfo(childProps)
    setShow(key)
   }

   const onChildMouseLeave = (key, childProps) => {
     console.log("leaving")
     console.log(childProps)
     setInfo(null)
     setShow('')
   }



   console.log(filteredPins)

   const markers = filteredPins.map(pin =>
     <Pin
       key={pin._id}
       lat={pin.lat.$numberDecimal}
       lng={pin.lng.$numberDecimal}
       input={pin}
       show={show===pin._id}>
     </Pin>
   )


  return (
    <MapContainer>

      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom)
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ])
        }}
        >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const {cluster: isCluster, point_count: pointCount} = cluster.properties

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
                input={cluster}
                >
                <ClusterMarker
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </ClusterMarker>
              </Marker>
            )
          }
          return (
            <Pin
              key={`pin-${cluster.properties._id}`}
              lat={latitude}
              lng={longitude}
              input={cluster.properties}
              show={show===`pin-${cluster.properties._id}`}>
            >
            </Pin>
          )
        })}




      </GoogleMapReact>
  </MapContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    pins: state.pins,
    filter: state.filter
  }

}

export default connect(
  mapStateToProps
)(Map)
