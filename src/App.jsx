import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout.jsx'
import AddProperty from '@/pages/AddProperty.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import Home from '@/pages/Home.jsx'
import Login from '@/pages/Login.jsx'
import Properties from '@/pages/Properties.jsx'
import PropertyDetails from '@/pages/PropertyDetails.jsx'
import Register from '@/pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'properties', element: <Properties /> },
      { path: 'properties/:id', element: <PropertyDetails /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'dashboard',
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'add-property', element: <AddProperty /> },
        ],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
