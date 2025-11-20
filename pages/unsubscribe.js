import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Unsubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real implementation, this would call an API to unsubscribe
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 600, margin: 'clamp(64px, 10vw, 128px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Email Opt-Out</h1>
        
        {!submitted ? (
          <>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 32px)' }}>
              To unsubscribe from our email communications, please enter your email address below.
            </p>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 3vw, 20px)',
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 2.5vw, 20px)',
                  borderRadius: 'clamp(6px, 1vw, 8px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  outline: 'none',
                  backgroundColor: '#fff',
                  color: '#111827',
                }}
              />
              <button type="submit" style={{
                backgroundColor: '#111827',
                color: '#fff',
                fontWeight: '600',
                padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
                border: 'none',
                borderRadius: 'clamp(6px, 1vw, 8px)',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 2vw, 16px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1F2937'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
              >
                Unsubscribe
              </button>
            </form>
          </>
        ) : (
          <div style={{
            backgroundColor: '#F9FAFB',
            padding: 'clamp(24px, 4vw, 32px)',
            borderRadius: 'clamp(8px, 1.5vw, 12px)',
            border: '1px solid #E5E7EB',
          }}>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
              You have been successfully unsubscribed from our email communications. You will no longer receive marketing emails from us.
            </p>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#6B7280', lineHeight: 1.6, textAlign: 'center', marginTop: 'clamp(12px, 2vw, 16px)' }}>
              If you have any questions, please contact us at <a href="mailto:info@infin8automation.com" style={{ color: '#00AA44', textDecoration: 'none' }}>info@infin8automation.com</a>.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

