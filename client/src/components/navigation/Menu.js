import React from 'react';
import { Ul, MenuLink, MenuItem } from './Menu.styles'


const Menu = ({
   open,
   handleClick
}) => {
  return (

    <Ul open={open}>
      <MenuItem>
        <MenuLink to='/' onClick={handleClick}>Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/information' onClick={handleClick}>Information</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/admin' onClick={handleClick}>admin?</MenuLink>
      </MenuItem>
    </Ul>
  )
}

export default Menu
