import React from "react";
import { motion } from "framer-motion";
import { Instagram, Star } from "lucide-react";

const Clients = () => {
  // Carrusel de logos
  const clientLogos = [
    { src: "/images/logos/tphone.jpg", alt: "Tecno Phone" },
    { src: "/images/logos/elite.jpg", alt: "Elite Solutions" },
    { src: "/images/logos/madratek.jpg", alt: "Madratek" },
    { src: "/images/logos/logo.png", alt: "Real Digital" },
    { src: "/images/logos/logo_dsr_frase250.png", alt: "DSR" },
    { src: "/images/logos/sanra.png", alt: "Municipalidad de San Rafael" },
  ];

  // Reseñas de clientes
  const testimonials = [
    {
      name: "Tecno Phone",
      username: "@tecnophonee__",
      rating: 5,
      text: "Muy conforme con los servicios de Marketing que me han ofrecido.",
      avatarUrl: "/images/testimonials/tphone.jpg",
    },
    {
      name: "Elite Solutions",
      username: "@elitesolutions.cl",
      rating: 5,
      text: "Gracias a la página web logré vender muchísimo más de lo que imaginé.",
      avatarUrl: "/images/testimonials/elite.jpg",
    },
    {
      name: "Madratek",
      username: "@Madratekstore",
      rating: 5,
      text: "Trabajamos juntos hace 1 año y nunca un problema, súper recomendados.",
      avatarUrl: "/images/testimonials/madratek.jpg",
    },
  ];

  return (
    <section
      id="clientes"
      className="py-20 bg-brand-dark-blueish text-brand-text-main relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- TÍTULO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-beige">
            Estos son los<br />
            Negocios que{" "}
            <span className="text-brand-accent relative">
              confiaron
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-accent"
              ></motion.div>
            </span>
          </h2>
          <p className="text-brand-text-secondary text-lg mt-4">
            Cuáles le he trabajado, realizando distintos{" "}
            <span className="text-brand-accent font-semibold">
              servicios digitales.
            </span>
          </p>
        </motion.div>

        {/* --- CARRUSEL AUTOMÁTICO DE LOGOS --- */}
        <div className="overflow-hidden mb-20">
          <motion.div
            className="flex items-center justify-center gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>

        {/* --- RESEÑAS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-brand-beige">
            Algunos comentarios:
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-dark text-brand-text-main p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative border border-blue-900/50 hover:border-brand-accent/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    alt={testimonial.name}
                    src={testimonial.avatarUrl}
                  />
                  <div>
                    <h4 className="font-bold text-lg text-brand-beige">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-brand-text-secondary text-sm">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
                <Instagram className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-brand-text-secondary leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
