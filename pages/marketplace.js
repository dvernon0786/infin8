import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const franchises = [
  {
    id: 1,
    name: 'Subway',
    description: 'Popular sandwich franchise',
    investmentRange: '$150K - $300K',
    image: '/images/franchise-subway.jpg',
    link: '#',
  },
  {
    id: 2,
    name: 'Taco Bell',
    description: 'Fast food Mexican franchise',
    investmentRange: '$200K - $500K',
    image: '/images/franchise-tacobell.jpg',
    link: '#',
  },
  // ...more franchise listings
];

const businessesForSale = [
  {
    id: 1,
    name: 'Downtown Deli',
    location: 'Miami, FL',
    price: '$120K',
    image: '/images/business-deli.jpg',
    link: '#',
  },
  {
    id: 2,
    name: 'Cafe Central',
    location: 'New York, NY',
    price: '$250K',
    image: '/images/business-cafe.jpg',
    link: '#',
  },
  // ...more businesses for sale
];

const caseStudies = [
  {
    id: 1,
    name: 'Michael S.',
    country: 'Canada',
    businessType: 'Coffee Shop',
    quote: 'Infin8 made my E-2 visa journey straightforward, connecting me with all the right partners.',
  },
  {
    id: 2,
    name: 'Maria G.',
    country: 'Spain',
    businessType: 'Tech Startup',
    quote: 'Thanks to Infin8, I found a great franchise and got my visa approved in under 6 months.',
  },
  // ...more case studies
];

export default function Marketplace() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: 700, marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
        E-2 Business Marketplace
      </h1>
      <section style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(16px, 2.5vw, 20px)', textAlign: 'center' }}>Franchise Opportunities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(clamp(260px, 35vw, 280px),1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
          {franchises.map(({ id, name, description, investmentRange, image, link }) => (
            <div key={id} style={{ backgroundColor: '#F5F5F5', borderRadius: 'clamp(10px, 1.5vw, 12px)', boxShadow: '0 1px 5px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <img src={image} alt={`${name} Franchise`} style={{ width: '100%', height: 'clamp(140px, 20vw, 160px)', objectFit: 'cover' }} />
              <div style={{ padding: 'clamp(12px, 2vw, 16px)' }}>
                <h3 style={{ marginBottom: 'clamp(6px, 1vw, 8px)', fontSize: 'clamp(18px, 2.5vw, 20px)' }}>{name}</h3>
                <p style={{ marginBottom: 'clamp(4px, 0.5vw, 4px)', color: '#444', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>{description}</p>
                <p style={{ fontWeight: 600, marginBottom: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>{investmentRange}</p>
                <a href={link} style={{
                  backgroundColor: '#111827',
                  color: '#fff',
                  padding: 'clamp(8px, 1.2vw, 10px) clamp(20px, 3vw, 24px)',
                  borderRadius: 'clamp(10px, 1.5vw, 12px)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
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
                  Request Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(16px, 2.5vw, 20px)', textAlign: 'center' }}>Restaurants & Businesses for Sale</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(clamp(260px, 35vw, 280px),1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
          {businessesForSale.map(({ id, name, location, price, image, link }) => (
            <div key={id} style={{ backgroundColor: '#F5F5F5', borderRadius: 'clamp(10px, 1.5vw, 12px)', boxShadow: '0 1px 5px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <img src={image} alt={`${name} Business`} style={{ width: '100%', height: 'clamp(140px, 20vw, 160px)', objectFit: 'cover' }} />
              <div style={{ padding: 'clamp(12px, 2vw, 16px)' }}>
                <h3 style={{ marginBottom: 'clamp(6px, 1vw, 8px)', fontSize: 'clamp(18px, 2.5vw, 20px)' }}>{name}</h3>
                <p style={{ marginBottom: 'clamp(4px, 0.5vw, 4px)', color: '#444', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>{location}</p>
                <p style={{ fontWeight: 600, marginBottom: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>{price}</p>
                <a href={link} style={{
                  backgroundColor: '#111827',
                  color: '#fff',
                  padding: 'clamp(8px, 1.2vw, 10px) clamp(20px, 3vw, 24px)',
                  borderRadius: 'clamp(10px, 1.5vw, 12px)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
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
                  Request Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, marginBottom: 'clamp(16px, 2.5vw, 20px)', textAlign: 'center' }}>Success Stories</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 3vw, 24px)',
        }}>
          {caseStudies.map(({ id, name, country, businessType, quote }) => (
            <blockquote key={id} style={{
              borderLeft: 'clamp(3px, 0.5vw, 4px) solid #667eea',
              paddingLeft: 'clamp(16px, 3vw, 24px)',
              fontStyle: 'italic',
              color: '#111827',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              "{quote}" <br />
              <strong style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
              }}>- {name}, {country}, {businessType}</strong>
            </blockquote>
          ))}
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
}

