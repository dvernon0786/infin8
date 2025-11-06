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
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: '80px' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '128px 16px' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: 24,
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Am I Eligible for an E-2 Visa?
      </h1>
      <p style={{
        fontSize: 18,
        color: '#4B5563',
        marginBottom: 48,
        lineHeight: 1.6,
      }}>
        To qualify for an E-2 visa, you must meet these core requirements. Use the dropdown below to check if your country qualifies.
      </p>

      {/* Treaty Country Checker */}
      <div style={{ marginBottom: 40 }}>
        <label htmlFor="country-select" style={{ fontWeight: 600, fontSize: 16 }}>Select Your Country</label>
        <select
          id="country-select"
          value={country}
          onChange={e => setCountry(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: 16,
            marginTop: 8,
            borderRadius: 6,
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
          padding: '24px 32px',
          backgroundColor: isEligible ? '#F0FDF4' : '#FEF2F2',
          color: isEligible ? '#166534' : '#991B1B',
          borderRadius: '24px',
          border: `1px solid ${isEligible ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
          fontWeight: '600',
          fontSize: 18,
          marginBottom: 48,
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
          <p style={{ fontSize: 16, color: '#444', marginBottom: 12 }}>
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
              padding: '12px 32px',
              fontSize: '16px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              marginBottom: 32,
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
        gap: 16,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <a href="/quiz" style={{
          flex: '1 1 180px',
          backgroundColor: '#111827',
          color: '#fff',
          textAlign: 'center',
          padding: '12px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 16,
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
          flex: '1 1 180px',
          backgroundColor: '#fff',
          color: '#111827',
          textAlign: 'center',
          padding: '12px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 16,
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

