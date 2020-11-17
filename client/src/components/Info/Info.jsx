import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import { nullInfo } from '../../reducers/infoReducer'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import Grow from '@material-ui/core/Grow';



import {
  InfoSection,
  InfoContainer,
  InfoRow,
  InfoColumn,
  ImgWrapper,
  Img,
  InfoText,
  TopLine,
  Description,
  Name,
  Address,
  Museocard,
  OpeningHours,
  Clock,
  Site,
  CloseBtn,
  LeftArrow,
  RightArrow
} from './Info.styles'

const Info = (props) => {
  const [slide, setSlide] = useState(0)

  console.log(props.info)

  const handleClick = (event) => {
    event.preventDefault()
    try {
      props.nullInfo()
    } catch (e) {
      console.log(e)
    }
  }
  const handleLeftClick = (event) => {
    event.preventDefault()
    setSlide((slide-1)%props.info.description.length)
  }
  const handleRightClick = (event) => {
    event.preventDefault()
    setSlide((slide+1)%props.info.description.length)
    console.log(slide)
  }


  console.log(props.show)
  if (!props.info || !props.show || props.show !== props.info.museumName) {
    return null
  }
  return (
    <ClickAwayListener onClickAway={handleClick}>
      <Grow in={props.show}>
      <InfoSection>
        <InfoContainer>
          <InfoRow>
            <InfoColumn>
              <ImgWrapper>
                <Img src={`${props.info.picture}`} alt={`${props.info.museumName}`}></Img>
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <InfoText>
                <Description>
                  {props.info.description[slide]}
                </Description>
                <LeftArrow onClick={handleLeftClick}/><RightArrow onClick={handleRightClick}/>
              </InfoText>
            </InfoColumn>
            <CloseBtn onClick={handleClick}>
            </CloseBtn>
          </InfoRow>
          <InfoRow>
            <InfoColumn>
              <TopLine>
                <Name>
                  {props.info.museumName}
                </Name>
              </TopLine>
              <InfoText>
                <Address>
                  {props.info.address}
                </Address>
              </InfoText>
              <TopLine>
                Pääsymaksut
              </TopLine>
              {props.info.fees.map(fee => (
                <InfoText>
                  {fee}
                </InfoText>
              ))}
              <InfoText>
                <Museocard>
                  museokortti
                </Museocard>
              </InfoText>
            </InfoColumn>
            <InfoColumn>
              <TopLine>
                <OpeningHours>
                  Aukioloajat
                </OpeningHours>
              </TopLine>
              <InfoText>
                  {props.info.openingHours.map(x => (
                    <Clock>{x}</Clock>
                  ))}
              </InfoText>
            </InfoColumn>
            <InfoColumn>
              <TopLine>
                Avainsanat
              </TopLine>
              {props.info.keywords.map(fee => (
                <InfoText>
                  {fee}
                </InfoText>
              ))}
              <InfoText>
                <Site>
                  <a href={`${props.info.link}`}>{props.info.link}</a>
                </Site>
            </InfoText>
            </InfoColumn>
          </InfoRow>
        </InfoContainer>
      </InfoSection>
    </Grow>
  </ClickAwayListener>
)
}

const mapStateToProps = (state) => {
  return {info: state.info}
}
const mapDispatchToProps = {
  nullInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)
