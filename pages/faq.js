import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'Is this a law firm or immigration service?',
    answer: 'No. This platform is not a law firm and does not provide legal advice. All visa-related questions must be handled by a licensed immigration attorney. This system supports business operations only.',
  },
  {
    question: 'Can this guarantee my E-2 Visa will be approved?',
    answer: 'No service can guarantee a visa approval. E-2 decisions are made solely by USCIS or consular officers. This platform helps organize and automate your business, which may support your attorney\'s evidence — but it does not influence immigration decisions.',
  },
  {
    question: 'Do I still need an immigration attorney?',
    answer: 'Yes. This platform works alongside your attorney by providing structured business operations and documentation.',
  },
  {
    question: 'What kinds of businesses does this work for?',
    answer: 'Home services, hospitality, online services, wellness, automotive, retail, and most revenue-generating businesses. If your business needs customers, bookings, or payments, it fits.',
  },
  {
    question: 'Can you set up my LLC or legal structure?',
    answer: 'We do not provide legal or corporate filing services. Your legal team or accountant should handle all filings. This platform supports the operational side afterward.',
  },
  {
    question: 'Where is my data stored?',
    answer: 'On secure cloud infrastructure. Details are included in the Privacy Policy. Only authorized users and support personnel have access.',
  },
  {
    question: 'Is this only for E-2 founders?',
    answer: 'No — while this version focuses on E-2 use cases, the same automation systems apply to other small businesses.',
  },
  {
    question: 'What happens if I cancel?',
    answer: 'Cancellation terms are in the service agreement. Generally, ongoing automations and managed components stop, and access may be limited depending on the package.',
  },
];

export default function FAQ() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: 'clamp(80px, 10vw, 128px)',
        paddingBottom: 'clamp(48px, 8vw, 64px)',
        overflow: 'hidden',
        backgroundColor: '#F9FAFB',
        textAlign: 'center',
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          {/* Subtle gradient overlay */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '-64px',
            width: '672px',
            height: '672px',
            borderRadius: '50%',
            background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.08), rgba(99, 102, 241, 0.04), transparent)',
            filter: 'blur(96px)',
          }}></div>
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
        }}>
          {/* Badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)',
            fontSize: '12px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: 'clamp(16px, 3vw, 24px)',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Help Center
          </span>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(16px, 3vw, 24px)',
            color: '#111827',
            textAlign: 'center',
            lineHeight: 1.2,
          }}>
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: '#4B5563',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            textAlign: 'center',
          }}>
            Common questions about E-2 business automation, our services, and how we support your operations.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 48px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
        <div>
          {faqs.map(({ question, answer }, idx) => (
            <details key={idx} style={{
              backgroundColor: '#F9FAFB',
              padding: 'clamp(12px, 2vw, 16px) clamp(16px, 2.5vw, 20px)',
              borderRadius: 'clamp(6px, 1vw, 8px)',
              marginBottom: 'clamp(12px, 2vw, 16px)',
              boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
            }}>
              <summary style={{ fontSize: 'clamp(16px, 2.2vw, 18px)', fontWeight: '600', cursor: 'pointer', textAlign: 'left' }}>{question}</summary>
              <p style={{ marginTop: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563', textAlign: 'left', lineHeight: 1.6 }}>{answer}</p>
            </details>
          ))}
        </div>

        {/* Disclaimer Block */}
        <div style={{
          marginTop: 'clamp(48px, 8vw, 64px)',
          padding: 'clamp(24px, 4vw, 32px)',
          backgroundColor: '#F9FAFB',
          borderRadius: 'clamp(8px, 1.5vw, 12px)',
          border: '1px solid #E5E7EB',
          textAlign: 'left',
        }}>
          <h3 style={{
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            fontWeight: '600',
            color: '#111827',
            marginBottom: 'clamp(12px, 2vw, 16px)',
          }}>
            Important Notice:
          </h3>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: '#4B5563',
            lineHeight: 1.6,
            marginBottom: 'clamp(8px, 1.5vw, 12px)',
          }}>
            Information on this website is for general business and automation purposes only and is <strong>not legal advice</strong>.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: '#4B5563',
            lineHeight: 1.6,
            marginBottom: 'clamp(8px, 1.5vw, 12px)',
          }}>
            No attorney–client relationship is created by viewing this site or using this platform. Visa eligibility and approvals are determined solely by U.S. government agencies. Consult a licensed immigration attorney for all legal matters.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

