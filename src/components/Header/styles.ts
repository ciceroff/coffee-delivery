import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
      padding-right: 0.5rem;
    }

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['yellow-dark']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      :first-child {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: ${(props) => props.theme['purple-brand']};
      }
    }

    #navLink {
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;
    }
  }
`
