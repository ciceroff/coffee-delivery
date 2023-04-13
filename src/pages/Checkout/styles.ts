import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const PaymentInfo = styled.div`
  margin-top: 0.9375rem;
`

export const Cart = styled.div``

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

  form {
    padding-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column;
    justify-content: space-around;  */
    gap: 1rem;
    width: 35rem;
    height: 13.5rem;

    input {
      background: ${(props) => props.theme['base-input']};
      border: 1px solid #e6e5e5;
      border-radius: 4px;
      height: 42px;
    }
  }
`
export const AddressBoxInfo = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
`

export const AddressBoxInfoText = styled.div`
  padding-left: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`
