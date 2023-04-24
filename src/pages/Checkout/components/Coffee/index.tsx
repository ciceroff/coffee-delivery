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
import { useContext } from 'react'
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

  function handleDeleteCoffee() {
    deleteSelectedCoffee(coffee.id)
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
                <ButtonCounter>
                  <Minus />
                </ButtonCounter>
                <p>{coffee.amount}</p>
                <ButtonCounter>
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
