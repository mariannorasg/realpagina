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

        {/* GRID DE SERVICIOS (cards pequeñas) */}
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

        {/* PAQUETES DESTACADOS: IZQUIERDA = DISEÑO GRÁFICO (dos piezas dentro) / DERECHA = MANEJO DE REDES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-brand-beige">
            Paquetes: <span className="text-brand-accent">diseño gráfico y redes</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* --- BLOQUE IZQUIERDO: DISEÑO GRÁFICO (IDENTIDAD + FLYERS) --- */}
            <div className="bg-brand-dark p-8 rounded-2xl border border-blue-900/50 hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-brand-accent" />
                </div>
                <h4 className="text-2xl font-semibold text-brand-beige">Diseño gráfico</h4>
              </div>

              {/* Identidad de marca */}
              <div className="rounded-xl border border-blue-900/40 p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-brand-accent" />
                  </div>
                  <p className="text-xl font-semibold text-brand-beige">
                    Identidad de marca (paquete completo)
                  </p>
                </div>
                <p className="text-brand-text-secondary mb-4">
                  Logo y aplicaciones, paleta, tipografías, usos incorrectos, stickers,
                  perfiles para Instagram/Facebook y mini brand guideline.
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-brand-accent">$210.000</span>
                  <span className="text-sm text-brand-text-secondary">ARS</span>
                </div>
                <a
                  href="#contacto"
                  className="inline-block bg-brand-accent text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
                >
                  Consultar identidad
                </a>
              </div>

              {/* Flyers publicitarios */}
              <div className="rounded-xl border border-blue-900/40 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <Film className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <p className="text-xl font-semibold text-brand-beige">
                    Flyers publicitarios (imagen o video)
                  </p>
                </div>
                <p className="text-brand-text-secondary mb-4">
                  Piezas para redes, campañas o promos. Formatos optimizados y entrega lista para publicar.
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-brand-accent">$15.000</span>
                  <span className="text-sm text-brand-text-secondary">por pieza</span>
                </div>
                <a
                  href="#contacto"
                  className="inline-block bg-brand-accent text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
                >
                  Solicitar flyer
                </a>
              </div>
            </div>

            {/* --- BLOQUE DERECHO: MANEJO DE REDES --- */}
<div className="bg-brand-dark p-8 rounded-2xl border border-blue-900/50 hover:border-brand-accent/50 transition-all duration-300 shadow-lg flex flex-col justify-between">
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
        <Megaphone className="w-6 h-6 text-brand-accent" />
      </div>
      <h4 className="text-2xl font-semibold text-brand-beige">
        Manejo de redes sociales
      </h4>
    </div>

    <p className="text-brand-text-secondary mb-6">
      Gestión integral de tu presencia en <strong>Instagram</strong> y <strong>Facebook</strong> para
      crecer con contenido constante, diseño profesional y una estrategia que refleja tu marca.
    </p>

    <ul className="space-y-2 text-brand-text-secondary mb-8">
      <li className="flex items-center gap-2"><span></span> 5 publicaciones semanales</li>
      <li className="flex items-center gap-2"><span></span> Historias diarias</li>
      <li className="flex items-center gap-2"><span></span> Diseños personalizados</li>
      <li className="flex items-center gap-2"><span></span> Reporte mensual de desempeño</li>
      <li className="flex items-center gap-2"><span></span> Plan de contenidos mensual</li>
      <li className="flex items-center gap-2"><span></span> Análisis de métricas y recomendaciones</li>
      <li className="flex items-center gap-2"><span></span> Atención a mensajes y comentarios</li>
      <li className="flex items-center gap-2"><span></span> Estrategia de crecimiento y presencia activa</li>
    </ul>
  </div>

  <div className="mt-auto">
    <div className="flex items-baseline gap-2 mb-6">
      <span className="text-4xl font-bold text-brand-accent">$130.000</span>
      <span className="text-sm text-brand-text-secondary">ARS / mes</span>
    </div>

    <a
      href="#contacto"
      className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition w-full text-center"
    >
      Consultar plan
    </a>
  </div>
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
