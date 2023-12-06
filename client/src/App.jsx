import { Outlet } from 'react-router-dom'
import AppNavbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  )
}

export default App
