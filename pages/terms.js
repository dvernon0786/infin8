import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Terms of Service</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
        Welcome to Infin8. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
      </p>
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32, textAlign: 'center' }}>Use of Our Services</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
          Our platform provides lead generation and referral services connecting E-2 visa investors to third-party immigration and business service providers. We do not provide legal advice, immigration consultation, or guarantee visa approval.
        </p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32, textAlign: 'center' }}>Intellectual Property</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
          All content, trademarks, and materials on this website are the property of Infin8 and its licensors. Unauthorized use is prohibited.
        </p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32, textAlign: 'center' }}>Limitation of Liability</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
          Infin8 is not liable for any damages resulting from the use or inability to use our services. We do not provide visa guarantees and disclaim any responsibility for third-party services.
        </p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32, textAlign: 'center' }}>Changes to Terms</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
          We reserve the right to modify these terms at any time without prior notice. Continued use of the website constitutes acceptance of updated terms.
        </p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32, textAlign: 'center' }}>Contact Information</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
          For questions regarding these terms, please contact support@infin8.com.
        </p>
      </section>
      <Footer />
      </div>
    </div>
  );
}

