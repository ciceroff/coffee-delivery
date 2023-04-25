import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeSpecification, CartCountButtons } from '../../styles'
import {
  CoffeeContainer,
  CoffeeInfoBox,
  CoffeeBoxInfoText,
  CartButtons,
  ButtonCounter,
  RemoveButtonBlock,
} from './styles'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CoffeeProps {
  title: string
  img: string
  price: string
  amount: number
  id: string
}

export function Coffee(coffee: CoffeeProps) {
  const { deleteSelectedCoffee } = useContext(CoffeeContext)
  const [amount, setAmount] = useState(coffee.amount)
  function handleDeleteCoffee() {
    deleteSelectedCoffee(coffee.id)
  }

  function handleSubtractCoffeeAmount() {
    const newAmount = amount - 1 < 0 ? 0 : amount - 1

    setAmount(newAmount)
  }

  function handleSumCoffeeAmount() {
    const newAmount = amount + 1
    setAmount(newAmount)
  }

  return (
    <CoffeeContainer key={coffee.title}>
      <CoffeeInfoBox>
        <img src={coffee.img} height={64} width={64} alt="" />
        <CoffeeBoxInfoText>
          <CoffeeSpecification>
            <p>{coffee.title}</p>
            <CartButtons>
              <CartCountButtons>
                <ButtonCounter
                  type="button"
                  onClick={handleSubtractCoffeeAmount}
                >
                  <Minus />
                </ButtonCounter>
                <p>{amount}</p>
                <ButtonCounter type="button" onClick={handleSumCoffeeAmount}>
                  <Plus />
                </ButtonCounter>
              </CartCountButtons>
              <RemoveButtonBlock onClick={handleDeleteCoffee}>
                <Trash color="#8047F8" />
                <p>REMOVER</p>
              </RemoveButtonBlock>
            </CartButtons>
          </CoffeeSpecification>
          <b>{coffee.price}</b>
        </CoffeeBoxInfoText>
      </CoffeeInfoBox>
    </CoffeeContainer>
  )
}
