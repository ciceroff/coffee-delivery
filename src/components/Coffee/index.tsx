import { CoffeeCartDescription, CoffeeContainer, CoffeeImage } from './styles'
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
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

const coffees = {
  arabe: {
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    title: 'Árabe',
    img: arabe,
  },
  cafeComleite: {
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: 'Café com Leite',
    img: cafeComleite,
  },
  capuccino: {
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: 'Capuccino',
    img: capuccino,
  },
  chocolateQuente: {
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    title: 'Chocolate Quente',
    img: chocolateQuente,
  },
  cubano: {
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    title: 'Cubano',
    img: cubano,
  },
  expresso: {
    description: 'O tradicional café feito com água quente e grãos moídos',
    title: 'Expresso Tradicional',
    img: expresso,
  },
  expressoAmericano: {
    description: 'Expresso diluído, menos intenso que o tradicional',
    title: 'Expresso Americano',
    img: expressoAmericano,
  },
  expressoCremoso: {
    description: 'Café expresso tradicional com espuma cremosa',
    title: 'Expresso Cremoso',
    img: expressoCremoso,
  },
  expressoGelado: {
    description: 'Bebida preparada com café expresso e cubos de gelo',
    title: 'Expresso Gelado',
    img: expressoGelado,
  },
  havaiano: {
    description: 'Bebida adocicada preparada com café e leite de coco',
    title: 'Havaiano',
    img: havaiano,
  },
  irlandes: {
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    title: 'Irlandês',
    img: irlandes,
  },
  latte: {
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: 'Latte',
    img: latte,
  },
  macchiato: {
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    title: 'Macchiato',
    img: macchiato,
  },
  mocaccino: {
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    title: 'Mocaccino',
    img: mocaccino,
  },
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
      <CoffeeImage>
        <img src={coffees[`${type}`].img} alt="" />
      </CoffeeImage>
      <span>{coffees[`${type}`].title}</span>
      <p id="description">{coffees[`${type}`].description}</p>

      <CoffeeCartDescription id="cardPrice">
        <p>R$ 9.90</p>
        <Minus />
        1
        <Plus />
        <ShoppingCart size={24} weight="fill" />
      </CoffeeCartDescription>
    </CoffeeContainer>
  )
}
