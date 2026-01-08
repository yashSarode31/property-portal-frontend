import { Outlet } from 'react-router-dom'

import Footer from '@/components/Footer.jsx'
import Navbar from '@/components/Navbar.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
