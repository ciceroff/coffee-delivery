import { useContext, useState } from 'react'
import {
  CoffeeCart,
  CoffeeCartDescription,
  CoffeeContainer,
  CoffeeCounterBlock,
  CoffeeCounterButton,
  CoffeeDescription,
  CoffeeImage,
  CoffeeSubtitle,
  CoffeeSubtitleBlock,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { v4 as uuidv4 } from 'uuid'

interface CoffeeProps {
  img: string
  title: string
  description: string
  subtitle: readonly string[]
}

export function Coffee({ img, title, description, subtitle }: CoffeeProps) {
  const { addSelectedCoffee } = useContext(CoffeeContext)
  const [coffeeAmount, setCoffeeAmount] = useState(0)

  function handleAddNewCoffee() {
    addSelectedCoffee({
      img,
      price: '9.90',
      title,
      amount: coffeeAmount,
      id: uuidv4(),
    })
  }

  function handleAddCoffeeAmount() {
    const newCoffeeAmount = coffeeAmount + 1
    setCoffeeAmount(newCoffeeAmount)
  }

  function handleRemoveCoffeeAmount() {
    const newCoffeeAmount = coffeeAmount - 1 < 0 ? 0 : coffeeAmount - 1

    setCoffeeAmount(newCoffeeAmount)
  }

  return (
    <CoffeeContainer>
      <CoffeeImage>
        <img src={img} alt="" />
      </CoffeeImage>
      <CoffeeSubtitleBlock>
        {subtitle.map((element) => {
          return <CoffeeSubtitle key={element}>{element}</CoffeeSubtitle>
        })}
      </CoffeeSubtitleBlock>
      <span>{title}</span>
      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeCartDescription>
        <p>R$ 9.90</p>
        <CoffeeCounterBlock>
          <CoffeeCounterButton onClick={handleRemoveCoffeeAmount}>
            <Minus />
          </CoffeeCounterButton>
          <p>{coffeeAmount}</p>
          <CoffeeCounterButton onClick={handleAddCoffeeAmount}>
            <Plus />
          </CoffeeCounterButton>
        </CoffeeCounterBlock>

        <CoffeeCart onClick={handleAddNewCoffee}>
          <ShoppingCart size={24} weight="fill" />
        </CoffeeCart>
      </CoffeeCartDescription>
    </CoffeeContainer>
  )
}
