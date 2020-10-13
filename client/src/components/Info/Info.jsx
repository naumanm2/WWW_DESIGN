import React from 'react'
import PropTypes from 'prop-types'
import { InfoStyle, InfoStyleHover, K_SIZE } from './Info.styles'

const Info = (props) => {
  console.log(props.data)
  if (!props.data) {

    return null
  }
  return (
    <InfoStyle>
    {props.data.input.name}
    </InfoStyle>
  )
}

export default Info
