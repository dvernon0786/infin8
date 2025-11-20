import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Disclaimer() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Legal Disclaimer</h1>
        <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 32px)' }}>
          This platform provides business automation and operational systems. It is not a law firm and does not offer legal, tax, or financial advice. Immigration decisions are made exclusively by USCIS and U.S. consulates. All legal strategy must be handled by a licensed immigration attorney.
        </p>
        
        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Not Legal Advice</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            The information provided on this website and through our services is for general business and automation purposes only. It is not intended to be, and should not be construed as, legal advice, tax advice, or financial advice.
          </p>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            No attorney–client relationship is created by viewing this website, using this platform, or communicating with us through any means. We are not a law firm and do not provide legal representation.
          </p>
        </section>

        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Immigration Matters</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            All visa eligibility determinations and approvals are made exclusively by U.S. Citizenship and Immigration Services (USCIS) and U.S. consular officers. We do not influence, guarantee, or have any control over immigration decisions.
          </p>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            All legal strategy, visa applications, and immigration-related matters must be handled by a licensed immigration attorney. We strongly recommend consulting with qualified legal counsel for all immigration questions and decisions.
          </p>
        </section>

        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Our Services</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            This platform provides business automation and operational systems to help E-2 entrepreneurs operate their businesses more effectively. Our services include:
          </p>
          <ul style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.8, paddingLeft: 'clamp(20px, 3vw, 24px)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Website and funnel page creation</li>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Booking and payment system setup</li>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>CRM integration and management</li>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Automated workflows and communications</li>
            <li style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>Business activity reporting and documentation</li>
          </ul>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6 }}>
            These services are designed to support business operations and provide clean documentation that may be useful to your attorney, but they do not constitute legal advice or legal services.
          </p>
        </section>

        <section style={{ marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'left', backgroundColor: '#F9FAFB', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 'clamp(8px, 1.5vw, 12px)', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>Contact</h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>
            For questions about our services, please contact us at <a href="mailto:info@infin8automation.com" style={{ color: '#00AA44', textDecoration: 'none' }}>info@infin8automation.com</a>.
          </p>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#4B5563', lineHeight: 1.6, textAlign: 'center', marginTop: 'clamp(12px, 2vw, 16px)' }}>
            For legal questions, please consult with a licensed immigration attorney.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

