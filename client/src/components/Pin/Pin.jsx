import React from 'react'
import PropTypes from 'prop-types'
import { PinContainer, PinStyle, PinStyleHover, PinObject } from './Pin.styles'

import Info from '../Info/Info'

import { setInfo, nullInfo } from '../../reducers/infoReducer'


import { connect } from 'react-redux'


const Pin = (props) => {
  const visibility = { display: props.show ? '' : 'none' }

  const setInfo = (event) => {
    event.preventDefault()
    try {
      props.setInfo(props.input)
    } catch (e) {
      console.log(e)
    }

  }
  return (
    <>
    <Info show={props.input.name}/>
    <PinContainer>

      <PinStyle >
          <PinStyleHover onTop={props.show} >
            {props.input.name}
          </PinStyleHover>
          <PinObject onTop={props.show} onClick={setInfo}>
          </PinObject>
      </PinStyle>
    </PinContainer>


</>
  )
}


const mapStateToProps = (state) => {
  return {
    info: state.info
  }
}

const mapDispatchToProps = {
  setInfo,
  nullInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pin)
