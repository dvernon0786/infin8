import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const countryData = {
  jp: {
    name: 'Japan',
    flag: '🇯🇵',
    averageProcessingTime: '2-3 months',
    commonBusinessTypes: ['Restaurants', 'Franchises', 'Tech', 'Import/Export'],
    consulateInfo: [
      { city: 'Tokyo', address: '2-1-1 Akasaka, Minato-ku, Tokyo', phone: '+81 3-3224-5000' },
      // Add more consulates if needed
    ],
    checklistPdf: '/pdfs/japan-e2-checklist.pdf',
  },
  mx: {
    name: 'Mexico',
    flag: '🇲🇽',
    averageProcessingTime: '3-4 months',
    commonBusinessTypes: ['Restaurants', 'Retail', 'Service Businesses'],
    consulateInfo: [
      { city: 'Mexico City', address: 'Perrón 05, Col. Los Morales Polanco', phone: '+52 55 8526-2561' },
    ],
    checklistPdf: '/pdfs/mexico-e2-checklist.pdf',
  },
  es: {
    name: 'Spain',
    flag: '🇪🇸',
    averageProcessingTime: '3-5 months',
    commonBusinessTypes: ['Restaurants', 'Franchises', 'Real Estate'],
    consulateInfo: [
      { city: 'Madrid', address: 'Calle de Serrano, 75, 28006 Madrid', phone: '+34 915 87 22 00' },
    ],
    checklistPdf: '/pdfs/spain-e2-checklist.pdf',
  },
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    averageProcessingTime: '2-4 months',
    commonBusinessTypes: ['Tech', 'Consulting', 'Franchises'],
    consulateInfo: [
      { city: 'London', address: '33 Nine Elms Ln, London SW11 7US', phone: '+44 20 7499 9000' },
    ],
    checklistPdf: '/pdfs/uk-e2-checklist.pdf',
  },
  ca: {
    name: 'Canada',
    flag: '🇨🇦',
    averageProcessingTime: '2-3 months',
    commonBusinessTypes: ['Tech', 'Consulting', 'Franchises', 'Retail'],
    consulateInfo: [
      { city: 'Ottawa', address: '490 Sussex Dr, Ottawa, ON K1N 1G8', phone: '+1 613-688-5335' },
    ],
    checklistPdf: '/pdfs/canada-e2-checklist.pdf',
  },
  // Add Spain, UK, Canada with similar structure
};

export default function CountryE2() {
  const router = useRouter();
  const { code } = router.query;
  
  // Wait for router to be ready
  if (!router.isReady) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />
        <div style={{ padding: 'clamp(32px, 5vw, 40px)', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const country = countryData[code] || null;

  if (!country) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />
        <div style={{ padding: 'clamp(32px, 5vw, 40px)' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: 700, marginBottom: 'clamp(16px, 3vw, 24px)', letterSpacing: '-0.02em' }}>Country Not Found</h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}>Please select a valid country from the <a href="/e2/treaty-countries" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'clamp(16px, 2vw, 18px)',
          }}>E-2 Treaty Countries</a> page.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: 700, marginBottom: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '-0.02em' }}>
        {country.flag} E-2 Visa for {country.name} Citizens
      </h1>
      <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        Learn about {country.name}-specific E-2 visa requirements, average processing times, visa interview tips, and common business types.
      </p>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '-0.02em' }}>Average Processing Time</h2>
        <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563' }}>
          {country.averageProcessingTime} at main consulates.
        </p>
      </section>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '-0.02em' }}>Common Business Types</h2>
        <ul style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563', paddingLeft: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.8 }}>
          {country.commonBusinessTypes.map((type, idx) => (<li key={idx}>{type}</li>))}
        </ul>
      </section>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '-0.02em' }}>Consulate Contact Info</h2>
        {country.consulateInfo.map(({ city, address, phone }, idx) => (
          <div key={idx} style={{ marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            <strong style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>{city}:</strong>
            <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)' }}>{address}</p>
            <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)' }}>{phone}</p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
        <a href={country.checklistPdf} download style={{
          backgroundColor: '#111827',
          color: '#fff',
          fontWeight: '600',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          fontSize: 'clamp(14px, 2vw, 16px)',
          borderRadius: '12px',
          textDecoration: 'none',
          boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          userSelect: 'none',
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
          Download {country.name} E-2 Visa Checklist
        </a>
      </section>

      <section style={{ marginBottom: 'clamp(40px, 8vw, 80px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '-0.02em' }}>Book Your Free Consultation</h2>
        <form action="/api/contact" method="POST" style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 16px)' }}>
          <input type="text" name="name" placeholder="Full Name" required style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />
          <input type="email" name="email" placeholder="Email Address" required style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />
          <input type="hidden" name="country" value={country.name} />
          <select name="timeline" required style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}>
            <option value="" disabled>When do you plan to start?</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="Not sure">Not sure</option>
          </select>
          <select name="businessType" required style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}>
            <option value="" disabled>What business type are you interested in?</option>
            <option value="Franchise">Franchise</option>
            <option value="Existing Business">Existing Business</option>
            <option value="Startup">Startup</option>
            <option value="Tech/Software">Tech/Software</option>
            <option value="Consulting">Consulting</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit" style={{
            backgroundColor: '#111827',
            color: '#fff',
            fontWeight: '600',
            padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            borderRadius: '12px',
            border: 'none',
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
            Book Free Consultation
          </button>
        </form>
      </section>
      <Footer />
      </div>
    </div>
  );
}

