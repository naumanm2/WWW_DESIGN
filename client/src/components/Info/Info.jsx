import React, {useState} from 'react'

import {connect} from 'react-redux'

import {nullInfo} from '../../reducers/infoReducer'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

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
  CloseBtn,
  LeftArrow,
  RightArrow
} from './Info.styles'

/*--
Information window of a pin. Contains information about the clicked pin.
Gets correct information from redux store containing information about the pin.

--*/

const Info = (props) => {

  // store state for different exhibitons in a single window
  const [slide, setSlide] = useState(0)

  //helper function to close the infowindow
  const handleClick = (event) => {
    event.preventDefault()
    try {
      props.nullInfo()
    } catch (e) {
      console.log(e)
    }
  }

  //helper function to switch between exhibitions
  const handleLeftClick = (event) => {
    event.preventDefault()
    setSlide(Math.abs((slide - 1) % props.info.description.length))
  }
  const handleRightClick = (event) => {
    event.preventDefault()
    setSlide((slide + 1) % props.info.description.length)
  }


  //conditional rendering dependent on whether museum has access via museumcard
  const mcard = () => {
    return props.info.museocard
      ? 'museokortilla ilmaiseksi!'
      : ''
  }

  //return nothing if user has not clicked on a pin
  if (!props.info || !props.show || props.show !== props.info.museumName) {
    return null
  }

  return (
    <ClickAwayListener onClickAway={handleClick}>
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
              <LeftArrow onClick={handleLeftClick} />
            </InfoColumn>
            <InfoColumn>
              <TopLine>
                {props.info.exhibitionName[slide]}
              </TopLine>
              <InfoText>
                {props.info.description[slide]}
              </InfoText>
              <TopLine>
                {props.info.exhibitionDuration[slide]}
              </TopLine>
            </InfoColumn>
            <InfoColumn>
              <CloseBtn onClick={handleClick} />
              <RightArrow onClick={handleRightClick} />
            </InfoColumn>
          </InfoRow>
          <InfoRow>
            <InfoColumn>
              <TopLine>
                {props.info.museumName}
              </TopLine>
              <InfoText>
                {props.info.address}
              </InfoText>
              <TopLine>
                Pääsymaksut
              </TopLine>
              <InfoText>
                {props.info.fees.map(fee => (`${fee}/ `))}
              </InfoText>
              <TopLine>
                {mcard()}
              </TopLine>
            </InfoColumn>
            <InfoColumn>
              <TopLine>
                Aukioloajat
              </TopLine>
              {props.info.openingHours.map(x => (
                <InfoText>{x}</InfoText>
              ))}
            </InfoColumn>
            <InfoColumn>
              <TopLine>
                Avainsanat
              </TopLine>
              {props.info.keywords.map(w => (
                <InfoText>{w}</InfoText>
              ))}
              <InfoText>
                <a href={`${props.info.link}`}>{props.info.link}</a>
              </InfoText>
            </InfoColumn>
          </InfoRow>
        </InfoContainer>
      </InfoSection>
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
