import { CoffeeContainer } from './styles'
import {
  arabe,
  cafeComleite,
  capuccino,
  chocolateQuente,
  cubano,
  expresso,
  expressoAmericano,
  expressoCremoso,
  expressoGelado,
  havaiano,
  irlandes,
  latte,
  macchiato,
  mocaccino,
} from '../../assets'

const coffees = {
  arabe,
  cafeComleite,
  capuccino,
  chocolateQuente,
  cubano,
  expresso,
  expressoAmericano,
  expressoCremoso,
  expressoGelado,
  havaiano,
  irlandes,
  latte,
  macchiato,
  mocaccino,
} as const

interface CoffeeProps {
  type:
    | 'arabe'
    | 'cafeComleite'
    | 'capuccino'
    | 'chocolateQuente'
    | 'cubano'
    | 'expresso'
    | 'expressoAmericano'
    | 'expressoCremoso'
    | 'expressoGelado'
    | 'havaiano'
    | 'irlandes'
    | 'latte'
    | 'macchiato'
    | 'mocaccino'
}

export function Coffee({ type }: CoffeeProps) {
  return (
    <CoffeeContainer>
      <img src={coffees[`${type}`]} alt="" />
    </CoffeeContainer>
  )
}
