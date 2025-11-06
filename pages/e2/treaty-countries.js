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
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: '80px' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '128px 16px' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 700,
        marginBottom: 24,
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        E-2 Treaty Countries
      </h1>
      <p style={{
        fontSize: 18,
        color: '#4B5563',
        marginBottom: 32,
        lineHeight: 1.6,
      }}>
        Select a continent to filter the list of countries with which the U.S. has an E-2 treaty.
      </p>

      <div style={{ marginBottom: 40 }}>
        {continents.map(cont => (
          <button
            key={cont}
            onClick={() => setFilter(cont)}
            style={{
              padding: '10px 24px',
              marginRight: 8,
              marginBottom: 8,
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: filter === cont ? '#111827' : '#F3F4F6',
              color: filter === cont ? 'white' : '#4B5563',
              fontWeight: filter === cont ? '600' : '500',
              fontSize: 14,
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
        gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))',
        gap: '24px',
        marginBottom: 40,
      }}>
        {filteredCountries.map(({ name, code }) => (
          <a
            href={`/country/${code}/e2`}
            key={code}
            style={{
              padding: '20px 16px',
              borderRadius: '24px',
              backgroundColor: '#fff',
              color: '#111827',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 16,
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
      <div style={{ textAlign: 'center', marginBottom: 80, fontSize: 16, color: '#444' }}>
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
              marginLeft: 4,
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
            padding: 32,
            borderRadius: 12,
            width: 400,
            maxWidth: '90%',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            position: 'relative',
          }}>
            <button
              onClick={() => setShowLeadForm(false)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'none',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#666',
              }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Contact Us</h2>
            <form action="/api/contact" method="POST">
              <label htmlFor="name" style={{ display: 'block', marginBottom: 4 }}>Full Name</label>
              <input type="text" id="name" name="name" required style={{ width: '100%', marginBottom: 16, padding: '8px' }}/>

              <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email</label>
              <input type="email" id="email" name="email" required style={{ width: '100%', marginBottom: 16, padding: '8px' }}/>

              <label htmlFor="message" style={{ display: 'block', marginBottom: 4 }}>Message</label>
              <textarea id="message" name="message" rows="3" required style={{ width: '100%', marginBottom: 16, padding: '8px' }}/>

              <button type="submit" style={{
                backgroundColor: '#111827',
                border: 'none',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: 16,
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

