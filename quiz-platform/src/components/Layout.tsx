import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, History, Trophy, Menu,  } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { ScrollArea } from './ui/scroll-area'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'History', href: '/history', icon: History },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col gap-2 border-r p-6">
          <div className="flex h-16 items-center px-4">
            <h1 className="text-2xl font-bold">Quiz Platform</h1>
          </div>
          <ScrollArea className="flex-1">
            <nav className="flex flex-col gap-2 p-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.name} to={item.href}>
                    <span
                      className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
                        location.pathname === item.href ? 'bg-accent' : 'transparent'
                      }`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </nav>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex h-16 items-center">
            <h1 className="text-2xl font-bold">Quiz Platform</h1>
          </div>
          <ScrollArea className="flex-1">
            <nav className="flex flex-col gap-2 p-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span
                      className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
                        location.pathname === item.href ? 'bg-accent' : 'transparent'
                      }`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6">{children}</div>
      </main>
    </div>
  )
}

export default Layout