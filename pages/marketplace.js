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
      <div style={{ maxWidth: 1000, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 38, fontWeight: 700, marginBottom: 24 }}>
        E-2 Business Marketplace
      </h1>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Franchise Opportunities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {franchises.map(({ id, name, description, investmentRange, image, link }) => (
            <div key={id} style={{ backgroundColor: '#F5F5F5', borderRadius: 12, boxShadow: '0 1px 5px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <img src={image} alt={`${name} Franchise`} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ padding: 16 }}>
                <h3 style={{ marginBottom: 8 }}>{name}</h3>
                <p style={{ marginBottom: 4, color: '#444' }}>{description}</p>
                <p style={{ fontWeight: 600, marginBottom: 12 }}>{investmentRange}</p>
                <a href={link} style={{
                  backgroundColor: '#111827',
                  color: '#fff',
                  padding: '10px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
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

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Restaurants & Businesses for Sale</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {businessesForSale.map(({ id, name, location, price, image, link }) => (
            <div key={id} style={{ backgroundColor: '#F5F5F5', borderRadius: 12, boxShadow: '0 1px 5px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <img src={image} alt={`${name} Business`} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ padding: 16 }}>
                <h3 style={{ marginBottom: 8 }}>{name}</h3>
                <p style={{ marginBottom: 4, color: '#444' }}>{location}</p>
                <p style={{ fontWeight: 600, marginBottom: 12 }}>{price}</p>
                <a href={link} style={{
                  backgroundColor: '#111827',
                  color: '#fff',
                  padding: '10px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
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

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Success Stories</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          {caseStudies.map(({ id, name, country, businessType, quote }) => (
            <blockquote key={id} style={{
              borderLeft: '4px solid #667eea',
              paddingLeft: 24,
              fontStyle: 'italic',
              color: '#111827',
              fontSize: 18,
              lineHeight: 1.6,
              margin: 0,
            }}>
              "{quote}" <br />
              <strong style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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

