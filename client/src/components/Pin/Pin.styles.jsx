import styled from 'styled-components'
import { Container } from '../../styles'

import { Location } from '@styled-icons/ionicons-sharp/Location'

const size = '40px';
const hsize = '20px';

export const PinContainer = styled(Container)`
  position: relative;
  width: ${size};
  height: ${size};
  left: -${hsize};
  top: -${hsize};
  cursor: pointer;
  padding: 0;
  color: #fff;
  ${Container}
`;


export const PinStyle = styled.div`
  color: #363636;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  text-align: center;
  height: 40px;

`;

export const PinStyleHover = styled.div`
  position: absolute;
  height: ${({onTop}) => onTop ? '40px' : '0px'};
  top: ${({onTop}) => onTop ? '-2em' : '0px'};
  overflow: ${({onTop}) => onTop ? '' : 'hidden'};
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s linear;

`;

export const PinObject = styled(Location)`
  position: absolute;
  width: ${({onTop}) => onTop ? '40px' : '30px'};
  height: ${({onTop}) => onTop ? '40px' : '30px'};
  color: ${({onTop}) => onTop ? '#fff' : '#363636'};
  left: ${({onTop}) => onTop ? '-5px' : '0px'};
  margin: 0;

  transition: all 0.3s linear;
`;

export const GalleryContainer = styled.div`

`
