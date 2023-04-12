import styled from 'styled-components'

export const OrderConfirmedContainer = styled.main`
  margin-top: 5rem;
`

export const OrderConfirmedTitle = styled.p`
  font-weight: 800;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 32px;
  font-weight: bold;
`

export const OrderConfirmedSubtitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme['base-title']};
`

export const OrderConfirmedBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
`

export const OrderConfirmedDataBlock = styled.div`
  border: 1px solid transparent;
  width: 32.875rem;
  height: 16.875rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px 32px;

    border: 2px solid transparent;
    background: linear-gradient(
        90deg,
        ${(props) => props.theme['yellow-brand']},
        ${(props) => props.theme['purple-brand']}
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const DeliveryImage = styled.img``

export const OrderConfirmedData = styled.div`
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
`

export const OrderConfirmedText = styled.div`
  padding-left: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`
