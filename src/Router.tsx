import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { OrderConfirmed } from './pages/OrderConfirmed'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order-confirmed" element={<OrderConfirmed />}></Route>
        <Route path="/order" element={<Checkout />}></Route>
      </Route>
    </Routes>
  )
}
