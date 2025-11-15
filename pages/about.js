import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>About Infin8</h1>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(12px, 2vw, 16px)', textAlign: 'center' }}>Our Story</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          Founded by Scott Gierum, Infin8 was created to help investors from treaty countries navigate the complex E-2 visa process with confidence. Frustrated by convoluted guidance and scattershot referrals, Scott built Infin8 as a trusted bridge to vetted service providers.
        </p>
      </section>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(12px, 2vw, 16px)', textAlign: 'center' }}>Our Mission</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          We empower E-2 visa applicants by providing clear eligibility checks, personalized business matching, and connecting them with trusted immigration attorneys and business formation experts, enabling a smooth path from visa application to running a successful U.S. business.
        </p>
      </section>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(12px, 2vw, 16px)', textAlign: 'center' }}>Our Partner Network</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          Our extensive partner network consists of top-tier immigration attorneys, business formation agencies, franchise consultants, and brokers dedicated to supporting E-2 visa investors throughout their journey. We carefully vet all partners to maintain high service quality.
        </p>
      </section>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(12px, 2vw, 16px)', textAlign: 'center' }}>Trust & Credentials</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.8, textAlign: 'center', display: 'inline-block' }}>
          <li>Years of experience helping E-2 visa applicants</li>
          <li>Successful referrals for hundreds of clients globally</li>
          <li>Partnerships with USCIS-recognized law firms</li>
          <li>Commitment to transparent and ethical service</li>
        </ul>
      </section>

      <div style={{ textAlign: 'center', marginTop: 'clamp(32px, 6vw, 48px)' }}>
        <a href="/contact" style={{
          backgroundColor: '#111827',
          color: '#fff',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: '12px',
          fontWeight: '600',
          fontSize: 'clamp(14px, 2vw, 16px)',
          textDecoration: 'none',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1F2937';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#111827';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
          Start Your E-2 Journey
        </a>
      </div>
      <Footer />
      </div>
    </div>
  );
}

