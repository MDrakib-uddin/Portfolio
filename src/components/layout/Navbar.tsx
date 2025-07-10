import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Brain } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Competitive Programming', href: '#competitive-programming', section: 'competitive-programming' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scrollspy effect
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const handleScrollSpy = () => {
      let current = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1).replace(/-.*/, match => match.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())));
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
          >
            <Brain className="w-7 h-7 text-blue-600 dark:text-blue-400 animate-skillicon" />
            <span><span className="text-blue-600 dark:text-blue-400">Rakib</span> Uddin</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection.toLowerCase().replace(/ /g, '-') === link.section ? 'font-bold underline underline-offset-8 text-blue-600 dark:text-blue-400' : ''
                  }`}
                  aria-current={activeSection.toLowerCase().replace(/ /g, '-') === link.section ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection.toLowerCase().replace(/ /g, '-') === link.section ? 'font-bold underline underline-offset-8 text-blue-600 dark:text-blue-400' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={activeSection.toLowerCase().replace(/ /g, '-') === link.section ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;