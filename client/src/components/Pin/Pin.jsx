import React from 'react'
import PropTypes from 'prop-types'
import { PinStyle, PinStyleHover, K_SIZE } from './Pin.styles'

const Pin = (props) => {
  return (
    <PinStyle>
    {props.input.name}
  </PinStyle>
  )
}

export default Pin
