import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  TrendingUp,
  Palette,
  Megaphone,
  Film,
  Image as ImageIcon,
  BadgeCheck,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Desarrollo Web',
      description:
        'Transforma tu presencia en línea con una web de vanguardia. Atrae clientes, optimiza la experiencia y destaca en la web moderna. ¡Empieza hoy!',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description:
        'Potencia tu éxito con el marketing digital. Conquista audiencias, amplía tu alcance y destaca en la era digital. ¡Haz realidad ahora!',
    },
    {
      icon: Palette,
      title: 'Diseño Gráfico',
      description:
        'Aumenta tus ventas con diseños impactantes. Eleva tu marca, cautiva a tu audiencia y destaca visualmente. ¡Haz que tu imagen hable por ti!',
    },
    {
      icon: Megaphone,
      title: 'Publicidad Digital',
      description:
        'Domina el juego con publicidad digital estratégica. Atrae clientes y haz crecer tu negocio en el mundo digital. ¡Destaca ahora!',
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-brand-dark-blueish text-brand-text-main relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-beige">
            Nuestros Servicios{' '}
            <span className="text-brand-accent relative">
              Principales
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-accent"
              />
            </span>
          </h2>
        </motion.div>

        {/* GRID DE SERVICIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-dark p-8 rounded-2xl border border-blue-900/50 hover:border-brand-accent/50 transition-all duration-300 group shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-brand-accent" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-brand-beige">
                {service.title}
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SUB-BLOQUE: DISEÑO GRÁFICO (FLYERS + IDENTIDAD) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-brand-beige">
            Diseño gráfico: <span className="text-brand-accent">paquetes y piezas</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Flyers publicitarios */}
            <div className="bg-brand-dark p-8 rounded-2xl border border-blue-900/50 hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <Film className="w-6 h-6 text-brand-accent" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-brand-accent" />
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-brand-beige mb-2">
                Flyers publicitarios (imagen o video)
              </h4>
              <p className="text-brand-text-secondary mb-6">
                Piezas para redes, campañas o promos. Formatos optimizados y entrega lista para publicar.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-brand-accent">$15.000</span>
                <span className="text-sm text-brand-text-secondary">por pieza</span>
              </div>

              <a
                href="#contacto"
                className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
              >
                Solicitar flyer
              </a>
            </div>

            {/* Identidad de marca */}
            <div className="bg-brand-dark p-8 rounded-2xl border border-blue-900/50 hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-brand-accent" />
              </div>

              <h4 className="text-2xl font-semibold text-brand-beige mb-2">
                Identidad de marca (paquete completo)
              </h4>
              <p className="text-brand-text-secondary mb-6">
                Logo y sus aplicaciones, paleta, tipografías, usos incorrectos, stickers, perfil para instagram, facebook y mini brand guideline para comunicar con coherencia.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-brand-accent">$150.000</span>
                <span className="text-sm text-brand-text-secondary">ARS</span>
              </div>

              <a
                href="#contacto"
                className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
              >
                Consultar identidad
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
