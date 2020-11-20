import styled from 'styled-components'
import { Container } from '../../styles'

export const AboutContainer = styled(Container)`
  display: flex;
  position: absolute;
  width: 100%;
  cursor: default;
  justify-content: space-between;
  background-color: #363636;
  color: #fff;
  text-align: center;
  flex-flow: column nowrap;
  height: 100vh;
  overflow-y: scroll;

  ${Container}
`;

export const AboutSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  top: 200px;
  width: 100%;
  transition: all 0.2s linear;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 991px) {
    width: 100%;
    font-size: 9px;
  }

`;

export const TopLine = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;

`

export const InfoText = styled.p`
  width: 50%;
  font-size: 14px;
  paddding-top: 20px;
  padding-bottom: 20px;
`
