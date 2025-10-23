import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // si usás los íconos

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'SOBRE NOSOTROS', href: '#sobre-mi' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'CLIENTES', href: '#clientes' },
    { name: 'PRECIOS', href: '#precios' },
    /*{ name: 'CONTACTO', href: '#contacto' },*/
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-md shadow-lg border-b border-brand-accent/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 ml-10 md:ml-16"
          >
            <div className="flex items-center space-x-1">
              <a href="/" className="flex items-center shrink-0">
  <img
    src="/images/realpng.png"
    alt="Real Digital"
    className="!h-[104px] md:!h-[104px] lg:!h-[104px] w-auto object-contain -translate-y-[2px]"
  />
</a>



            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-brand-beige hover:text-brand-accent transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, backgroundColor: '#60a5fa' }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-accent text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-brand-accent/50"
            >
              Contactar
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/85 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-brand-beige hover:text-brand-accent transition-colors duration-300 py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-brand-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 text-center"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
