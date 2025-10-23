import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '+2', label: 'Años de experiencia en', highlight: 'negocios digitales' },
    { number: '+70', label: 'Clientes en distintos', highlight: 'servicios digitales' },
    { number: '+50', label: 'Páginas webs', highlight: 'creadas' },
    { number: '+100', label: 'Marcas nos confiaron', highlight: 'sus diseños'}
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-brand-blue-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img className="w-full h-auto rounded-2xl shadow-2xl" alt="Persona trabajando en computadora" src="https://images.unsplash.com/photo-1612068661769-e641a155d7bb" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-accent rounded-full filter blur-[100px]"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-beige">
                Quienes <span className="text-brand-accent relative">
                  somos
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-1 bg-brand-accent"
                  ></motion.div>
                </span>
              </h2>
              <p className="text-brand-text-secondary text-lg leading-relaxed">
                Conocen sobre nuestros servicios, pero aún nada sobre nosotros, asi que nos presentamos:<br />
                ¡Hola! Somos Mariano y Kevin 👋  
                nos dedicamos hace más de dos años a hacer páginas web y a potenciar de distintas maneras cientos de negocios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-brand-blue-deep/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-800 hover:border-brand-accent/50 transition-all duration-300"
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-4xl font-bold text-brand-beige mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-brand-text-secondary text-sm">
                    {stat.label}<br />
                    <span className="text-brand-accent font-semibold">{stat.highlight}</span>
                    {stat.suffix && <span className="text-gray-400"> {stat.suffix}</span>}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;