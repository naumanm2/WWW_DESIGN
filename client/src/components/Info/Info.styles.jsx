import styled from 'styled-components'
import { Container } from '../../styles'

export const InfoContainer = styled(Container)`
  display: flex;
  width: 400px;
  justify-content: center;
  background-color: #fff;
  ${Container}
`;

export const InfoSection = styled.div`
  color: #fff;
  color: #fff;
  transition: all 0.2s linear;
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
height: auto;
`
export const InfoColumn = styled.div`
margin-bottom: 15px;
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
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

`

export const InfoText = styled.p`
max-width: 440px;
font-size: 12px;
color: ${({ light}) => (light ? '#fff' : '#363636')};
`

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};

`
export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;

`
