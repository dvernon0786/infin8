import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqsByCategory = {
  Eligibility: [
    {
      question: 'Is there a minimum investment amount for E-2?',
      answer: 'There is no fixed legal minimum, but your investment needs to be substantial relative to your business type, often $75K-$150K.',
    },
    {
      question: 'Which countries qualify for E-2?',
      answer: 'There are currently 78 treaty countries. Use our Treaty Countries page to see if your country qualifies.',
    },
    {
      question: 'Can I have dual citizenship and still qualify?',
      answer: 'Yes, you must be a citizen of one of the treaty countries. Dual citizenship does not disqualify you.',
    },
    {
      question: 'Do I need prior work experience?',
      answer: 'No specific work experience is required for E-2, but you must demonstrate the ability to develop and direct the enterprise.',
    },
    {
      question: 'Can my family members join me?',
      answer: 'Your spouse and unmarried children under 21 can receive derivative E-2 status.',
    },
  ],
  Investment: [
    {
      question: 'Where should my investment money come from?',
      answer: 'Funds must be your own or derived legally from your assets with proper documentation.',
    },
    {
      question: 'Can I borrow money for my investment?',
      answer: 'Yes, loans from family or business partners can qualify if properly documented.',
    },
    {
      question: 'What if my business does not generate immediate profit?',
      answer: 'USCIS understands startups and growth phases; you must show a viable business plan and investment intent.',
    },
    {
      question: 'Can I change the state where my business is registered?',
      answer: 'Yes, but you must update USCIS of significant changes in business operation.',
    },
    {
      question: 'What happens if I sell my business?',
      answer: 'Selling your business can impact your visa status; seek legal advice before any transaction.',
    },
  ],
  BusinessOperations: [
    {
      question: 'Do I need to be physically present daily?',
      answer: 'You must be actively involved, though occasional absences are acceptable if business continues.',
    },
    {
      question: 'Can I delegate management?',
      answer: 'Yes, but you must maintain overall control and significant managerial role.',
    },
    {
      question: 'What if my business has a loss year?',
      answer: 'Losses are reviewed in context; persistent losses may risk your visa status.',
    },
    {
      question: 'Can I work for another company while running my E-2 business?',
      answer: 'No. Your work authorization is tied to your E-2 business only.',
    },
    {
      question: 'How often does USCIS audit E-2 businesses?',
      answer: 'Audits are rare but maintain proper records and compliance.',
    },
  ],
  SpouseFamily: [
    {
      question: 'Can my spouse work with E-2?',
      answer: 'Yes, your spouse can obtain work authorization and work for any employer.',
    },
    {
      question: 'What about my children?',
      answer: 'Unmarried children under 21 can study in the US but not work.',
    },
    {
      question: 'Can spouse apply for green card separately?',
      answer: 'Yes, but this is a separate immigration process.',
    },
    {
      question: 'What if spouse leaves US?',
      answer: 'Spouse absence may affect derivative status; consult your attorney.',
    },
  ],
  VisaStatus: [
    {
      question: 'How long is E-2 valid?',
      answer: 'Typically 2 years, but can be renewed indefinitely if conditions are met.',
    },
    {
      question: 'Can I renew my E-2 visa?',
      answer: 'Yes, filing timely renewals with USCIS or consulate is essential.',
    },
    {
      question: 'What if my business fails?',
      answer: 'Status depends on maintaining investment and business viability; legal advice recommended.',
    },
    {
      question: 'Can I convert to a green card?',
      answer: 'E-2 is nonimmigrant; conversion is possible but requires separate applications.',
    },
  ],
};

export default function FAQ() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 38px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>Frequently Asked Questions</h1>

      {Object.entries(faqsByCategory).map(([category, faqs]) => (
        <section key={category} style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 3vw, 24px)', textTransform: 'capitalize', textAlign: 'center' }}>{category}</h2>
          <div>
            {faqs.map(({ question, answer }, idx) => (
              <details key={idx} style={{
                backgroundColor: '#F9FAFB',
                padding: 'clamp(12px, 2vw, 16px) clamp(16px, 2.5vw, 20px)',
                borderRadius: 'clamp(6px, 1vw, 8px)',
                marginBottom: 'clamp(12px, 2vw, 16px)',
                boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
              }}>
                <summary style={{ fontSize: 'clamp(16px, 2.2vw, 18px)', fontWeight: '600', cursor: 'pointer', textAlign: 'center' }}>{question}</summary>
                <p style={{ marginTop: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563', textAlign: 'center' }}>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
      <Footer />
      </div>
    </div>
  );
}

