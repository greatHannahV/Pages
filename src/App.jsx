import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from './pages/AppLayout'
import About from './pages/About'
import Address from './pages/Address'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'

import Menu from './pages/Menu'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default App
