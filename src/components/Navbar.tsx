import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <span className="text-2xl font-bold text-blue-400">DrugAI</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-400 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/recherche"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/recherche')
                  ? 'text-blue-400 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Recherche
            </Link>
            <Link
              to="/prediction"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/prediction')
                  ? 'text-blue-400 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Prédiction 3D
            </Link>
            <Link
              to="/guide"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/guide')
                  ? 'text-blue-400 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Guide
            </Link>
            <Link
              to="/education"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/education')
                  ? 'text-blue-400 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Éducation
            </Link>
            <Link
              to="/apropos"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/apropos')
                  ? 'text-blue-400 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              À propos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 mb-4 border border-gray-700 shadow-xl">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/')
                    ? 'text-blue-400 bg-blue-900/30 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/recherche"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/recherche')
                    ? 'text-blue-400 bg-blue-900/30 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Recherche
              </Link>
              <Link
                to="/prediction"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/prediction')
                    ? 'text-blue-400 bg-blue-900/30 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Prédiction 3D
              </Link>
              <Link
                to="/guide"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/guide')
                    ? 'text-blue-400 bg-blue-900/30 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Guide
              </Link>
              <Link
                to="/education"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/education')
                    ? 'text-blue-400 bg-blue-900/30 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Éducation
              </Link>
              <Link
                to="/apropos"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/apropos')
                    ? 'text-blue-400 bg-blue-900/30 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                À propos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

