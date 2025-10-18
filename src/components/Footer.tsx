import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold text-white mb-4 block">
              Mindful<span className="text-primary-400">Path</span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-xs">
              In this space, psychology meets consciousness to support your journey back to your truest self.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@mindfulpath.com" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Freedom from Anxiety
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Healing from Toxic Relationships
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Emotional Trauma Recovery
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Mindful Living
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <p className="text-neutral-400 mb-2">Email: contact@mindfulpath.com</p>
            <p className="text-neutral-400 mb-4">WhatsApp: +1 (555) 123-4567</p>
            <Link to="/booking" className="btn btn-primary">
              Book a Session
            </Link>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-500 text-sm flex items-center justify-center">
            © {currentYear} MindfulPath. All rights reserved. Built with <Heart className="h-4 w-4 mx-1 text-primary-400" /> to serve your awareness journey.
          </p>
        </div>
      </div>
    </footer>
  );
};