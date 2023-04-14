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
  CartTitle,
  CartInfo,
  SelectedCoffees,
  ItensPrice,
  Coffee,
  CoffeeInfoBox,
  CoffeeBoxInfoText,
  CoffeeSpecification,
} from './styles'
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

interface CoffeeInterface {
  readonly price: string
  readonly title: string
  readonly img: string
}
const coffees: readonly CoffeeInterface[] = [
  {
    price: 'R$ 9.90',
    title: 'Expresso Tradicional',
    img: expresso,
  },
  {
    price: 'R$ 9.90',
    title: 'Expresso Americano',
    img: expressoAmericano,
  },
] as const

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
      <Cart>
        <CartTitle>Cafés selecionados</CartTitle>
        <CartInfo>
          <SelectedCoffees>
            {coffees.map((coffee) => {
              return (
                <Coffee key={coffee.title}>
                  <CoffeeInfoBox>
                    <img src={coffee.img} height={64} width={64} alt="" />
                    <CoffeeBoxInfoText>
                      <CoffeeSpecification>
                        <p>{coffee.title}</p>
                        <b>{coffee.price}</b>
                      </CoffeeSpecification>
                    </CoffeeBoxInfoText>
                  </CoffeeInfoBox>
                </Coffee>
              )
            })}
          </SelectedCoffees>
          <ItensPrice>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ItensPrice>
          <ItensPrice>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ItensPrice>
          <ItensPrice>
            <b>Total de itens</b>
            <b>R$ 29,70</b>
          </ItensPrice>
        </CartInfo>
      </Cart>
    </CheckoutContainer>
  )
}
