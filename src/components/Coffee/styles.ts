import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  margin-top: 3.375rem;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;

  #image {
    top: -20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  #cardPrice {
    p {
      font-family: 'Baloo 2';
      font-size: 1.2rem;
      font-weight: 900;
      padding-left: 1.25rem;
      padding-top: 1.25rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  span {
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    padding-top: 9.3125rem;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  #description {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.5rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`
