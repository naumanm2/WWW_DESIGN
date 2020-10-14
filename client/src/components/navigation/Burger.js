
import React from 'react';
import { StyledBurger } from './burger.styles'

import { useSelector } from 'react-redux'


const Burger = ({
  open,
  handleClick
}) => {

  const onTop = useSelector(state => state.location)
  return (
    <>
      <StyledBurger open={open} onClick={handleClick} onTop={onTop}>
        <div />
        <div />
        <div />
      </StyledBurger>

    </>
  )
}

export default Burger
