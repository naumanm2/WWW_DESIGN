import styled from 'styled-components'
import { Container } from '../../styles'

export const InfoContainer = styled(Container)`
  display: flex;
  position: absolute;
  width: auto;
  justify-content: space-between;
  background-color: #fff;
  height: 300px;
  flex-flow: column nowrap;
  ${Container}
`;

export const InfoSection = styled.div`
  color: #fff;
  background-color: #fff;
  transition: all 0.2s linear;
`;

export const InfoRow = styled.div`
display: flex;
flex-flow: row nowrap;
width: 100%;
margin: 0 5px 5px 5px;
justify-content: space-between;
height: 50%;

`
export const InfoColumn = styled.div`
margin-bottom: 15px;
flex-flow: column nowrap;
padding-right: 15px;
padding-left: 15px;

@media screen and (max-width: 991px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
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
  width: 50%;
  height: 50%;
  background-color: #363636;
  max-width: 555px;
  display: flex;
  justify-content: flex-start;

`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

`
