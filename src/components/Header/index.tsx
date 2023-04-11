import coffeeLogo from '../../assets/coffeeLogo.svg'
import { MapPin } from 'phosphor-react'
import {
  CartContainer,
  CartLink,
  HeaderContainer,
  LocationDescription,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <nav>
        <div>
          <LocationDescription>
            <MapPin size={24} weight="fill" />
          </LocationDescription>
          <p>Brasília, DF</p>
        </div>

        <CartLink id="navLink" to="/card" title="Carrinho">
          <CartContainer size={24} weight="fill" />
        </CartLink>
      </nav>
    </HeaderContainer>
  )
}
