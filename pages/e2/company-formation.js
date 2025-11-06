import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CompanyFormation() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: 'clamp(64px, 10vw, 80px)' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: 'clamp(16px, 3vw, 24px)',
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Company Formation for Your E-2 Visa Business
      </h1>
      <p style={{
        fontSize: 'clamp(16px, 2vw, 18px)',
        color: '#4B5563',
        marginBottom: 'clamp(32px, 6vw, 48px)',
        lineHeight: 1.6,
      }}>
        Choosing the right business structure and state of incorporation is crucial for your E-2 visa success. Learn the differences and typical timelines.
      </p>

      {/* Entity Type Comparison */}
      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
          LLC vs S-Corp vs C-Corp
        </h2>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          marginBottom: 'clamp(24px, 4vw, 32px)',
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'clamp(14px, 2vw, 16px)',
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#111827',
                color: '#fff',
                textAlign: 'left',
              }}>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                }}>Factor</th>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                }}>LLC (Recommended)</th>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                }}>S-Corp</th>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                }}>C-Corp</th>
              </tr>
            </thead>
          <tbody>
            {[
              ['USCIS Approval Ease', 'High', 'Moderate', 'Low'],
              ['Tax Treatment', 'Pass-through', 'Pass-through with payroll', 'Double taxation'],
              ['Formation Complexity', 'Low', 'Moderate', 'High'],
              ['Common Use', 'E-2 visas, small businesses', 'Profitable businesses', 'Large corporations'],
              ['Annual Costs', 'Low ($50-$200)', 'Moderate ($1,500+ accounting)', 'High ($2,000+ accounting)'],
            ].map(([factor, llc, scorp, ccorp]) => (
              <tr key={factor} style={{
                borderBottom: '1px solid #E5E7EB',
              }}>
                <td style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  fontWeight: '600',
                  color: '#111827',
                  backgroundColor: '#F9FAFB',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}>{factor}</td>
                <td style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  color: '#4B5563',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}>{llc}</td>
                <td style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  color: '#4B5563',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}>{scorp}</td>
                <td style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                  color: '#4B5563',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}>{ccorp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <p style={{
          fontSize: 'clamp(14px, 2vw, 16px)',
          fontWeight: '600',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginTop: 'clamp(16px, 3vw, 24px)',
        }}>
          LLCs are the most common and recommended choice for E-2 visa applicants due to simplicity and USCIS familiarity.
        </p>
      </section>

      {/* State Selection Guide */}
      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
          Choosing Your State of Incorporation
        </h2>
        <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#555', marginBottom: 'clamp(16px, 2.5vw, 20px)' }}>
          Where you form your company impacts taxes, costs, and legal compliance. Most investors choose their business's physical location state or Delaware for flexibility.
        </p>

        <ul style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', paddingLeft: 'clamp(16px, 2.5vw, 20px)', marginBottom: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.8 }}>
          <li><strong>Delaware:</strong> Business-friendly laws, privacy, no sales tax; add registration fees if operating out-of-state.</li>
          <li><strong>Nevada:</strong> No corporate tax, privacy, relatively low fees.</li>
          <li><strong>Your Business State:</strong> Recommended for brick-and-mortar businesses for local compliance.</li>
          <li><strong>Examples:</strong> California ($800/year min tax), Texas (no state income tax), Florida (no state income tax), New York (franchise tax applies).</li>
        </ul>

        <a href="/contact" style={{
          display: 'inline-block',
          backgroundColor: '#111827',
          color: '#fff',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          fontWeight: '600',
          fontSize: 'clamp(14px, 2vw, 16px)',
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          textDecoration: 'none',
          cursor: 'pointer',
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
          Connect with a Formation Partner
        </a>
      </section>

      {/* Timeline & Costs */}
      <section style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
          Formation Timeline & Costs
        </h2>
        <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#555', marginBottom: 'clamp(16px, 2.5vw, 20px)' }}>
          Typical company formation steps and estimated timelines:
        </p>
        <ol style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', paddingLeft: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.8 }}>
          <li>Choose entity and state: 1-2 days</li>
          <li>Submit formation documents: 1 day</li>
          <li>Approval by state: 3-7 business days</li>
          <li>Get Employer Identification Number (EIN) from IRS: same day to 2 weeks</li>
          <li>Open business bank account: 1-3 days</li>
        </ol>
        <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#555', marginTop: 'clamp(16px, 2.5vw, 20px)' }}>
          <strong>Estimated costs:</strong> $150-$500 initial fees including state, agent, and EIN processing.
        </p>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: 'center',
        marginBottom: 'clamp(40px, 6vw, 60px)',
      }}>
        <a href="/contact" style={{
          backgroundColor: '#111827',
          color: '#fff',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: 'clamp(10px, 1.5vw, 12px)',
          fontWeight: '600',
          fontSize: 'clamp(14px, 2vw, 16px)',
          textDecoration: 'none',
          cursor: 'pointer',
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
          Connect with Formation & Legal Experts
        </a>
      </section>
      <Footer />
      </div>
    </div>
  );
}

