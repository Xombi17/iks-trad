import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from '../utils/icons';
import { Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', icon: <Icons.Scroll className="h-4 w-4" />, label: 'Ancient Wisdom' },
    { path: '/healers', icon: <Icons.Book className="h-4 w-4" />, label: 'Tribal Healers' },
    { path: '/stories', icon: <Icons.BookOpen className="h-4 w-4" />, label: 'Stories' },
    { path: '/interactive', icon: <Icons.Leaf className="h-4 w-4" />, label: 'Interactive' },
    { path: '/video', icon: <Icons.Play className="h-4 w-4" />, label: 'Watch & Learn' },
    { path: '/games', icon: <Gamepad2 className="h-4 w-4" />, label: 'Games' }
  ];

  return (
    <nav className="bg-amber-900 text-amber-100 p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icons.Leaf className="h-8 w-8" />
            <span className="text-2xl font-serif">Vaidya Vidya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-serif">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-amber-200 transition-colors flex items-center gap-2 
                  ${location.pathname === item.path ? 'text-amber-200' : ''}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 hover:text-amber-200 transition-colors flex items-center gap-2
                  ${location.pathname === item.path ? 'text-amber-200' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}