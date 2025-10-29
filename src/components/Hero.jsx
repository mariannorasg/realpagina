import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="
        relative overflow-hidden
        bg-[url('/images/background/madera.png')] bg-cover bg-center bg-no-repeat
        before:content-[''] before:absolute before:inset-0
        before:bg-gradient-to-b before:from-black/82 before:to-brand-blue-deep/92
      "
    >
      {/* Logos blur ajustados y animados */}
      {/* Logos cerca del conjunto (dentro del contenedor de mockups) */}
<motion.img
  src="/images/hero/instagram.png"
  alt=""
  className="
    absolute pointer-events-none
    left-[-10%] bottom-[6%]      /* cerca del borde izq. de la laptop */
    w-16 md:w-20 lg:w-24
    opacity-30 blur-[1.5px] rotate-[-6deg]
  "
  animate={{ rotate: [-6, 4, -6], y: [0, -6, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
/>

<motion.img
  src="/images/hero/pngwing.com.png" /* WordPress */
  alt=""
  className="
    absolute pointer-events-none
    right-[-6%] bottom-[14%]     /* pegado al lado derecho de la laptop/phone */
    w-16 md:w-20 lg:w-24
    opacity-30 blur-[1.5px] rotate-[6deg]
  "
  animate={{ rotate: [6, -4, 6], y: [0, -5, 0] }}
  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
/>


      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 items-start gap-12">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-beige">
              Te ayudamos<br />
              a construir la<br />
              <span className="text-brand-accent relative">
                Presencia Digital
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-1 bg-brand-accent"
                />
              </span>
              <br />
              de tu negocio
            </h1>

            <p className="text-brand-text-secondary text-base md:text-lg max-w-xl">
              Creando webs y diseños para redes sociales que atraen clientes, generan ventas y que se destacan sobre su competencia.
            </p>

            <a
              href="#contacto"
              className="inline-block bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-2xl hover:opacity-95"
            >
              ¡Transforma la web de tu negocio hoy!
            </a>

            <div className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black" alt="" src="https://images.unsplash.com/photo-1581943870582-f37dbd95fe06" />
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black" alt="" src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black" alt="" src="https://images.unsplash.com/photo-1694198295588-ad5ad3d62e72" />
              </div>
              <div>
                <p className="text-brand-beige font-bold text-lg md:text-xl">+100 Clientes</p>
                <p className="text-brand-text-secondary text-xs md:text-sm">
                  en <span className="text-brand-accent font-semibold">servicios digitales</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mockups animados */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative md:justify-self-end mt-10 md:mt-0"
          >
            {/* Laptop (movimiento pendular) */}
            <motion.img
              src="/images/bigimg/laptop.png"
              alt="Laptop Real Digital"
              className="block w-[78vw] max-w-[540px] md:max-w-[640px] lg:max-w-[760px] rounded-2xl z-10"
              animate={{ rotate: [0, 2.5, 0, -2.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Teléfono con mismo movimiento, más rápido */}
            <motion.img
              src="/images/hero/telefono.png"
              alt="Vista móvil Real Digital"
              className="
                absolute z-20
                right-[6%] bottom-[8%]
                w-[34vw] min-w-[120px] max-w-[180px]
                drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                select-none
              "
              animate={{ rotate: [0, 3.5, 0, -3.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Sombra */}
            <div
              className="
                pointer-events-none absolute
                left-1/2 -translate-x-1/2
                bottom-0 md:bottom-2
                w-[64vw] max-w-[620px] lg:max-w-[720px] h-8 md:h-10
                rounded-full opacity-40 blur-[6px]
                bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_45%,transparent_70%)]
                z-0
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
