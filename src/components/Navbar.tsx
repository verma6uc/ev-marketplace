
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Battery, Search, User, LogIn } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Battery className="w-8 h-8 text-energy-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white">V</span>
              </div>
            </div>
            <span className="font-display text-xl font-bold">
              <span className="text-primary-600">Volt</span>
              <span className="text-energy-600">Voyage</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/browse" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Browse EVs
            </Link>
            <Link to="/battery-certification" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Battery Health
            </Link>
            <Link to="/learning-hub" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Learning Hub
            </Link>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-slate-500 hover:text-primary-600 hover:bg-slate-100 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              to="/login" 
              className="flex items-center px-4 py-1.5 rounded-full border border-primary-200 text-primary-700 hover:bg-primary-50 transition-colors"
            >
              <LogIn className="w-4 h-4 mr-1.5" />
              <span>Login</span>
            </Link>
            <Link 
              to="/sell" 
              className="px-4 py-1.5 rounded-full bg-energy-600 text-white hover:bg-energy-700 transition-colors"
            >
              Sell Your EV
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-3 bg-white border-b border-slate-200">
          <Link 
            to="/" 
            className="block py-2 px-4 hover:bg-slate-50 rounded-md text-slate-700" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/browse" 
            className="block py-2 px-4 hover:bg-slate-50 rounded-md text-slate-700" 
            onClick={() => setIsMenuOpen(false)}
          >
            Browse EVs
          </Link>
          <Link 
            to="/battery-certification" 
            className="block py-2 px-4 hover:bg-slate-50 rounded-md text-slate-700" 
            onClick={() => setIsMenuOpen(false)}
          >
            Battery Health
          </Link>
          <Link 
            to="/learning-hub" 
            className="block py-2 px-4 hover:bg-slate-50 rounded-md text-slate-700" 
            onClick={() => setIsMenuOpen(false)}
          >
            Learning Hub
          </Link>
          <div className="pt-2 border-t border-slate-100 flex space-x-3">
            <Link 
              to="/login" 
              className="flex-1 py-2 px-4 rounded-md border border-primary-200 text-center text-primary-700 hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/sell" 
              className="flex-1 py-2 px-4 rounded-md bg-energy-600 text-center text-white hover:bg-energy-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sell Your EV
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
  