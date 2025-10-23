import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>real.</title>
        <meta name="description" content="Creando webs y diseños para redes sociales que atraen clientes, generan ventas y que se destacan sobre su competencia." />
      </Helmet>
      <div className="min-h-screen bg-brand-dark">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Clients />
        <Pricing />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;