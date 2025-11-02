import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">DrugAI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600 underline decoration-2 underline-offset-4'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/recherche"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/recherche')
                  ? 'text-blue-600 underline decoration-2 underline-offset-4'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Recherche
            </Link>
            <Link
              to="/education"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/education')
                  ? 'text-blue-600 underline decoration-2 underline-offset-4'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Éducation
            </Link>
            <Link
              to="/apropos"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/apropos')
                  ? 'text-blue-600 underline decoration-2 underline-offset-4'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              À propos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

