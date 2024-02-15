import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Menu from '../pages/Menu'
import AppLayout from '../pages/AppLayout'
import About from '../pages/About'
import Address from '../pages/Address'
import Contacts from '../pages/Contacts'
import Settings from '../pages/Settings'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/about" />} />
        <Route path="/about" element={<About />} />

        <Route element={<AppLayout />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/address" element={<Address />} />
          <Route path="/menu" element={<Menu />} />
        </Route>

        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
