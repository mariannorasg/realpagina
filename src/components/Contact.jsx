import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_544506t';
const TEMPLATE_ID = 'template_asrq7km';
const PUBLIC_KEY = 'lslWhCrhGqyRxkH3i';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Las claves del objeto DEBEN coincidir con las variables del template: {{name}}, {{email}}, {{message}}
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: '✅ Mensaje enviado',
        description: '¡Gracias por contactarte! Te responderé a la brevedad.',
        duration: 4000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      toast({
        title: '❌ No se pudo enviar',
        description: 'Ocurrió un error al enviar el formulario. Probá nuevamente.',
        duration: 5000,
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-brand-dark-blueish text-brand-text-main relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-beige">
            ¿Listo para <span className="text-brand-accent relative">
              empezar?
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-accent"
              />
            </span>
          </h2>
          <p className="text-brand-text-secondary text-lg mt-4">
            Contáctanos y transformemos tu presencia digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda: info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-beige mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 text-brand-text-main">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-secondary">Email</p>
                    <p className="font-semibold text-brand-beige">mariano.rasggido@gmail.com</p>
                  </div>
                </motion.div>

               <motion.div
  whileHover={{ x: 10 }}
  className="flex items-center space-x-4 text-brand-text-main cursor-pointer"
>
  <a
    href="https://wa.me/5492995497296?text=Hola!%20Vengo%20de%20la%20web%20de%20Real%20Digital%20y%20quiero%20asesoramiento"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4"
  >
    <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center hover:bg-brand-accent/20 transition">
      <Phone className="w-6 h-6 text-brand-accent" />
    </div>
    <div>
      <p className="text-sm text-brand-text-secondary">WhatsApp</p>
      <p className="font-semibold text-brand-beige hover:text-brand-accent transition">
        +54 299 549 7296
      </p>
    </div>
  </a>
</motion.div>


                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 text-brand-text-main">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-secondary">Ubicación</p>
                    <p className="font-semibold text-brand-beige">Mendoza, Argentina</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-dark p-6 rounded-2xl border border-blue-900/50"
            >
              <h4 className="text-xl font-bold text-brand-beige mb-4">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-brand-text-secondary">
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-brand-accent rounded-full" /><span>+2 años de experiencia</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-brand-accent rounded-full" /><span>+100 clientes satisfechos</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-brand-accent rounded-full" /><span>Resultados comprobados</span></li>
                <li className="flex items-center space-x-2"><div className="w-2 h-2 bg-brand-accent rounded-full" /><span>Soporte personalizado</span></li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Columna derecha: formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-dark border border-blue-900/50 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-brand-beige placeholder-gray-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-dark border border-blue-900/50 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-brand-beige placeholder-gray-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text-secondary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-brand-dark border border-blue-900/50 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-brand-beige resize-none placeholder-gray-500"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: isSending ? 1 : 1.02, backgroundColor: isSending ? undefined : '#60a5fa' }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                className="w-full bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-brand-accent/50 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSending ? 'Enviando…' : 'Enviar Mensaje'}</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
