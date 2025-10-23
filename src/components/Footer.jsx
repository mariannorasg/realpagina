import React from 'react';
import { Instagram, Facebook, Music } from 'lucide-react'; // Music será temporal para TikTok
import { motion } from 'framer-motion';

const Footer = () => {
  const handleFacebookClick = () => {
    alert('📢 Próximamente disponible en Facebook!');
  };

  return (
    <footer className="bg-black text-brand-text-secondary py-12 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        {/* Columna 1 */}
        <div>
          <h3 className="text-2xl font-bold text-brand-beige mb-4">real✦</h3>
          <p className="text-sm text-brand-text-secondary leading-relaxed">
            Transformando negocios a través de soluciones digitales innovadoras.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="text-lg font-semibold text-brand-beige mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:text-brand-accent transition">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-brand-accent transition">Servicios</a></li>
            <li><a href="#sobre" className="hover:text-brand-accent transition">Sobre Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-brand-accent transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="text-lg font-semibold text-brand-beige mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/real.soluc/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent/20 transition"
            >
              <Instagram className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent" />
            </motion.a>

            {/* TikTok (ícono temporal) */}
            <motion.a
              href="https://www.tiktok.com/@real.soluciones?_t=ZM-90aI0jyOGUd&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent/20 transition"
            >
              <Music className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent" />
            </motion.a>

            {/* Facebook (próximamente) */}
            <motion.button
              onClick={handleFacebookClick}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent/20 transition"
            >
              <Facebook className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-blue-900/30 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-brand-accent font-semibold">Real Digital</span>. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
