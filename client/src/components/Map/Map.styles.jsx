import styled from 'styled-components'
import { Container } from '../../styles'

export const MapContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;


`;

export const ClusterMarker = styled.div`
  color: #fff;
  background: #363636;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
