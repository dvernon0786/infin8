import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>Privacy Policy</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6 }}>
        At Infin8, your privacy is paramount. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
      </p>
      <section>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32 }}>Information We Collect</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          We collect personal information that you provide when filling forms, subscribing to newsletters, or contacting us. This includes your name, email, country, and any questions or messages you send.
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32 }}>How We Use Your Information</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          Your information is used solely to provide services you request, communicate with you, improve our offerings, and send marketing emails if you opt-in. We do not sell or share your personal information to third parties without your consent.
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32 }}>Third-Party Services</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          We use third-party services including HubSpot (CRM and email automation), Typeform (forms and quizzes), and Google Analytics for tracking website usage. These services adhere to strict privacy standards.
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32 }}>Your Choices</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          You can opt out of marketing emails at any time by clicking the unsubscribe link. You may also request access to the personal data we hold about you or request deletion by contacting us.
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32 }}>Cookies</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          Our website uses cookies to improve user experience, analyze traffic, and for advertising purposes. You can control cookie preferences through your browser settings.
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 32 }}>Contact Us</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          For privacy inquiries or concerns, please contact privacy@infin8.com.
        </p>
      </section>
      <Footer />
      </div>
    </div>
  );
}

