import styled from 'styled-components'

export const HomeContainer = styled.main`
  main {
    margin-top: 5.875rem;

    display: flex;
    align-items: top;
    justify-content: space-between;

    div {
      p {
        font-family: 'Baloo 2';
        font-style: normal;
        font-size: 48px;
        font-weight: bold;
        color: ${(props) => props.theme['base-title']};
      }

      span {
        font-size: 20px;
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  h1 {
    padding-top: 2rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Coffees = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 70rem;
`
