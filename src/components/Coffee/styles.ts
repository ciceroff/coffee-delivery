import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 3.375rem;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;
  span {
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    padding-top: 9.3125rem;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeImage = styled.div`
  top: -20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`

export const CoffeeCartDescription = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  justify-content: space-around;
  padding-bottom: 1.25rem;
  p {
    font-family: 'Baloo 2';
    font-size: 1.2rem;
    font-weight: 900;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeeDescription = styled.p`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const CoffeeCounterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
`

export const CoffeeCounterButton = styled.button`
  border: 0px;
  color: ${(props) => props.theme['purple-dark']};
  background: transparent;
`
export const CoffeeCart = styled.button`
  border: 0;
  color: white;
  background: ${(props) => props.theme['purple-dark']};
  gap: 0.5rem;

  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
`
