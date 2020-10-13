import React from 'react'
import PropTypes from 'prop-types'
import { PinContainer, PinStyle, PinStyleHover } from './Pin.styles'

const Pin = (props) => {
  const visibility = { display: props.show ? '' : 'none' }
  return (
    <PinContainer>
      <div style={visibility}>
        {props.input.keywords}
      </div>
      <PinStyle>
        {props.input.name}
      </PinStyle>
    </PinContainer>



  )
}

export default Pin
