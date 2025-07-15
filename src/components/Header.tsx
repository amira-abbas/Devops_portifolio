import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
    } backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Amira Abbas
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;