import { ReactNode, createContext, useState } from 'react'

interface Coffee {
  title: string
  price: string
  amount: number
  img: string
  id: string
}

interface Order {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  UF: string
}

interface CoffeeContextType {
  coffees: Coffee[]
  deleteSelectedCoffee: (coffeeKey: string) => void
  addSelectedCoffee: (newCoffee: Coffee) => void
  addOrderData: (newOrder: Order) => void
  order?: Order
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [order, setOrder] = useState<Order>({} as Order)

  function addSelectedCoffee(newCoffee: Coffee) {
    setCoffees([...coffees, newCoffee])
  }

  function deleteSelectedCoffee(coffeeKey: string) {
    const newCoffees = coffees.filter((coffee) => {
      return coffee.id != coffeeKey
    })

    setCoffees(newCoffees)
  }

  function addOrderData(newOrder: Order) {
    setOrder(newOrder)
    console.log(order)
  }

  return (
    <CoffeeContext.Provider
      value={{
        order,
        coffees,
        deleteSelectedCoffee,
        addSelectedCoffee,
        addOrderData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
