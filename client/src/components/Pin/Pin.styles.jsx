import styled from 'styled-components'
import { Container } from '../../styles'

export const PinContainer = styled(Container)`
  position: absolute;
  width: 40px;
  height: 40px;
  left: -20px;
  top: -20px;
  border: 5px solid #f44336;
  borderRadius: 40px;
  background-color: white;
  text-align: center;
  color: #3f51b5;
  fontSize: 16;
  fontWeight: bold;
  padding: 4;
  cursor: pointer;
${Container}
`;


export const PinStyle = styled.div`

`;

export const PinStyleHover = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: -20px;
  top: -20px;
  borderRadius: 80px;
  text-align: center;
  padding: 4;
  cursor: pointer;
  border: 5px solid #3f51b5;
  color: #f44336;
`;
