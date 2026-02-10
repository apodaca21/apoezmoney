import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from '../LiquidEther'; // Asegúrate de que la ruta sea correcta

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      
      {/* 1. Fondo Líquido */}
      <div style={styles.backgroundLayer}>
        <LiquidEther colors={['#0047FF', '#009afa', '#020024']} />
      </div>

      {/* 2. Contenido Principal */}
      <div style={styles.contentLayer}>
        <div style={styles.flexContainer}>
          
          {/* FOTO (Con el ajuste responsivo para móvil) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={styles.photoContainer}
          >
            <img 
              src="/fotobanner.jpeg" 
              alt="Alejandro Apodaca" 
              style={styles.photo} 
            />
          </motion.div>

          {/* TEXTO */}
          <div style={styles.textContainer}>
            <motion.h1 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={styles.name}
            >
              Alejandro Apodaca
            </motion.h1>
            
            <motion.h2 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={styles.subtitle}
            >
              Portafolio de proyectos web y desarrollo de software.
            </motion.h2>
          </div>
          
        </div>
      </div>
      
      {/* 3. Indicador de Scroll Animado */}
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
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    zIndex: 0 
  },
  contentLayer: { 
    position: 'relative', 
    zIndex: 10, 
    width: '100%', 
    maxWidth: '1400px', 
    margin: '0 auto', 
    padding: '0 2rem' 
  },
  flexContainer: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem', // Reduje un poco el gap para que ajuste mejor en laptops
    flexWrap: 'wrap-reverse' // Truco: En móvil la foto queda arriba del texto al envolver
  },
  photoContainer: { 
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  // --- EL AJUSTE RESPONSIVO DE LA FOTO ---
  photo: { 
    width: '100%',           // Ocupa el ancho disponible en móvil
    maxWidth: '450px',       // No crece más de 450px en PC
    height: 'auto',          // Altura automática para no deformarse
    aspectRatio: '1/1',      // Mantiene la forma cuadrada
    objectFit: 'cover', 
    borderRadius: '30px', 
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)', 
    border: '2px solid rgba(255,255,255,0.1)' 
  },
  textContainer: { 
    textAlign: 'left', 
    color: 'white',
    minWidth: '300px', // Evita que el texto se aplaste demasiado
    flex: 1
  },
  name: { 
    fontSize: 'clamp(3rem, 5vw, 4.5rem)', // Texto dinámico: más pequeño en móvil, grande en PC
    fontWeight: '800', 
    margin: 0, 
    lineHeight: 1.1 
  },
  subtitle: { 
    fontSize: 'clamp(1.2rem, 3vw, 2rem)', // Texto dinámico
    color: '#60a5fa', 
    margin: '10px 0' 
  },
  scrollIndicator: { 
    position: 'absolute', 
    bottom: '30px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    zIndex: 20 
  }
};