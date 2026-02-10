import React from 'react';
import { Trophy, Activity, Calendar } from 'lucide-react'; 
import './Effects.css';

const SportsCard = ({ title, subtitle, Icon, link }) => {
  return (
    <div className="pro-card" style={{ padding: '2rem' }}>
      <div style={{ 
        width: '50px', height: '50px', 
        background: 'rgba(59, 130, 246, 0.1)', 
        borderRadius: '12px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#3b82f6', marginBottom: '1.5rem'
      }}>
        <Icon size={28} />
      </div>

      <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        {title}
      </h3>
      
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', flex: 1, marginBottom: '2rem' }}>
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
    <section className="section-padding" style={{ padding: '6rem 2rem' }}>
      
      {/* Encabezado con efecto */}
      <div className="section-title-wrapper">
        <h2 className="section-title-gradient">Deportes & Ligas</h2>
        <p style={{ color: '#94a3b8', marginTop: '1rem' }}>Plataformas de alto rendimiento</p>
      </div>
      
      {/* Grid Responsivo */}
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