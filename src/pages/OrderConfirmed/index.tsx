import { CurrencyCircleDollar, MapPin, Timer } from 'phosphor-react'
import { deliveryPhoto } from '../../assets'
import {
  DeliveryImage,
  OrderConfirmedBody,
  OrderConfirmedContainer,
  OrderConfirmedData,
  OrderConfirmedDataBlock,
  OrderConfirmedSubtitle,
  OrderConfirmedText,
  OrderConfirmedTitle,
} from './styles'

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <OrderConfirmedTitle>Uhu! Pedido confirmado</OrderConfirmedTitle>
      <OrderConfirmedSubtitle>
        Agora é só aguardar que logo o café chegará até você
      </OrderConfirmedSubtitle>
      <OrderConfirmedBody>
        <OrderConfirmedDataBlock>
          <OrderConfirmedData>
            <MapPin size={32} color="#8047F8" weight="fill" />
            <OrderConfirmedText>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </OrderConfirmedText>
          </OrderConfirmedData>
          <OrderConfirmedData>
            <Timer size={32} color="#DBAC2C" weight="fill" />
            <OrderConfirmedText>
              <p>Previsão de entrega</p>
              <b>20 min - 30 min</b>
            </OrderConfirmedText>
          </OrderConfirmedData>
          <OrderConfirmedData>
            <CurrencyCircleDollar size={32} color="#C47F17" weight="fill" />
            <OrderConfirmedText>
              <p>Pagamento na entrega</p>
              <b>Cartão de Crédito</b>
            </OrderConfirmedText>
          </OrderConfirmedData>
        </OrderConfirmedDataBlock>
        <DeliveryImage src={deliveryPhoto} alt=""></DeliveryImage>
      </OrderConfirmedBody>
    </OrderConfirmedContainer>
  )
}
