import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1.5rem;

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

    NavLink {
      :focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-brand']};
      }
    }
  }
`
