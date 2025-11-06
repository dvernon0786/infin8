import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function E2Eligibility() {
  const [country, setCountry] = useState('');
  const treatyCountries = [
    'Japan', 'Mexico', 'Spain', 'United Kingdom', 'Canada',
    'France', 'Germany', 'Italy', 'South Korea', 'Australia',
    'Argentina', 'Brazil', 'Chile', 'Colombia', 'Ecuador',
    'Finland', 'Greece', 'Ireland', 'Netherlands', 'Norway',
    'Poland', 'Portugal', 'Sweden', 'Switzerland', 'Turkey',
    /* Add full list of 78 countries here */
  ];

  const isEligible = treatyCountries.includes(country);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: 'clamp(64px, 10vw, 80px)' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: 'clamp(16px, 3vw, 24px)',
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Am I Eligible for an E-2 Visa?
      </h1>
      <p style={{
        fontSize: 'clamp(16px, 2vw, 18px)',
        color: '#4B5563',
        marginBottom: 'clamp(32px, 6vw, 48px)',
        lineHeight: 1.6,
      }}>
        To qualify for an E-2 visa, you must meet these core requirements. Use the dropdown below to check if your country qualifies.
      </p>

      {/* Treaty Country Checker */}
      <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <label htmlFor="country-select" style={{ fontWeight: 600, fontSize: 'clamp(14px, 2vw, 16px)' }}>Select Your Country</label>
        <select
          id="country-select"
          value={country}
          onChange={e => setCountry(e.target.value)}
          style={{
            width: '100%',
            padding: 'clamp(10px, 1.5vw, 12px)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            marginTop: 'clamp(6px, 1vw, 8px)',
            borderRadius: 'clamp(6px, 1vw, 8px)',
            border: '1px solid #ccc'
          }}
        >
          <option value="" disabled>Select your country</option>
          {treatyCountries.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Eligibility Result */}
      {country && (
        <div style={{
          padding: 'clamp(20px, 3vw, 24px) clamp(24px, 4vw, 32px)',
          backgroundColor: isEligible ? '#F0FDF4' : '#FEF2F2',
          color: isEligible ? '#166534' : '#991B1B',
          borderRadius: '24px',
          border: `1px solid ${isEligible ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
          fontWeight: '600',
          fontSize: 'clamp(16px, 2.2vw, 18px)',
          marginBottom: 'clamp(32px, 6vw, 48px)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          {isEligible ? (
            <span>✅ Your country <strong>{country}</strong> is eligible for the E-2 Treaty Investor Visa.</span>
          ) : (
            <span>❌ Unfortunately, your country <strong>{country}</strong> is not on the current list of E-2 treaty countries.</span>
          )}
        </div>
      )}

      {/* Eligibility Checklist Download */}
      {isEligible && (
        <>
          <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
            Download our free Eligibility Checklist to make sure you have all the documents you need.
          </p>
          <button 
            onClick={() => {
              // Trigger gated PDF modal with email capture
            }}
            style={{
              backgroundColor: '#111827',
              color: '#fff',
              fontWeight: '600',
              padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
              fontSize: 'clamp(14px, 2vw, 16px)',
              borderRadius: 'clamp(10px, 1.5vw, 12px)',
              border: 'none',
              cursor: 'pointer',
              marginBottom: 'clamp(24px, 4vw, 32px)',
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
            Download Eligibility Checklist
          </button>
        </>
      )}

      {/* CTAs */}
      <div style={{
        display: 'flex',
        gap: 'clamp(12px, 2vw, 16px)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <a href="/quiz" style={{
          flex: '1 1 clamp(160px, 22vw, 180px)',
          backgroundColor: '#111827',
          color: '#fff',
          textAlign: 'center',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 'clamp(14px, 2vw, 16px)',
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
          Start Eligibility Quiz
        </a>
        <a href="/contact" style={{
          flex: '1 1 clamp(160px, 22vw, 180px)',
          backgroundColor: '#fff',
          color: '#111827',
          textAlign: 'center',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 'clamp(14px, 2vw, 16px)',
          cursor: 'pointer',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#F9FAFB';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
          Book Consultation
        </a>
      </div>
      <Footer />
      </div>
    </div>
  );
}

