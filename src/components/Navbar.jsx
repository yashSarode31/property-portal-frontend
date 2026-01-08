import { Link, NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinkBaseClassName =
  'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground'

function NavItem({ to, children, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(navLinkBaseClassName, isActive && 'bg-accent text-accent-foreground')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold">
            Property Portal
          </Link>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-1">
            <NavItem to="/" end>
              Home
            </NavItem>
            <NavItem to="/properties">Properties</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
