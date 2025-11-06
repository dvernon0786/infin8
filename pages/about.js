import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 38, fontWeight: '700', marginBottom: 24 }}>About Infin8</h1>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>Our Story</h2>
        <p style={{ fontSize: 18, color: '#555' }}>
          Founded by Scott Gierum, Infin8 was created to help investors from treaty countries navigate the complex E-2 visa process with confidence. Frustrated by convoluted guidance and scattershot referrals, Scott built Infin8 as a trusted bridge to vetted service providers.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>Our Mission</h2>
        <p style={{ fontSize: 18, color: '#555' }}>
          We empower E-2 visa applicants by providing clear eligibility checks, personalized business matching, and connecting them with trusted immigration attorneys and business formation experts, enabling a smooth path from visa application to running a successful U.S. business.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>Our Partner Network</h2>
        <p style={{ fontSize: 18, color: '#555' }}>
          Our extensive partner network consists of top-tier immigration attorneys, business formation agencies, franchise consultants, and brokers dedicated to supporting E-2 visa investors throughout their journey. We carefully vet all partners to maintain high service quality.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>Trust & Credentials</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: 20, fontSize: 16 }}>
          <li>Years of experience helping E-2 visa applicants</li>
          <li>Successful referrals for hundreds of clients globally</li>
          <li>Partnerships with USCIS-recognized law firms</li>
          <li>Commitment to transparent and ethical service</li>
        </ul>
      </section>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <a href="/e2" style={{
          backgroundColor: '#111827',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '12px',
          fontWeight: '600',
          fontSize: 16,
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

