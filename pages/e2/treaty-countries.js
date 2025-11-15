import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const treatyCountriesList = [
  { name: 'Japan', continent: 'Asia', code: 'jp' },
  { name: 'Mexico', continent: 'North America', code: 'mx' },
  { name: 'Spain', continent: 'Europe', code: 'es' },
  { name: 'United Kingdom', continent: 'Europe', code: 'uk' },
  { name: 'Canada', continent: 'North America', code: 'ca' },
  { name: 'France', continent: 'Europe', code: 'fr' },
  { name: 'Germany', continent: 'Europe', code: 'de' },
  { name: 'Italy', continent: 'Europe', code: 'it' },
  { name: 'South Korea', continent: 'Asia', code: 'kr' },
  { name: 'Australia', continent: 'Oceania', code: 'au' },
  { name: 'Argentina', continent: 'South America', code: 'ar' },
  { name: 'Brazil', continent: 'South America', code: 'br' },
  { name: 'Chile', continent: 'South America', code: 'cl' },
  { name: 'Colombia', continent: 'South America', code: 'co' },
  { name: 'Ecuador', continent: 'South America', code: 'ec' },
  { name: 'Finland', continent: 'Europe', code: 'fi' },
  { name: 'Greece', continent: 'Europe', code: 'gr' },
  { name: 'Ireland', continent: 'Europe', code: 'ie' },
  { name: 'Netherlands', continent: 'Europe', code: 'nl' },
  { name: 'Norway', continent: 'Europe', code: 'no' },
  { name: 'Poland', continent: 'Europe', code: 'pl' },
  { name: 'Portugal', continent: 'Europe', code: 'pt' },
  { name: 'Sweden', continent: 'Europe', code: 'se' },
  { name: 'Switzerland', continent: 'Europe', code: 'ch' },
  { name: 'Turkey', continent: 'Europe', code: 'tr' },
  /* Add all 78 treaty countries with continent property */
];

const continents = ['All', 'Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'];

export default function TreatyCountries() {
  const [filter, setFilter] = useState('All');
  const [showLeadForm, setShowLeadForm] = useState(false);

  const filteredCountries = filter === 'All' ? treatyCountriesList : treatyCountriesList.filter(c => c.continent === filter);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: 'clamp(64px, 10vw, 80px)' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)', textAlign: 'center' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 700,
        marginBottom: 'clamp(16px, 3vw, 24px)',
        color: '#111827',
        letterSpacing: '-0.02em',
        textAlign: 'center',
      }}>
        E-2 Treaty Countries
      </h1>
      <p style={{
        fontSize: 'clamp(16px, 2vw, 18px)',
        color: '#4B5563',
        marginBottom: 'clamp(24px, 4vw, 32px)',
        lineHeight: 1.6,
        textAlign: 'center',
      }}>
        Select a continent to filter the list of countries with which the U.S. has an E-2 treaty.
      </p>

      <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {continents.map(cont => (
          <button
            key={cont}
            onClick={() => setFilter(cont)}
            style={{
              padding: 'clamp(8px, 1.2vw, 10px) clamp(20px, 3vw, 24px)',
              marginRight: 'clamp(6px, 1vw, 8px)',
              marginBottom: 'clamp(6px, 1vw, 8px)',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: filter === cont ? '#111827' : '#F3F4F6',
              color: filter === cont ? 'white' : '#4B5563',
              fontWeight: filter === cont ? '600' : '500',
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (filter !== cont) {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cont) {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }
            }}
          >
            {cont}
          </button>
        ))}
      </div>

      {/* Country Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(clamp(120px, 18vw, 140px),1fr))',
        gap: 'clamp(16px, 3vw, 24px)',
        marginBottom: 'clamp(24px, 4vw, 40px)',
      }}>
        {filteredCountries.map(({ name, code }) => (
          <a
            href={`/country/${code}/e2`}
            key={code}
            style={{
              padding: 'clamp(16px, 2.5vw, 20px) clamp(12px, 2vw, 16px)',
              borderRadius: '24px',
              backgroundColor: '#fff',
              color: '#111827',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 'clamp(14px, 2vw, 16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            }}
          >
            {name}
          </a>
        ))}
      </div>

      {/* Not Listed Clause and Lead Capture */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)', fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563' }}>
        <p>
          Don't see your country? You might still qualify for an L-1 visa instead. 
          <button
            onClick={() => setShowLeadForm(true)}
            style={{
              background: 'none',
              border: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: '600',
              marginLeft: 'clamp(4px, 0.5vw, 4px)',
              fontSize: 'clamp(14px, 2vw, 16px)',
            }}
          >
            Contact us to learn more.
          </button>
        </p>
      </div>

      {/* Lead Capture Modal (simplified) */}
      {showLeadForm && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: 'clamp(24px, 4vw, 32px)',
            borderRadius: '12px',
            width: 'clamp(320px, 50vw, 400px)',
            maxWidth: '90%',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            position: 'relative',
          }}>
            <button
              onClick={() => setShowLeadForm(false)}
              style={{
                position: 'absolute',
                top: 'clamp(10px, 1.5vw, 12px)',
                right: 'clamp(10px, 1.5vw, 12px)',
                background: 'none',
                border: 'none',
                fontSize: 'clamp(20px, 3vw, 24px)',
                cursor: 'pointer',
                color: '#9CA3AF',
              }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 700, marginBottom: 'clamp(12px, 2vw, 16px)' }}>Contact Us</h2>
            <form action="/api/contact" method="POST" onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission here if needed
              window.location.href = '/contact';
            }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: 'clamp(4px, 0.5vw, 4px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Full Name</label>
              <input type="text" id="name" name="name" required style={{ width: '100%', marginBottom: 'clamp(12px, 2vw, 16px)', padding: 'clamp(6px, 1vw, 8px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}/>

              <label htmlFor="email" style={{ display: 'block', marginBottom: 'clamp(4px, 0.5vw, 4px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Email</label>
              <input type="email" id="email" name="email" required style={{ width: '100%', marginBottom: 'clamp(12px, 2vw, 16px)', padding: 'clamp(6px, 1vw, 8px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}/>

              <label htmlFor="message" style={{ display: 'block', marginBottom: 'clamp(4px, 0.5vw, 4px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Message</label>
              <textarea id="message" name="message" rows="3" required style={{ width: '100%', marginBottom: 'clamp(12px, 2vw, 16px)', padding: 'clamp(6px, 1vw, 8px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}/>

              <button type="submit" style={{
                backgroundColor: '#111827',
                border: 'none',
                color: 'white',
                padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: 'clamp(14px, 2vw, 16px)',
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
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
      </div>
    </div>
  );
}

