import styled from 'styled-components'
import { Container } from '../../styles'

export const InfoContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;


${Container}
`;

export const InfoSection = styled.div`
  display: flex;
  width: 0.1vh;
  height: 0.1vh;
  background-color: #363636;
  z-index: 1;
`
