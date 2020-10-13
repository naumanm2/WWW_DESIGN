import React from 'react'
import PropTypes from 'prop-types'
import { PinStyle, PinStyleHover, K_SIZE } from './Pin.styles'

const Pin = (props) => {
  const visibility = { display: props.show ? '' : 'none' }
  return (
    <div>

    <div style={visibility}>
      {props.input.keywords}
    </div>
    <PinStyle>
    {props.input.name}
  </PinStyle>
  </div>

  )
}

export default Pin
