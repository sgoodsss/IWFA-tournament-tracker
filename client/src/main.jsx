import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Form from './pages/Form'
import Signup from './pages/SignUp'
import User from './pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/form',
        element: <Form />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/user',
        element: <User />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
