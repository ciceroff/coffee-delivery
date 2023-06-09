import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  margin-top: 2.5rem;
  color: ${(props) => props.theme['base-subtitle']};
  height: 56.25rem;
`
export const PageForm = styled.form`
  padding-left: 2.5rem;
  display: flex;

  gap: 1rem;
  width: 35rem;
  height: 13.5rem;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    height: 42px;
    margin-left: 2rem;
  }
`
export const PaymentInfo = styled.div`
  margin-top: 0.9375rem;
  width: 40rem;
`

export const PaymentInfoTitle = styled.p`
  font-family: 'Baloo 2';
  font-size: 18px;
  line-height: 23.4px;
`
export const PaymentInfoBox = styled.div`
  margin-top: 0.9375rem;
  background: ${(props) => props.theme['base-card']};
  width: 40rem;
  height: 23.35rem;
  border-radius: 6px;
`

export const InfoBox = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
`

export const BoxInfoText = styled.div`
  padding-left: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentMethodBox = styled.div`
  margin-top: 0.75rem;
  background: ${(props) => props.theme['base-card']};
  width: 40rem;
  height: 12.9375rem;
`

export const PaymentMethods = styled.div`
  width: 35rem;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.75rem;
`

export const PaymentMethod = styled.button`
  width: 12rem;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  border-radius: 4px;
  div {
    padding-left: 1rem;
  }
  p {
    font-size: 12px;
  }
`

export const Cart = styled.div`
  margin-left: 2rem;
`

export const CartTitle = styled.p`
  font-family: 'Baloo 2';
  font-size: 18px;
  line-height: 23.4px;
`

export const CartInfo = styled.div`
  margin-top: 0.9375rem;
  width: 28rem;
  height: 31.125rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const SelectedCoffees = styled.div`
  width: 23rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`

export const ItensPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  margin-top: 0.75rem;
  font-size: 14px;
`

export const ItensPriceTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  margin-top: 0.75rem;
  font-size: 20px;
`

export const CoffeeSpecification = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartCountButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  width: 4.5rem;
`

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  align-self: center;
  margin-left: 2.5rem;
  width: 23rem;
  height: 2.875rem;
  background: ${(props) => props.theme['yellow-brand']};
  color: white;
  border: 0;
  border-radius: 6px;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  }
`
