import { MapPin } from 'phosphor-react'
import {
  AddressBoxInfo,
  AddressBoxInfoText,
  Cart,
  CheckoutContainer,
  PaymentInfo,
  PaymentInfoBox,
  PaymentInfoTitle,
  PaymentMethodBox,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <PaymentInfo>
        <PaymentInfoTitle>Complete seu pedido</PaymentInfoTitle>
        <PaymentInfoBox>
          <AddressBoxInfo>
            <MapPin size={32} color="#C47F17" />
            <AddressBoxInfoText>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </AddressBoxInfoText>
          </AddressBoxInfo>
          <form action="">
            <input type="text" name="cep" placeholder="CEP" size={15} />{' '}
            <input type="text" name="rua" placeholder="Rua" size={55} />
            <input type="text" name="numero" placeholder="Número" size={15} />
            <input
              type="text"
              name="Complemento"
              placeholder="Complemento"
              size={35}
            />
            <input type="text" name="bairro" placeholder="Bairro" size={15} />
            <input type="text" name="cidade" placeholder="Cidade" size={25} />
            <input type="text" name="UF" placeholder="UF" size={5} />
          </form>{' '}
        </PaymentInfoBox>{' '}
        <PaymentMethodBox>Ola</PaymentMethodBox>
      </PaymentInfo>
      <Cart></Cart>
    </CheckoutContainer>
  )
}
