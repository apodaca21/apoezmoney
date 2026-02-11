import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from '../LiquidEther';

export default function Hero() {
  return (
    <section className="hero-section">
      
      {/* 1. Estilos CSS internos ajustados para SOLO TEXTO CENTRADO */}
      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .hero-flex {
          display: flex;
          align-items: center;
          justify-content: center;
          /* Eliminamos gap y wrap porque ya solo hay un elemento */
        }
        
        /* ESTILOS DE TEXTO (Centrado por defecto) */
        .hero-text-box {
          text-align: center; /* Centrado siempre */
          max-width: 900px; /* Un poco más ancho para que quepa bien el texto */
          margin: 0 auto;
        }
        .hero-name {
          font-size: 5.5rem; /* Un poco más grande para compensar la falta de foto */
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
          color: white;
          letter-spacing: -2px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .hero-subtitle {
          font-size: 2.2rem;
          color: #60a5fa; /* Azul moderno */
          margin: 2rem 0;
          font-weight: 500;
          line-height: 1.4;
        }

        /* --- AJUSTES PARA IPHONE / MÓVIL --- */
        @media (max-width: 900px) {
          .hero-name {
            font-size: 3.5rem; /* Ajustado para pantalla chica */
          }
          .hero-subtitle {
            font-size: 1.5rem;
            margin: 1.5rem 0;
          }
        }
      `}</style>

      {/* 2. Fondo Líquido */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LiquidEther colors={['#0047FF', '#009afa', '#020024']} />
      </div>

      {/* 3. Contenido Principal (Solo Texto) */}
      <div className="hero-container">
        <div className="hero-flex">
          
          {/* TEXTO */}
          <div className="hero-text-box">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hero-name"
            >
              Alejandro Apodaca
            </motion.h1>
            
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-subtitle"
            >
              Proyectos de desarrollo de código y portafolio de websites.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              {/* Etiqueta decorativa opcional */}
              <span style={{ 
                padding: '10px 20px', 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '30px', 
                color: '#cbd5e1', 
                fontSize: '1rem',
                display: 'inline-block',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                Ingeniería en Ciencias Computacionales
              </span>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* 4. Indicador de Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}
      >
        <div style={{ color: 'white', fontSize: '2rem', opacity: 0.7 }}>↓</div>
      </motion.div>

    </section>
  );
}