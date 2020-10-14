import styled from 'styled-components';

export const StyledBurger = styled.div`
  @media screen and (max-width: 991px) {
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  cursor: pointer;
  display: flex;
  z-index: 20;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.04rem;
    background-color: #ccc;

    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`;
