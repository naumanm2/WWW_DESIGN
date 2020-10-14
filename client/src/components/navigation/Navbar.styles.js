import styled from 'styled-components'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;


`;

export const TopMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-size: 31px;
    font-weight: bolder;
    background-color: #363636;
    left: 0;
    width: 70%;
    margin-top: 20px;
    height: 80px;
    transition: all 0.2s linear;

    @media screen and (max-width: 991px) {
      display: none;
    }
    `


export const TopMenuItem = styled.li`
    color: #fff;
    margin: 20px;
    &:hover {
      transform: translateY(3%);

    }
    transition: transform 0.2s ease-in-out;

`;

export const TopMenuLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #ccc;

    }
`;



export const NavContainer = styled(Container)`
  display: flex;
  justify-content: center;
  transition: all 0.2s linear;

  ${Container}
`;
