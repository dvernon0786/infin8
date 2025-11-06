import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Partners() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    services: [],
    territory: '',
    website: '',
    leadVolume: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const servicesOptions = ['Immigration Attorney', 'Business Formation', 'Franchise Consultant', 'Business Broker'];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => {
        const newServices = checked
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value);
        return { ...prev, services: newServices };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: 'partner-application' }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  if (submitted) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />
        <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 38, fontWeight: '700', marginBottom: 24 }}>Thank You for Your Interest!</h1>
          <p>We have received your application to join the Infin8 Partner Network. Our team will review and contact you within 48 hours.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 38, fontWeight: '700', marginBottom: 24 }}>
        Join Our Partner Network
      </h1>
      <p style={{ fontSize: 18, marginBottom: 32 }}>
        We work with immigration attorneys, business formation services, franchise consultants, and brokers to refer high-quality E-2 visa leads. Complete the application below to join.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <label htmlFor="name" style={{ fontWeight: 600 }}>Full Name</label>
        <input id="name" name="name" required value={formData.name} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="email" style={{ fontWeight: 600 }}>Email Address</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="company" style={{ fontWeight: 600 }}>Company Name</label>
        <input id="company" name="company" required value={formData.company} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="role" style={{ fontWeight: 600 }}>Your Role</label>
        <input id="role" name="role" required value={formData.role} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />
        
        <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
          <legend style={{ fontWeight: 600, marginBottom: 6 }}>Services Offered (check all that apply)</legend>
          {servicesOptions.map(service => (
            <div key={service} style={{ marginBottom: 8 }}>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                />{' '}
                {service}
              </label>
            </div>
          ))}
        </fieldset>

        <label htmlFor="territory" style={{ fontWeight: 600 }}>Territory / Focus Area</label>
        <input id="territory" name="territory" value={formData.territory} onChange={handleChange} placeholder="City, State, or Region" style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="website" style={{ fontWeight: 600 }}>Website or Professional Profile URL</label>
        <input id="website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="https://example.com" style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="leadVolume" style={{ fontWeight: 600 }}>Desired Lead Volume per Month</label>
        <select id="leadVolume" name="leadVolume" required value={formData.leadVolume} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}>
          <option value="">Select volume</option>
          <option value="1-5">1-5 Leads</option>
          <option value="6-10">6-10 Leads</option>
          <option value="11-20">11-20 Leads</option>
          <option value="20+">20+ Leads</option>
        </select>

        <button type="submit" style={{
          backgroundColor: '#111827',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          fontWeight: 600,
          fontSize: 16,
          padding: '12px 32px',
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
          Submit Application
        </button>
      </form>
      <Footer />
      </div>
    </div>
  );
}

