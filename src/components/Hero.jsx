import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from '../LiquidEther'; 
import './Effects.css'; // Importante: Importar el CSS

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      
      {/* 1. Fondo Líquido */}
      <div style={styles.backgroundLayer}>
        <LiquidEther colors={['#0047FF', '#009afa', '#020024']} />
      </div>

      {/* 2. Contenido Principal */}
      <div style={styles.contentLayer}>
        {/* Usamos la nueva clase responsiva en lugar del estilo inline fijo */}
        <div className="hero-flex-responsive">
          
          {/* FOTO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flexShrink: 0 }} // Evita que la foto se aplaste
          >
            <img 
              src="/fotobanner.jpeg" 
              alt="Alejandro Apodaca" 
              style={styles.photo} 
            />
          </motion.div>

          {/* TEXTO */}
          <div className="hero-text-responsive">
            <motion.h1 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero-name-responsive" // Clase para ajustar tamaño en móvil
              style={styles.name}
            >
              Alejandro Apodaca
            </motion.h1>
            
            <motion.h2 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-subtitle-responsive"
              style={styles.subtitle}
            >
              Portafolio de proyectos web y desarrollo de software.
            </motion.h2>
          </div>
          
        </div>
      </div>
      
      {/* 3. Indicador de Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={styles.scrollIndicator}
      >
        <div style={{ color: 'white', fontSize: '2rem', cursor: 'default' }}>↓</div>
      </motion.div>

    </section>
  );
}

// Estilos base (lo que es común para todos)
const styles = {
  heroSection: { 
    position: 'relative', 
    height: '100vh', 
    width: '100%', 
    overflow: 'hidden', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center' 
  },
  backgroundLayer: { 
    position: 'absolute', 
    top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 
  },
  contentLayer: { 
    position: 'relative', 
    zIndex: 10, 
    width: '100%', 
    maxWidth: '1400px', 
    margin: '0 auto', 
    padding: '0 1rem' // Menos padding base para que en móvil aproveche el ancho
  },
  // La foto mantiene sus estilos base, el tamaño lo controla el CSS o el max-width
  photo: { 
    width: '100%',
    maxWidth: '400px', // Tamaño máximo en PC
    height: 'auto',
    aspectRatio: '1/1',
    objectFit: 'cover', 
    borderRadius: '30px', 
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)', 
    border: '2px solid rgba(255,255,255,0.1)' 
  },
  // Estilos por defecto para PC (se sobrescriben con las clases CSS en móvil)
  name: { 
    fontSize: '4.5rem', 
    fontWeight: '800', 
    margin: 0, 
    color: 'white',
    lineHeight: 1.1 
  },
  subtitle: { 
    fontSize: '2rem', 
    color: '#60a5fa', 
    margin: '15px 0' 
  },
  scrollIndicator: { 
    position: 'absolute', 
    bottom: '30px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    zIndex: 20 
  }
};