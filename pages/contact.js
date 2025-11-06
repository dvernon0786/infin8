import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    question: '',
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
          <h1 style={{ fontSize: 38, fontWeight: '700', marginBottom: 24 }}>
            Thank You!
          </h1>
          <p style={{ fontSize: 18, color: '#555' }}>
            Your message has been received. We will contact you within 24 hours.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 600, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 38, fontWeight: '700', marginBottom: 36 }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <label htmlFor="name" style={{ fontWeight: 600 }}>Full Name</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="email" style={{ fontWeight: 600 }}>Email Address</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <label htmlFor="country" style={{ fontWeight: 600 }}>Country</label>
        <select name="country" id="country" required value={formData.country} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}>
          <option value="">Select your country</option>
          {/* Ideally, load full E-2 treaty countries here */}
          <option value="Japan">Japan</option>
          <option value="Mexico">Mexico</option>
          <option value="Spain">Spain</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
        </select>

        <label htmlFor="question" style={{ fontWeight: 600 }}>Your Question / Message</label>
        <textarea name="question" id="question" rows="4" required value={formData.question} onChange={handleChange} style={{ padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }} />

        <button type="submit" style={{
          backgroundColor: '#111827',
          color: 'white',
          fontWeight: '600',
          padding: '12px 32px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
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

      {/* Optional: Calendly embed or Link to Book Consultation */}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <p>Prefer to book a consultation directly?</p>
        <a href="https://calendly.com/infin8-consultation" target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: '#fff',
          color: '#111827',
          fontWeight: 600,
          padding: '12px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
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
          Schedule Your Free Consultation
        </a>
      </div>
      <Footer />
      </div>
    </div>
  );
}

