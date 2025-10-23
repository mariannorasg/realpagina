import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
// (si antes usabas useToast acá, ya no lo necesitamos)

const Pricing = () => {
  const plans = [
    {
      name: 'Landing',
      price: '$200.000',
      period: 'ARS',
      features: [
        'Diseño Personalizado',
        'Hasta 5 Secciones',
        'Responsive (Móvil/Tablet)',
        'Optimización SEO Básica',
        'Formulario de Contacto',
        'Integración Redes Sociales',
        '1 Mes de Soporte',
      ],
      popular: false,
    },
    {
      name: 'Completa',
      price: '$300.000',
      period: 'ARS',
      features: [
        'Todo lo del Plan Básico',
        'Hasta 10 Secciones',
        'Blog Integrado',
        'Optimización SEO Avanzada',
        'Google Analytics',
        'Chat en Vivo',
        '3 Meses de Soporte',
        'Certificado SSL',
      ],
      popular: true,
    },
    {
      name: 'Tienda Online',
      price: '$450.000',
      period: 'ARS',
      features: [
        'Todo lo del Plan Profesional',
        'Secciones Ilimitadas',
        'E-commerce Básico',
        'Sistema de Reservas',
        'Multiidioma',
        'Animaciones Avanzadas',
        '6 Meses de Soporte',
        'Mantenimiento Mensual',
      ],
      popular: false,
    },
  ];

  // 👉 lleva al usuario a #contacto y guarda el plan elegido para pre-llenar el formulario
  const handlePlanClick = (planName) => {
    try {
      sessionStorage.setItem('selectedPlan', planName);
    } catch {}
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback por si no existe el id (otra ruta, etc.)
      window.location.hash = '#contacto';
    }
  };

  return (
    <section id="precios" className="py-20 bg-gradient-to-b from-black to-brand-blue-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-800 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-beige">
            Precios <span className="text-brand-accent relative">
              Webs
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-accent"
              ></motion.div>
            </span>
          </h2>
          <p className="text-brand-text-secondary text-lg mt-4">
            Elige el plan perfecto para tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-brand-blue-deep/30 backdrop-blur-sm p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular ? 'border-brand-accent' : 'border-blue-900'
              } hover:border-brand-accent/70`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-beige mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-brand-accent">{plan.price}</span>
                  <span className="text-brand-text-secondary ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: plan.popular ? '#60a5fa' : 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-brand-accent text-white shadow-lg hover:shadow-brand-accent/50'
                    : 'bg-white/10 text-brand-beige'
                }`}
                aria-label={`Seleccionar plan ${plan.name}`}
              >
                Seleccionar Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
