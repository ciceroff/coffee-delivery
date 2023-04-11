import styled from 'styled-components'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
      padding-right: 0.5rem;
    }
  }
`

export const LocationDescription = styled.a`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['yellow-dark']};

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  :first-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${(props) => props.theme['purple-brand']};
  }
`
export const CartContainer = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
`
export const CartLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
`
