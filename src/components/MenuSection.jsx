import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Coffee, Car, Pizza } from 'lucide-react'; // Agregamos el icono de Pizza
import './Effects.css';

const MenuCard = ({ title, Icon, description, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="pro-card"
      style={{ textDecoration: 'none', padding: '0' }}
      whileHover={{ y: -8 }}
    >
      {/* Contenedor de Imagen (Fondo Azul Oscuro) */}
      <div style={{ 
        height: '200px', 
        background: '#1e293b', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)', 
        color: '#60a5fa'
      }}>
        <Icon size={70} strokeWidth={1.5} />
      </div>

      {/* Contenido de Texto */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, color: 'var(--text-secondary)' }}>
          {description}
        </p>
        
        <div style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '0.95rem', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Visitar Sitio <span>&rarr;</span>
        </div>
      </div>
    </motion.a>
  );
};

export default function MenuSection() {
  return (
    <section style={{ padding: '6rem 0', background: 'rgba(0,0,0,0.2)' }}>
      
      {/* ENCABEZADO CENTRADO */}
      <div className="section-header-container">
        <h2 className="section-title-gradient">E-Commerce & Catálogos</h2>
        <p className="section-subtitle">Soluciones de venta y gestión de inventario</p>
      </div>

      {/* GRID (Ahora con 4 elementos se acomodará automáticamente) */}
      <div className="responsive-grid">
        
        {/* 1. CARBUY */}
        <MenuCard 
          title="CarBuy" 
          Icon={Car} 
          description="Plataforma de exhibición y venta de vehículos con catálogo dinámico."
          link="https://carbuy-pearl.vercel.app/"
        />

        {/* 2. PIZZERÍA CREATOR (NUEVO) */}
        <MenuCard 
          title="Pizzería Creator" 
          Icon={Pizza} 
          description="Sitio web para restaurante italiano con menú digital y gestión de pedidos."
          link="https://creatorestaurante.vercel.app/"
        />

        {/* 3. C-CAFETERO */}
        <MenuCard 
          title="Cafetería C-Cafetero" 
          Icon={Coffee} 
          description="Sistema de pedidos digitales y reservas con pagos integrados."
          link="https://ccafatero.vercel.app/"
        />

        {/* 4. SPORTS & SERVICES */}
        <MenuCard 
          title="Sports & Services" 
          Icon={ShoppingBag} 
          description="Tienda en línea completa con carrito y panel administrativo."
          link="https://sportsandservices.com/"
        />
        
      </div>
    </section>
  );
}