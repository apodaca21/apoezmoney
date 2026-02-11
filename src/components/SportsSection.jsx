import React from 'react';
import { Trophy, Activity, Calendar } from 'lucide-react'; 
import './Effects.css';

const SportsCard = ({ title, subtitle, Icon, link }) => {
  return (
    <div className="pro-card"> 
      
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
  return (
    <section style={{ padding: '6rem 0' }}>
      
      {/* ENCABEZADO CENTRADO */}
      <div className="section-header-container">
        <h2 className="section-title-gradient">Deportes & Ligas</h2>
        <p className="section-subtitle">Plataformas dinámicas de alto rendimiento</p>
      </div>
      
      {/* GRID CENTRADO */}
      <div className="responsive-grid">
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
          link={null} 
        />
        <SportsCard 
          Icon={Calendar} 
          title="Copa Hno. Gabriel Taborin" 
          subtitle="Sistema de calendario dinámico, tabla de posiciones y registro de equipos." 
          link="https://copahnogabrieltaborin.vercel.app/"
        />
      </div>
    </section>
  );
}