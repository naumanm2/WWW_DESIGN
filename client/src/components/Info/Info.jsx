import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Container } from '../../styles'

import {
  InfoSection,
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
        <Container>
        <InfoRow>
          <InfoColumn>
            <ImgWrapper>
            </ImgWrapper>
          <InfoColumn>
          </InfoColumn>
          <InfoText>
          </InfoText>
          </InfoColumn>
        </InfoRow>
        <InfoRow>
            <InfoColumn>
              <InfoRow>
                <TopLine>
                  nameofexhibition
                </TopLine>
                <InfoText>
                  {props.info.address}
                </InfoText>
              </InfoRow>
              <InfoRow>
                <TopLine>
                  Pääsymaksut
                </TopLine>
                <InfoText>
                  {props.info.fees}
                </InfoText>
                </InfoRow>
              <InfoRow>
                  museokortti
              </InfoRow>
            </InfoColumn>
            <InfoColumn>
              <TopLine>
                Aukioloajat
              </TopLine>
              <InfoText>
                ma 12-18
                ti 12-18
              </InfoText>
            </InfoColumn>
            <InfoColumn>
              <InfoRow>
                <TopLine>
                  AvainSanat
                </TopLine>
                <InfoText>
                  {props.info.keywords}
                </InfoText>
              </InfoRow>
              <InfoRow>
                placeholder
              </InfoRow>
              <InfoRow>
                {props.info.link}
              </InfoRow>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSection>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    info: state.info
  }
}


export default connect(
  mapStateToProps
)(Info)
