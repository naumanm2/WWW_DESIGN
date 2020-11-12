import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import { nullInfo } from '../../reducers/infoReducer'

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
  CloseBtn
} from './Info.styles'

const Info = (props) => {
  console.log(props.info)

  const handleClick = (event) => {
    event.preventDefault()
    try {
      props.nullInfo()
    } catch (e) {
      console.log(e)
    }
  }



  if (!props.info || !props.show || props.show !== props.info.name) {
    return null
  }
  return (
    <div>
    <InfoSection>
      <InfoContainer>
        <InfoRow>
          <InfoColumn>
            <ImgWrapper>
              <Img src={`${props.info.picture}`} alt={`${props.info.name}`}></Img>
            </ImgWrapper>
          </InfoColumn>
          <InfoColumn>
            <InfoText>
              <Description>
                {props.info.description}
              </Description>
            </InfoText>
          </InfoColumn>
          <CloseBtn onClick={handleClick}>
          </CloseBtn>
        </InfoRow>
        <InfoRow>
          <InfoColumn>
            <TopLine>
              <Name>
                nameofexhibition
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
              <Clock>ma 12-18</Clock>
              <Clock>ti 12-18</Clock>
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
  </div>
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
