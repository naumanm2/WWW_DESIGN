import styled from 'styled-components'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;

`;

export const TopMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    font-size: 31px;
    font-weight: bolder;
    background-color: ${({onTop}) => (onTop ? '#363636' : '#fff')};
    position: static;
    left: 0;
    height: 30px;
    padding-bottom: 30px;
    width: 100%;
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
  justify-content: space-between;
  background-color: ${({onTop}) => (onTop ? '#363636' : '#fff')};
  transition: all 0.2s linear;


  ${Container}
`;

export const NavBody = styled.ul`
list-style: none;
display: flex-row;
justify-content: center;
flex-flow: row nowrap;
font-size: 31px;
font-weight: bolder;
background-color: #fff;
position: static;
top: 0;
height: 40px;
width: 100%;
transition: transform 0.4s ease-in-out;

`;
