import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-white/80 backdrop-blur-lg py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold text-indigo-600">
          Mindful<span className="text-rose-600">Path</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-indigo-600 ${
                isActive ? 'text-indigo-600' : 'text-neutral-800'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-indigo-600 ${
                isActive ? 'text-indigo-600' : 'text-neutral-800'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-indigo-600 ${
                isActive ? 'text-indigo-600' : 'text-neutral-800'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-indigo-600 ${
                isActive ? 'text-indigo-600' : 'text-neutral-800'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-indigo-600 ${
                isActive ? 'text-indigo-600' : 'text-neutral-800'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link 
            to="/booking" 
            className="btn btn-primary"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-neutral-900" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="focus:outline-none"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-neutral-900" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 p-8">
          <Link 
            to="/" 
            className="font-serif text-2xl font-bold text-indigo-600 mb-6"
            onClick={closeMenu}
          >
            Mindful<span className="text-rose-600">Path</span>
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-neutral-800'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-neutral-800'}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-neutral-800'}`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-neutral-800'}`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-neutral-800'}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <Link 
            to="/booking" 
            className="btn btn-primary mt-6"
            onClick={closeMenu}
          >
            Book a Session
          </Link>
        </div>
      </div>
    </header>
  );
};