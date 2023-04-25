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
  ItensPriceTotal,
  SubmitButton,
  PageForm,
} from './styles'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Coffee } from './components/Coffee'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { NestedInput } from './components/NestedInput'
import { zodResolver } from '@hookform/resolvers/zod'

const addressValidationSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  complemento: zod.string(),
  cidade: zod.string(),
  bairro: zod.string(),
  numero: zod.string(),
  UF: zod.string(),
})

type OrderForm = zod.infer<typeof addressValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const orderForm = useForm<OrderForm>({
    resolver: zodResolver(addressValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      UF: '',
    },
  })

  const { coffees, addOrderData } = useContext(CoffeeContext)
  const { handleSubmit } = orderForm
  function handleMakeOrder(data: OrderForm) {
    console.log('asdasd', data)
    addOrderData(data)
    navigate('/order-confirmed')
  }

  return (
    <CheckoutContainer>
      {' '}
      <FormProvider {...orderForm}>
        <PageForm
          name="addressForm"
          action=""
          onSubmit={handleSubmit(handleMakeOrder)}
        >
          {' '}
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
              <NestedInput />
            </PaymentInfoBox>{' '}
            <PaymentMethodBox>
              <InfoBox>
                <CurrencyCircleDollar size={32} color="#8047F8" />
                <BoxInfoText>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega, Escolha a forma que deseja
                    pagar
                  </span>
                </BoxInfoText>
              </InfoBox>

              <PaymentMethods>
                <PaymentMethod type="button">
                  <div>
                    <CreditCard size={16} color="#8047F8" />
                  </div>
                  <p>CARTÃO DE CRÉDITO</p>
                </PaymentMethod>{' '}
                <PaymentMethod type="button">
                  <div>
                    <Bank size={16} color="#8047F8" />
                  </div>
                  <p>CARTÃO DE DÉBITO</p>
                </PaymentMethod>
                <PaymentMethod type="button">
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
                  return <Coffee {...coffee}></Coffee>
                })}
              </SelectedCoffees>
              <ItensPrice>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </ItensPrice>
              <ItensPrice>
                <p>Entrega</p>
                <p>R$ 29,70</p>
              </ItensPrice>
              <ItensPriceTotal>
                <b>Total</b>
                <b>R$ 29,70</b>
              </ItensPriceTotal>
              <SubmitButton type="submit" formTarget="addressForm">
                <p>CONFIRMAR PEDIDO</p>{' '}
              </SubmitButton>
            </CartInfo>
          </Cart>{' '}
        </PageForm>{' '}
      </FormProvider>
    </CheckoutContainer>
  )
}
