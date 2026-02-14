import React, { useRef, useEffect } from 'react';
import { Trophy, Activity, Calendar, Target } from 'lucide-react';
import gsap from 'gsap';
import './Effects.css';

const SportsCard = ({ title, subtitle, Icon, link }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1.03, y: -8, duration: 0.3, ease: 'power2.out' });
    }
  };
  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    }
  };

  return (
    <div
      ref={cardRef}
      className="pro-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      
      {/* Icono con fondo azul brillante */}
      <div style={{ 
        width: '60px', height: '60px', 
        background: 'rgba(59, 130, 246, 0.1)', 
        borderRadius: '16px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#60a5fa', marginBottom: '1.5rem'
      }}>
        <Icon size={32} />
      </div>

      <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
        {title}
      </h3>
      
      <p style={{ marginBottom: '2rem', flex: 1, color: 'var(--text-secondary)', fontSize: '1rem' }}>
        {subtitle}
      </p>
      
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-pro">
          Ver Proyecto
        </a>
      ) : (
        <button className="btn-pro btn-disabled">
          En Desarrollo
        </button>
      )}
    </div>
  );
};

export default function SportsSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, []);

  return (
    <section style={{ padding: '6rem 0' }}>
      
      {/* ENCABEZADO CENTRADO */}
      <div className="section-header-container">
        <h2 className="section-title-gradient">Deportes & Ligas</h2>
        <p className="section-subtitle">Plataformas dinámicas de alto rendimiento</p>
      </div>
      
      {/* GRID CENTRADO */}
      <div ref={gridRef} className="responsive-grid">
        <SportsCard 
          Icon={Trophy} 
          title="Liga Libae" 
          subtitle="Gestión integral de torneos de baloncesto, roles de juego automatizados y perfiles." 
          link="https://libae.vercel.app/"
        />
        <SportsCard 
          Icon={Activity} 
          title="Torneo Futbol" 
          subtitle="Resultados en tiempo real, integración con API de streaming y estadísticas." 
          link="https://ligafut.vercel.app/"
        />
        <SportsCard 
          Icon={Calendar} 
          title="Copa Hno. Gabriel Taborin" 
          subtitle="Sistema de calendario dinámico, tabla de posiciones y registro de equipos." 
          link="https://copahnogabrieltaborin.vercel.app/"
        />
        <SportsCard 
          Icon={Target} 
          title="Liga Deportiva" 
          subtitle="Plataforma de gestión de ligas y estadísticas deportivas." 
          link="https://lbft.vercel.app/"
        />
      </div>
    </section>
  );
}