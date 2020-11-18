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
  ImageText,
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
    setSlide(Math.abs((slide-1)%props.info.description.length))
  }
  const handleRightClick = (event) => {
    event.preventDefault()
    setSlide((slide+1)%props.info.description.length)
  }

  const mcard = () => {
   return props.info.museocard ? 'museokortilla ilmaiseksi!' : ''
  }


  if (!props.info || !props.show || props.show !== props.info.museumName) {
    return null
  }
  return (
    <ClickAwayListener onClickAway={handleClick}>
      <Grow in={props.show===props.info.museumName}>
      <InfoSection>
        <InfoContainer>
          <InfoRow>
            <InfoColumn>
              <ImgWrapper>
                <Img src={`${props.info.picture}`} alt={`${props.info.museumName}`}></Img>
              </ImgWrapper>
              <ImageText>
                {props.info.attribution}
              </ImageText>
            </InfoColumn>
            <InfoColumn>
              <LeftArrow onClick={handleLeftClick}/>
            </InfoColumn>
            <InfoColumn>
                <TopLine>
                  {props.info.exhibitionName[slide]}
                </TopLine>
                <InfoText>
                <Description>
                  {props.info.description[slide]}
                </Description>
              </InfoText>
            </InfoColumn>
            <InfoColumn>
              <CloseBtn onClick={handleClick}>
              </CloseBtn>
              <RightArrow onClick={handleRightClick}/>
            </InfoColumn>
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
              <TopLine>
                {mcard()}
              </TopLine>
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
                  <a href={`${props.info.link}`}>{props.info.link}</a>
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
