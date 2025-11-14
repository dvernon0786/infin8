import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Terms of Service</h1>
      <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
        Welcome to Infin8. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
      </p>
      <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>Use of Our Services</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          Our platform provides lead generation and referral services connecting E-2 visa investors to third-party immigration and business service providers. We do not provide legal advice, immigration consultation, or guarantee visa approval.
        </p>
      </section>
      <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>Intellectual Property</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          All content, trademarks, and materials on this website are the property of Infin8 and its licensors. Unauthorized use is prohibited.
        </p>
      </section>
      <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>Limitation of Liability</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          Infin8 is not liable for any damages resulting from the use or inability to use our services. We do not provide visa guarantees and disclaim any responsibility for third-party services.
        </p>
      </section>
      <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>Changes to Terms</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          We reserve the right to modify these terms at any time without prior notice. Continued use of the website constitutes acceptance of updated terms.
        </p>
      </section>
      <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>Contact Information</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
          For questions regarding these terms, please contact support@infin8.com.
        </p>
      </section>
      <Footer />
      </div>
    </div>
  );
}

