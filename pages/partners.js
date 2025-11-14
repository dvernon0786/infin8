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
        <div style={{ maxWidth: 600, margin: 'clamp(40px, 6vw, 60px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)' }}>Thank You for Your Interest!</h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}>We have received your application to join the Infin8 Partner Network. Our team will review and contact you within 48 hours.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 700, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
        Join Our Partner Network
      </h1>
      <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
        We work with immigration attorneys, business formation services, franchise consultants, and brokers to refer high-quality E-2 visa leads. Complete the application below to join.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2.5vw, 20px)', textAlign: 'left' }}>
        <label htmlFor="name" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)', textAlign: 'left' }}>Full Name</label>
        <input id="name" name="name" required value={formData.name} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="email" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Email Address</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="company" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Company Name</label>
        <input id="company" name="company" required value={formData.company} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="role" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Your Role</label>
        <input id="role" name="role" required value={formData.role} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />
        
        <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
          <legend style={{ fontWeight: 600, marginBottom: 'clamp(6px, 1vw, 8px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Services Offered (check all that apply)</legend>
          {servicesOptions.map(service => (
            <div key={service} style={{ marginBottom: 'clamp(6px, 1vw, 8px)' }}>
              <label style={{ fontSize: 'clamp(14px, 1.8vw, 16px)' }}>
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

        <label htmlFor="territory" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Territory / Focus Area</label>
        <input id="territory" name="territory" value={formData.territory} onChange={handleChange} placeholder="City, State, or Region" style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="website" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Website or Professional Profile URL</label>
        <input id="website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="https://example.com" style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="leadVolume" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Desired Lead Volume per Month</label>
        <select id="leadVolume" name="leadVolume" required value={formData.leadVolume} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}>
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
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          fontWeight: 600,
          fontSize: 'clamp(14px, 2vw, 16px)',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
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

