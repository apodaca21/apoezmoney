import React from 'react';
import './LandingSection.css'; 
import './Effects.css'; 

export default function LandingSection() {
  return (
    <section style={{ padding: '6rem 0', minHeight: '80vh' }}>
      
      {/* 1. AQUÍ ESTABA EL ERROR: Agregamos el contenedor centrador */}
      <div className="section-header-container">
        <h2 className="section-title-gradient">LANDING PAGES</h2>
        <p className="section-subtitle">Estrategias de conversión visual</p>
      </div>
      
      {/* 2. Contenedor de Tarjetas Centradas */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '4rem', 
        flexWrap: 'wrap',
        padding: '0 1.5rem' 
      }}>
        
        {/* Tarjeta 1: Azul Cyan */}
        <div className="neon-card">
          <div className="card-content-neon">
            <h3 style={{fontSize: '1.8rem', color:'white', marginBottom:'10px'}}>Arquitectura</h3>
            <p style={{color:'#94a3b8', fontSize:'0.95rem'}}>
              Diseños minimalistas y elegantes enfocados en la estética visual y galería de proyectos.
            </p>
            <button className="neon-btn btn-disabled">En Desarrollo</button>
          </div>
        </div>

        {/* Tarjeta 2: Azul Profundo */}
        <div className="neon-card deep-blue">
          <div className="card-content-neon">
            <h3 style={{fontSize: '1.8rem', color:'white', marginBottom:'10px'}}>Portafolio Web</h3>
            <p style={{color:'#94a3b8', fontSize:'0.95rem'}}>
              Exhibición interactiva de habilidades técnicas, experiencia y casos de éxito digitales.
            </p>
            <button className="neon-btn btn-disabled">En Desarrollo</button>
          </div>
        </div>

      </div>
    </section>
  );
}