
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Battery, Car, BookOpen, Search } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white">
              <Battery className="h-4 w-4 rotate-90" />
            </div>
            <span className="font-display text-xl font-bold">
              <span className="text-primary">Volt</span>
              <span className="text-secondary">Voyage</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/vehicles" 
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary"
                >
                  <Car className="h-4 w-4" />
                  Browse EVs
                </Link>
              </li>
              <li>
                <Link 
                  to="/battery-certification" 
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary"
                >
                  <Battery className="h-4 w-4" />
                  Battery Certification
                </Link>
              </li>
              <li>
                <Link 
                  to="/learning-hub" 
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary"
                >
                  <BookOpen className="h-4 w-4" />
                  Learning Hub
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="hidden items-center gap-1.5 rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-700 hover:bg-slate-200 md:flex">
              <Search className="h-4 w-4" />
              Search
            </button>
            <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-600">
              Sign In
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              to="/vehicles"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse EVs
            </Link>
            <Link
              to="/battery-certification"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Battery Certification
            </Link>
            <Link
              to="/learning-hub"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Learning Hub
            </Link>
            <div className="mt-4 flex items-center rounded-md bg-slate-100 px-3 py-2">
              <Search className="mr-2 h-4 w-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search for EVs..." 
                className="w-full bg-transparent text-sm text-slate-700 placeholder-slate-500 focus:outline-none" 
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
