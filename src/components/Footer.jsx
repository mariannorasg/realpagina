import React from 'react';
import { Instagram, Facebook } from 'lucide-react'; // ← quitamos Music
import { motion } from 'framer-motion';

const Footer = () => {
  const handleFacebookClick = () => {
    alert('📢 Próximamente disponible en Facebook!');
  };

  return (
    <footer className="bg-black text-brand-text-secondary py-12 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        {/* Columna 1: logo */}
        <div>
          <a href="#inicio" className="inline-block" aria-label="Volver al inicio - Real Digital">
            {/* Ajustá la altura si lo querés más chico: h-8 / h-10 / h-12 */}
            <img
              src="/images/realpng.png"
              alt="Real Digital"
              className="h-16 w-auto select-none"
              loading="lazy"
            />
          </a>
<p className="mt-0 text-sm text-brand-text-secondary leading-relaxed">
            Transformando negocios a través de soluciones digitales innovadoras.
          </p>
        </div>

        {/* Columna 2: enlaces */}
        <div>
          <h4 className="text-lg font-semibold text-brand-beige mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:text-brand-accent transition">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-brand-accent transition">Servicios</a></li>
            <li><a href="#sobre" className="hover:text-brand-accent transition">Sobre Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-brand-accent transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: redes */}
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
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent" />
            </motion.a>

            {/* (Quitado TikTok) */}

            {/* Facebook (próximamente) */}
            <motion.button
              onClick={handleFacebookClick}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent/20 transition"
              aria-label="Facebook (próximamente)"
            >
              <Facebook className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-blue-900/30 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-brand-accent font-semibold">Real Digital</span>. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
