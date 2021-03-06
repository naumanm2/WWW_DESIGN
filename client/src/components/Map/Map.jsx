import React, {useState, useRef} from 'react'
import GoogleMap from 'google-map-react'
import Pin from '../Pin/Pin'
import useSupercluster from 'use-supercluster';

import {MapContainer, ClusterMarker, mapStyle} from './Map.styles'

import { connect } from 'react-redux'

const Marker = ({ children }) => children

/*--
The actual "beef" of our application. Map component using npm library google-map-react.
Uses clusters when needed and pans map accordingly when clicked on one.
Filters pins according to user input. Filter gets input from redux store.

 --*/



const Map = (props) => {

  const mapRef = useRef()

  //function to filter pins. Does not filter if filter is not set. Gets information from redux store.
  const filteredPins = props.pins.filter(x =>
    !props.filter || (x.museumName.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
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

  //supercluster library
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  //set keys when hovered on a pin to display adjacent data in the pin component
  const [show, setShow] = useState('')

  const onChildMouseEnter = (key, childProps) => {
    setShow(key)
   }

   const onChildMouseLeave = (key, childProps) => {
     setShow('')
   }

   //styling to map
   const createMapOptions = (maps) => {
       return {
         panControl: false,
         mapTypeControl: false,
         styles: mapStyle,
       }
     }

  return (
    <MapContainer>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        options={createMapOptions}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
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
            </Pin>
          )
        })}
      </GoogleMap>
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
