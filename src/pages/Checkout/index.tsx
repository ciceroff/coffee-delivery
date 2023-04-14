import {
  Bank,
  CreditCard,
  CurrencyCircleDollar,
  MapPin,
  Money,
} from 'phosphor-react'
import {
  InfoBox,
  BoxInfoText,
  Cart,
  CheckoutContainer,
  PaymentInfo,
  PaymentInfoBox,
  PaymentInfoTitle,
  PaymentMethodBox,
  PaymentMethods,
  PaymentMethod,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <PaymentInfo>
        <PaymentInfoTitle>Complete seu pedido</PaymentInfoTitle>
        <PaymentInfoBox>
          <InfoBox>
            <MapPin size={32} color="#C47F17" />
            <BoxInfoText>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </BoxInfoText>
          </InfoBox>
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
        <PaymentMethodBox>
          <InfoBox>
            <CurrencyCircleDollar size={32} color="#8047F8" />
            <BoxInfoText>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega, Escolha a forma que deseja pagar
              </span>
            </BoxInfoText>
          </InfoBox>

          <PaymentMethods>
            <PaymentMethod>
              <div>
                <CreditCard size={16} color="#8047F8" />
              </div>
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentMethod>{' '}
            <PaymentMethod>
              <div>
                {' '}
                <Bank size={16} color="#8047F8" />
              </div>
              <p>CARTÃO DE DÉBITO</p>
            </PaymentMethod>
            <PaymentMethod>
              <div>
                <Money size={16} color="#8047F8" />{' '}
              </div>
              <p>DINHEIRO</p>
            </PaymentMethod>
          </PaymentMethods>
        </PaymentMethodBox>
      </PaymentInfo>
      <Cart></Cart>
    </CheckoutContainer>
  )
}
