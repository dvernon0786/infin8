import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookieNotice() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Cookie Notice</h1>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 32px)' }}>
          This Cookie Notice explains how we use cookies and similar tracking technologies on our website.
        </p>
        
        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>What Are Cookies?</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </section>

        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>How We Use Cookies</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            We use cookies to:
          </p>
          <ul style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.8, paddingLeft: 'clamp(20px, 3vw, 24px)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Improve website functionality and user experience</li>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Analyze website traffic and usage patterns</li>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Remember your preferences and settings</li>
          </ul>
        </section>

        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Managing Cookies</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling cookies may affect the functionality of our website.
          </p>
        </section>

        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Contact</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
            For questions about our use of cookies, please contact us at <a href="mailto:info@infin8automation.com" style={{ color: '#00AA44', textDecoration: 'none' }}>info@infin8automation.com</a>.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

