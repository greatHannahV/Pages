import { Outlet } from 'react-router'
import Button from '../Button'

function AppLayout() {
  return (
    <div className="layout">
      <h3>Hello</h3>
      <Outlet />
      <h1>User</h1>
      <Button />
    </div>
  )
}

export default AppLayout
