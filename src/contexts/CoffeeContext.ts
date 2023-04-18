import { createContext } from 'react'
interface Coffee {
  title: string
  price: string
  amount: number
}

interface CoffeeContextType {
  coffees: Coffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider() {}
