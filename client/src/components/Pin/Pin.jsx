import React from 'react'
import PropTypes from 'prop-types'
import { PinContainer, PinStyle, PinStyleHover, PinObject } from './Pin.styles'


const Pin = (props) => {
  const visibility = { display: props.show ? '' : 'none' }
  return (

    <PinContainer>

      <PinStyle >
          <PinStyleHover onTop={props.show} >
            {props.input.name}
          </PinStyleHover>
          <PinObject onTop={props.show} />
      </PinStyle>
    </PinContainer>



  )
}

export default Pin
