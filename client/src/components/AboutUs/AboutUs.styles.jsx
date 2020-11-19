import styled from 'styled-components'
import { Container } from '../../styles'

export const AboutContainer = styled(Container)`
  display: flex;
  position: absolute;
  width: 100%;
  cursor: default;
  justify-content: space-between;
  background-color: #363636;
  text-align: center;
  height: 100vh;
  flex-flow: column nowrap;

  ${Container}
`;

export const AboutSection = styled.div`
  position: relative;
  top: 200px;
  transition: all 0.2s linear;
  font-size: 18px;

  @media screen and (max-width: 991px) {
    width: 100%;
    font-size: 9px;
  }

`;

export const TopLine = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;

`

export const InfoText = styled.p`
  width: 100%;
  font-size: 12px;
`
