import React from 'react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import './Effects.css';

export default function ContactSection() {
  return (
    <section style={{ padding: '8rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="pro-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem', textAlign: 'center' }}>
        
        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Hablemos de tu Proyecto
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Estoy disponible para trabajos freelance y colaboraciones. Llevemos tu negocio al siguiente nivel digital.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          
          {/* CORREO */}
          <a href="mailto:malejandroapodaca@gmail.com" className="btn-pro" style={{ background: '#334155' }}>
            <Mail size={20} /> Enviar Correo
          </a>
          
          {/* INSTAGRAM */}
          <a href="https://instagram.com/aaapodaca21" target="_blank" rel="noopener noreferrer" className="btn-pro" style={{ background: '#334155' }}>
            <Instagram size={20} /> Instagram
          </a>

        </div>

        {/* WHATSAPP (Enlace directo) */}
        <a 
          href="https://wa.me/526647542155" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-pro" 
          style={{ padding: '15px 40px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
        >
          <MessageCircle size={24} /> Iniciar Chat en WhatsApp
        </a>

      </div>
    </section>
  );
}