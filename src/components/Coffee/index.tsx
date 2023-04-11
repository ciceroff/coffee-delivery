import {
  CoffeeCart,
  CoffeeCartDescription,
  CoffeeContainer,
  CoffeeCounterBlock,
  CoffeeCounterButton,
  CoffeeDescription,
  CoffeeImage,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface CoffeeProps {
  img: string
  title: string
  description: string
}

export function Coffee({ img, title, description }: CoffeeProps) {
  return (
    <CoffeeContainer>
      <CoffeeImage>
        <img src={img} alt="" />
      </CoffeeImage>
      <span>{title}</span>
      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeCartDescription>
        <p>R$ 9.90</p>
        <CoffeeCounterBlock>
          <CoffeeCounterButton>
            <Minus />
          </CoffeeCounterButton>
          <p>1</p>
          <CoffeeCounterButton>
            <Plus />
          </CoffeeCounterButton>
        </CoffeeCounterBlock>

        <CoffeeCart>
          <ShoppingCart size={24} weight="fill" />
        </CoffeeCart>
      </CoffeeCartDescription>
    </CoffeeContainer>
  )
}
