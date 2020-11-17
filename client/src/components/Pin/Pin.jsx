import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { GalleryContainer, PinContainer, PinStyle, PinStyleHover, PinObject } from './Pin.styles'

import GalleryInfo from '../GalleryInfo/GalleryInfo'
import Info from '../Info/Info'

import Slide from '@material-ui/core/Slide';

import { setInfo, nullInfo } from '../../reducers/infoReducer'


import { connect } from 'react-redux'


const Pin = (props) => {
  const visibility = { display: props.show ? '' : 'none' }

  const setInfo = (event) => {
    event.preventDefault()
    if (props.info && props.info === props.input) {
      try {
        props.nullInfo()
      } catch (e) {
        console.log(e)
      }
    } else {
    try {
      props.setInfo(props.input)
    } catch (e) {
      console.log(e)
    }
}
  }

  return (
    <>
    <GalleryContainer>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit style={{ transitionDelay: true ? '500ms' : '0ms' }}>
      <PinContainer>
      <PinStyle >
          <PinStyleHover onTop={props.show} >
            {props.input.museumName}
          </PinStyleHover>
          <PinObject onTop={props.show} onClick={setInfo}>
          </PinObject>
      </PinStyle>
    </PinContainer>
  </Slide>
    <Info show={props.input.museumName} />
</GalleryContainer>

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
