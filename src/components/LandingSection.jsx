import React from 'react';
import './LandingSection.css'; 
import './Effects.css'; 

export default function LandingSection() {
  return (
    <section className="section-padding" style={{ padding: '6rem 2rem', minHeight: '90vh' }}>
      
      {/* TÍTULO ANIMADO Y RESPONSIVO */}
      <div className="section-title-wrapper">
        <h2 className="section-title-gradient">LANDING PAGES</h2>
        <p style={{ color: '#94a3b8', marginTop: '1rem' }}>Estrategias de conversión visual</p>
      </div>
      
      <div className="landing-flex" style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        
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

        {/* Tarjeta 2: Azul Profundo (Deep Blue) */}
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