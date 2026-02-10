import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Coffee, Car } from 'lucide-react';
import './Effects.css';

const MenuCard = ({ title, Icon, description, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="pro-card"
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', height: '100%' }}
      whileHover={{ y: -10 }}
    >
      {/* Contenedor de Imagen/Icono */}
      <div style={{ 
        height: '200px', 
        background: '#0f172a', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#3b82f6'
      }}>
        <Icon size={64} strokeWidth={1.5} />
      </div>

      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', flex: 1 }}>
          {description}
        </p>
        <div style={{ marginTop: '1.5rem', color: 'var(--accent-blue)', fontWeight: '600', fontSize: '0.9rem' }}>
          Visitar Sitio &rarr;
        </div>
      </div>
    </motion.a>
  );
};

export default function MenuSection() {
  return (
    <section className="section-padding" style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
      
      {/* Encabezado con efecto */}
      <div className="section-title-wrapper">
        <h2 className="section-title-gradient">E-Commerce & Catálogos</h2>
        <p style={{ color: '#94a3b8', marginTop: '1rem' }}>Soluciones de venta y gestión de inventario</p>
      </div>

      {/* Grilla responsiva adaptada para 3 elementos */}
      <div className="responsive-grid">
        
        {/* CARBUY - Catálogo de Vehículos */}
        <MenuCard 
          title="CarBuy" 
          Icon={Car} 
          description="Plataforma de exhibición y venta de vehículos con catálogo dinámico y filtros avanzados de búsqueda."
          link="https://carbuy-pearl.vercel.app/"
        />

        {/* C-CAFATERO - Reservas y Menú */}
        <MenuCard 
          title="Cafetería C-Cafetero" 
          Icon={Coffee} 
          description="Sistema de pedidos digitales, gestión de menú y reservas con pasarela de pagos integrada."
          link="https://ccafatero.vercel.app/"
        />

        {/* SPORTS & SERVICES - E-commerce */}
        <MenuCard 
          title="Sports & Services" 
          Icon={ShoppingBag} 
          description="Tienda en línea completa con carrito de compras, gestión de inventario y panel administrativo."
          link="https://sportsandservices.com/"
        />

      </div>
    </section>
  );
}