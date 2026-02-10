import React from 'react';
import Hero from './components/Hero';
import SportsSection from './components/SportsSection';
import MenuSection from './components/MenuSection';
import LandingSection from './components/LandingSection';
import ContactSection from './components/ContactSection';
import './components/Effects.css'; // Importamos los estilos globales

export default function App() {
  return (
    <div className="bg-professional">
      
      {/* 1. Hero (Mantenemos tu fondo líquido azul porque se ve bien) */}
      <Hero />

      {/* 2. Deportes (Limpio y rápido) */}
      <SportsSection />

      {/* 3. Menús y Tiendas (Estilo E-commerce) */}
      <MenuSection />

      {/* 4. Landings (Mantenemos el efecto neón pero sutil) */}
      <LandingSection />

      {/* 5. Contacto (Profesional) */}
      <ContactSection /> 

      <footer style={{ padding: '3rem', textAlign: 'center', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{fontSize: '0.9rem'}}>© 2026 Alejandro Apodaca. Ingeniería en Ciencias Computacionales.</p>
      </footer>

    </div>
  );
}