import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Ul = styled.ul`
    z-index: 1;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    font-size: 31px;
    font-weight: bolder;
    background-color: #363636;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
    left: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.4s ease-in-out;

    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: fixed;
      height: 100vh;
      justify-content: center;
      align-items: center;
      text-align: center;
      overflow-y: hidden;

      &:body {
        overflow-y: hidden;
      }
    }

`;

export const MenuItem = styled.li`
    color: #fff;
    margin: 20px;
    &:hover {
      transform: translateY(3%);

    }
    transition: transform 0.1s ease-in-out

`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #ccc;

  }




`;
