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
        <div style={{ maxWidth: 600, margin: 'clamp(40px, 6vw, 60px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: '700', marginBottom: 'clamp(16px, 3vw, 24px)' }}>
            Thank You!
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#555' }}>
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
      <div style={{ maxWidth: 600, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: '700', marginBottom: 'clamp(24px, 4vw, 36px)' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2.5vw, 20px)' }}>
        <label htmlFor="name" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Full Name</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="email" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Email Address</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <label htmlFor="country" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Country</label>
        <select name="country" id="country" required value={formData.country} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }}>
          <option value="">Select your country</option>
          {/* Ideally, load full E-2 treaty countries here */}
          <option value="Japan">Japan</option>
          <option value="Mexico">Mexico</option>
          <option value="Spain">Spain</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
        </select>

        <label htmlFor="question" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>Your Question / Message</label>
        <textarea name="question" id="question" rows="4" required value={formData.question} onChange={handleChange} style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', borderRadius: 'clamp(6px, 1vw, 8px)', border: '1px solid #ccc' }} />

        <button type="submit" style={{
          backgroundColor: '#111827',
          color: 'white',
          fontWeight: '600',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          border: 'none',
          cursor: 'pointer',
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

      {/* Optional: Calendly embed or Link to Book Consultation */}
      <div style={{ marginTop: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
        <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>Prefer to book a consultation directly?</p>
        <a href="https://calendly.com/infin8-consultation" target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: '#fff',
          color: '#111827',
          fontWeight: 600,
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          textDecoration: 'none',
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
          Schedule Your Free Consultation
        </a>
      </div>
      <Footer />
      </div>
    </div>
  );
}

