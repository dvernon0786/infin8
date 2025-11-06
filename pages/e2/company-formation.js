import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CompanyFormation() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: '80px' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '128px 16px' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: 24,
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Company Formation for Your E-2 Visa Business
      </h1>
      <p style={{
        fontSize: 18,
        color: '#4B5563',
        marginBottom: 48,
        lineHeight: 1.6,
      }}>
        Choosing the right business structure and state of incorporation is crucial for your E-2 visa success. Learn the differences and typical timelines.
      </p>

      {/* Entity Type Comparison */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>
          LLC vs S-Corp vs C-Corp
        </h2>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          marginBottom: 32,
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 16,
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#111827',
                color: '#fff',
                textAlign: 'left',
              }}>
                <th style={{
                  padding: '16px 24px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 14,
                }}>Factor</th>
                <th style={{
                  padding: '16px 24px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 14,
                }}>LLC (Recommended)</th>
                <th style={{
                  padding: '16px 24px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 14,
                }}>S-Corp</th>
                <th style={{
                  padding: '16px 24px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 14,
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
                  padding: '16px 24px',
                  fontWeight: '600',
                  color: '#111827',
                  backgroundColor: '#F9FAFB',
                }}>{factor}</td>
                <td style={{
                  padding: '16px 24px',
                  color: '#4B5563',
                }}>{llc}</td>
                <td style={{
                  padding: '16px 24px',
                  color: '#4B5563',
                }}>{scorp}</td>
                <td style={{
                  padding: '16px 24px',
                  color: '#4B5563',
                }}>{ccorp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <p style={{
          fontSize: 16,
          fontWeight: '600',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginTop: 24,
        }}>
          LLCs are the most common and recommended choice for E-2 visa applicants due to simplicity and USCIS familiarity.
        </p>
      </section>

      {/* State Selection Guide */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>
          Choosing Your State of Incorporation
        </h2>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 20 }}>
          Where you form your company impacts taxes, costs, and legal compliance. Most investors choose their business's physical location state or Delaware for flexibility.
        </p>

        <ul style={{ fontSize: 16, color: '#444', paddingLeft: 20, marginBottom: 20 }}>
          <li><strong>Delaware:</strong> Business-friendly laws, privacy, no sales tax; add registration fees if operating out-of-state.</li>
          <li><strong>Nevada:</strong> No corporate tax, privacy, relatively low fees.</li>
          <li><strong>Your Business State:</strong> Recommended for brick-and-mortar businesses for local compliance.</li>
          <li><strong>Examples:</strong> California ($800/year min tax), Texas (no state income tax), Florida (no state income tax), New York (franchise tax applies).</li>
        </ul>

        <a href="/contact" style={{
          display: 'inline-block',
          backgroundColor: '#111827',
          color: '#fff',
          padding: '12px 32px',
          fontWeight: '600',
          fontSize: 16,
          borderRadius: '12px',
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
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>
          Formation Timeline & Costs
        </h2>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 20 }}>
          Typical company formation steps and estimated timelines:
        </p>
        <ol style={{ fontSize: 16, color: '#444', paddingLeft: 20 }}>
          <li>Choose entity and state: 1-2 days</li>
          <li>Submit formation documents: 1 day</li>
          <li>Approval by state: 3-7 business days</li>
          <li>Get Employer Identification Number (EIN) from IRS: same day to 2 weeks</li>
          <li>Open business bank account: 1-3 days</li>
        </ol>
        <p style={{ fontSize: 16, color: '#555', marginTop: 20 }}>
          <strong>Estimated costs:</strong> $150-$500 initial fees including state, agent, and EIN processing.
        </p>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: 'center',
        marginBottom: 60,
      }}>
        <a href="/contact" style={{
          backgroundColor: '#111827',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '12px',
          fontWeight: '600',
          fontSize: 16,
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

