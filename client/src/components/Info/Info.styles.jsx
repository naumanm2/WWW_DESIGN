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
  background-color: #fff;
  height: 300px;
  flex-flow: column nowrap;
  overflow: hidden;
  z-index: 100;
  ${Container}
`;

export const InfoSection = styled.div`
  color: #fff;
  position: relative;
  left: -230px;
  top: -360px;
  background-color: #fff;
  transition: all 0.2s linear;
  z-index: 100;

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
overflow-y: scroll;

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
  color: ${({ light}) => (light ? '#fff' : '#363636')};
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 1.4px;

`

export const InfoText = styled.p`
  width: 100%;
  max-width: 440px;
  font-size: 12px;
  color: ${({ light}) => (light ? '#fff' : '#363636')};
`

export const ImgWrapper = styled.div`
  width: 30%;
  background-color: #363636;
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
  width: 50px;
  height: 50px;
  top: -10px;
  cursor: pointer;
  color: #363636;
`

export const LeftArrow = styled(LeftArrowAlt)`
  color: #363636;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`
export const RightArrow = styled(RightArrowAlt)`
  color: #363636;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`

export const Description = styled.p`

`
export const Name = styled.p`

`
export const Address = styled.p`

`
export const Museocard = styled.p`
`
export const OpeningHours = styled.p`
`
export const Clock = styled.p`
`
export const Site = styled.p`
`
