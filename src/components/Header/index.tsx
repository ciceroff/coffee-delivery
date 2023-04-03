import coffeeLogo from '../../assets/coffeeLogo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <nav>
        <div>
          <a>
            <MapPin size={24} weight="fill" />
          </a>
          <p>Brasília, DF</p>
        </div>

        <NavLink id="navLink" to="/card" title="Carrinho">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
