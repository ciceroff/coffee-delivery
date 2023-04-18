import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { ReactNode, createContext, useState } from 'react'
interface Coffee {
  title: string
  price: string
  amount: number
}

interface CoffeeContextType {
  coffees: Coffee[]
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContext.Provider value={{ coffees }}>
          <Router />
        </CoffeeContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
