import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Effects.css'; // Importante para jalar los estilos

// 1. GRADIENT TEXT
export const GradientText = ({ text, className }) => {
  return (
    <h2 className={`gradient-text-anim ${className}`} style={{ fontSize: '3.5rem', fontWeight: 800, margin: 0 }}>
      {text}
    </h2>
  );
};

// 2. SHINE TEXT
export const ShineText = ({ text }) => {
  return (
    <h2 className="shine-text" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
      {text}
    </h2>
  );
};

// 3. SPLIT TEXT (Aparece letra por letra)
export const SplitText = ({ text }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", justifyContent: "center", fontSize: "3.5rem", fontWeight: "800", color: "white", flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 4. VARIABLE PROXIMITY (Interactúa con el mouse)
export const ProximityText = ({ text }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', flexWrap: 'wrap' }}>
      {text.split('').map((letter, index) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </div>
  );
};

// 5. GLITCH TEXT (Efecto Cyberpunk agresivo)
export const GlitchText = ({ text }) => {
  return (
    <div className="glitch-wrapper">
      <h2 className="glitch" data-text={text}>{text}</h2>
    </div>
  );
};

const Letter = ({ children }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Distancia del mouse al centro de la letra
      const distance = Math.abs(e.clientX - (rect.left + rect.width / 2));
      const verticalDist = Math.abs(e.clientY - (rect.top + rect.height / 2));
      
      // Activar si está cerca (horizontal y verticalmente)
      const isClose = distance < 80 && verticalDist < 80;
      setActive(isClose);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.span
      ref={ref}
      animate={{
        scale: active ? 1.3 : 1,
        color: active ? '#00C9FF' : '#ffffff',
        textShadow: active ? '0 0 20px #00C9FF' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      style={{ fontSize: '3.5rem', fontWeight: 800, display: 'inline-block', cursor: 'default' }}
    >
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};