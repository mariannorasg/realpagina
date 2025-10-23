import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-black to-brand-blue-deep">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-beige"
          >
            Te ayudamos<br />
            a construir la<br />
            <span className="text-brand-accent relative">
              Presencia Digital
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-1 bg-brand-accent"
              ></motion.div>
            </span>
            <br />
            de tu negocio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-brand-text-secondary text-lg max-w-xl"
          >
            Creando webs y diseños para redes sociales<br />
            que atraen clientes, generan ventas<br />
            y que se destacan sobre su competencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, backgroundColor: '#60a5fa' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-brand-accent/50"
            >
              ¡Transforma la web de tu negocio hoy!
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center space-x-4 pt-4"
          >
            <div className="flex -space-x-3">
              <img className="w-12 h-12 rounded-full border-2 border-black" alt="Cliente 1" src="https://images.unsplash.com/photo-1581943870582-f37dbd95fe06" />
              <img className="w-12 h-12 rounded-full border-2 border-black" alt="Cliente 2" src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
              <img className="w-12 h-12 rounded-full border-2 border-black" alt="Cliente 3" src="https://images.unsplash.com/photo-1694198295588-ad5ad3d62e72" />
              <img className="w-12 h-12 rounded-full border-2 border-black" alt="Cliente 4" src="https://images.unsplash.com/photo-1581943870582-f37dbd95fe06" />
            </div>
            <div>
              <p className="text-brand-beige font-bold text-xl">+100 Clientes</p>
              <p className="text-brand-text-secondary text-sm">en <span className="text-brand-accent font-semibold">servicios digitales</span></p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
  src="/images/bigimg/laptop.png"
  alt="Real Digital"
  className="rounded-2xl max-w-[600px] md:max-w-[700px] lg:max-w-[800px] shadow-none filter drop-shadow-[0_24px_36px_rgba(0,0,0,0.45)]"
/>


            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent rounded-full filter blur-[100px] opacity-50"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;8