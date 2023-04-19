import { ReactNode, createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Coffee {
  title: string
  price: string
  amount: number
  img: string
  key: string
}

interface CoffeeContextType {
  coffees: Coffee[]
  deleteSelectedCoffee: (coffeeKey: string) => void
  addSelectedCoffee: (newCoffee: Coffee) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  function addSelectedCoffee(newCoffee: Coffee) {
    setCoffees([...coffees, newCoffee])
  }

  function deleteSelectedCoffee(coffeeKey: string) {
    const newCoffees = coffees.filter((coffee) => {
      return coffee.key != coffeeKey
    })

    setCoffees(newCoffees)
  }

  return (
    <CoffeeContext.Provider
      value={{ coffees, deleteSelectedCoffee, addSelectedCoffee }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
