import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  width: 23rem;
`

export const CoffeeInfoBox = styled.div`
  display: flex;
  width: 23rem;
  height: 5rem;
`

export const CoffeeBoxInfoText = styled.div`
  padding-left: 1.25rem;
  display: flex;
  justify-content: space-between;
  width: 19rem;
`

export const ButtonCounter = styled.button`
  border: 0px;
  color: ${(props) => props.theme['purple-dark']};
  background: transparent;
`

export const RemoveButtonBlock = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  width: 5.6875rem;
  height: 2rem;
  border: 0;
  p {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CartButtons = styled.div`
  display: flex;
`
