
import React from 'react';
import { StyledBurger } from './burger.styles'

import { useSelector } from 'react-redux'


const Burger = ({
  open,
  handleClick
}) => {
  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>

    </>
  )
}

export default Burger
