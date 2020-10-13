import styled from 'styled-components'

export const K_SIZE = 40;

export const InfoStyle = styled.div`
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  left: 
  position: 'absolute';
  width: K_SIZE;
  height: K_SIZE;
  left: -K_SIZE / 2;
  top: -K_SIZE / 2;

  border: '5px solid #f44336';
  borderRadius: K_SIZE;
  backgroundColor: 'white';
  textAlign: 'center';
  color: '#3f51b5';
  fontSize: 16;
  fontWeight: 'bold';
  padding: 4;
  cursor: 'pointer;
};
`

export const InfoStyleHover = styled.div`
  position: 'absolute';
  width: K_SIZE;
  height: K_SIZE;
  left: -K_SIZE / 2;
  top: -K_SIZE / 2;
  borderRadius: K_SIZE;
  backgroundColor: 'white';
  textAlign: 'center';
  fontSize: 16;
  fontWeight: 'bold';
  padding: 4;
  cursor: 'pointer;
  border: '5px solid #3f51b5';
  color: '#f44336;
};
`