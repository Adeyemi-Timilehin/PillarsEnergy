
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Menu, X, Zap } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'Projects', href: '/projects' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Calculator', href: '/calculator' },
    // { name: 'Market', href: '/market' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">PillarsEnergy</span>
              <span className="text-sm text-gray-600 block">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  isActive(item.href)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-green-600 hover:bg-gray-50 rounded-md ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

