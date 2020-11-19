import styled from 'styled-components'
import { Container } from '../../styles'

import { Close } from '@styled-icons/evil/Close'

import {LeftArrowAlt} from '@styled-icons/boxicons-regular/LeftArrowAlt'
import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt'

export const InfoContainer = styled(Container)`
  display: flex;
  position: absolute;
  width: auto;
  cursor: default;
  justify-content: space-between;
  background-color: #5c5c5c;
  color: #fff;
  height: 300px;
  flex-flow: column nowrap;
  overflow: hidden;
  z-index: 100;
  border-radius: 25px;
  opacity: 0.95;
  ${Container}
`;

export const InfoSection = styled.div`
  position: relative;
  left: -230px;
  top: -360px;
  transition: all 0.2s linear;
  z-index: 100;
  width: 600px;

  @media screen and (max-width: 991px) {
    width: 100%;
    flex-basis: 100%;
    display: flex;
  }

`;

export const InfoRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin: 0 5px 5px 5px;
  justify-content: space-between;
  height: 50%;

  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
  }

`
export const InfoColumn = styled.div`
margin-bottom: 15px;
margin-top: 10px;
flex-flow: column nowrap;
padding-right: 15px;
padding-left: 15px;

@media screen and (max-width: 991px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
}
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 991px)
  padding-bottom: 65px;

  `

export const TopLine = styled.div`
  font-size: 12px;
  font-weight: bold;

`

export const InfoText = styled.p`
  width: 100%;
  max-width: 440px;
  font-size: 12px;
`
export const ImageText = styled.p`
  width: 100%;
  max-width: 120px;
  font-size: 7px;
`

export const ImgWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;

`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 100px;

`

export const CloseBtn = styled(Close)`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #b600ff;
  }
`

export const LeftArrow = styled(LeftArrowAlt)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  top: 120px;
  &:hover {
    color: #b600ff;
  }
`
export const RightArrow = styled(RightArrowAlt)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  top: 100px;
  &:hover {
    color: #b600ff;
  }
`
