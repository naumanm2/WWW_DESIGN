import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import {
  InfoSection,
  InfoContainer,
  InfoRow,
  InfoColumn,
  ImgWrapper,
  InfoText,
  TopLine
} from './Info.styles'

const Info = (props) => {
  console.log(props.info)
  if (!props.info || !props.show || props.show !== props.info.name) {
    return null
  }
  return (
    <div>
    <InfoSection>
      <InfoContainer>
        <InfoRow>
          <InfoColumn>
            <ImgWrapper></ImgWrapper>
          </InfoColumn>
          <InfoColumn>
            <InfoText>
              {props.info.description}
            </InfoText>
          </InfoColumn>
        </InfoRow>
        <InfoRow>
          <InfoColumn>
            <TopLine>
              nameofexhibition
            </TopLine>
            <InfoText>
              {props.info.address}
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
            museokortti
            </InfoText>
          </InfoColumn>
          <InfoColumn>
            <TopLine>
              Aukioloajat
            </TopLine>
            <InfoText>
              <p>ma 12-18</p>
              <p>ti 12-18</p>
            </InfoText>
          </InfoColumn>
          <InfoColumn>
            <TopLine>
              AvainSanat
            </TopLine>
            <InfoText>
              {props.info.keywords}
            </InfoText>
            <InfoText>
            <a href={`${props.info.link}`}>{props.info.link}</a>
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

export default connect(mapStateToProps)(Info)
