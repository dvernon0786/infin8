import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BusinessSetup() {
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
        What Business Types Qualify for E-2?
      </h1>
      <p style={{
        fontSize: 18,
        color: '#4B5563',
        marginBottom: 48,
        lineHeight: 1.6,
      }}>
        The type of business you choose affects your chances of E-2 visa approval. Below is a comparison of the most common business paths used by investors.
      </p>

      {/* Business Paths Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: '20px',
        marginBottom: 40,
      }}>
        {[
          {
            title: 'Buy a Franchise',
            description: 'Franchises are the most popular E-2 business choice. Proven model, established brand, faster revenue, and easier USCIS approval.',
            investment: '$150K - $500K',
            approvalTime: '5 - 7 months',
            bestFor: 'First-time owners, risk-averse',
            ctaLink: '/marketplace#franchises',
          },
          {
            title: 'Buy an Existing Business',
            description: 'Buying ongoing businesses offers immediate revenue and proven financials. Suitable for experienced entrepreneurs.',
            investment: '$100K - $1M+',
            approvalTime: '4 - 8 months',
            bestFor: 'Entrepreneurs seeking quicker cash flow',
            ctaLink: '/marketplace#existing-business',
          },
          {
            title: 'Start from Scratch',
            description: 'Building your own business allows full control but requires detailed planning and potentially longer runway.',
            investment: '$50K - $200K',
            approvalTime: '6 - 8 months',
            bestFor: 'Visionaries, tech startups, service businesses',
            ctaLink: '/resources#startup-plans',
          }
        ].map(({ title, description, investment, approvalTime, bestFor, ctaLink }) => (
          <div key={title} style={{
            backgroundColor: '#fff',
            borderRadius: '24px',
            padding: '32px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
          }}
          >
            <h2 style={{
              fontWeight: '600',
              fontSize: 20,
              marginBottom: 12,
              color: '#111827'
            }}>{title}</h2>
            <p style={{
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.6,
            }}>{description}</p>
            <ul style={{
              marginTop: 20,
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.6,
            }}>
              <li><strong>Typical Investment:</strong> {investment}</li>
              <li><strong>Typical Approval Time:</strong> {approvalTime}</li>
              <li><strong>Best For:</strong> {bestFor}</li>
            </ul>
            <a href={ctaLink} style={{
              display: 'inline-block',
              marginTop: 24,
              backgroundColor: '#111827',
              color: '#fff',
              padding: '12px 32px',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              fontSize: 16,
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
              Explore Options
            </a>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 700,
        marginBottom: 48,
        textAlign: 'center',
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Franchise vs. Buy vs. Build Comparison
      </h2>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '24px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        marginBottom: 48,
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#111827',
              color: 'white',
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
              }}>Franchise</th>
              <th style={{
                padding: '16px 24px',
                border: 'none',
                fontWeight: 600,
                fontSize: 14,
              }}>Buy Existing</th>
              <th style={{
                padding: '16px 24px',
                border: 'none',
                fontWeight: 600,
                fontSize: 14,
              }}>Start New</th>
            </tr>
          </thead>
        <tbody>
          {[
            ['Time to Revenue', '3-6 months', 'Immediate', '6-12 months'],
            ['USCIS Approval Odds', 'High', 'High', 'Moderate'],
            ['Typical Investment', '$150K-$500K', '$100K-$1M+', '$50K-$200K'],
            ['Business Plan Complexity', 'Moderate', 'Low', 'High'],
            ['Risk Level', 'Low', 'Moderate', 'High'],
            ['Your Involvement Required', 'High (mandatory training)', 'Moderate', 'Very High'],
          ].map(([factor, franchise, buy, build]) => (
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
              }}>{franchise}</td>
              <td style={{
                padding: '16px 24px',
                color: '#4B5563',
              }}>{buy}</td>
              <td style={{
                padding: '16px 24px',
                color: '#4B5563',
              }}>{build}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Business Types Section */}
      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 700,
        marginBottom: 48,
        textAlign: 'center',
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Business Types Popular with E-2 Investors
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 32,
        marginBottom: 48,
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontWeight: 600,
            fontSize: 20,
            marginBottom: 16,
            color: '#111827',
          }}>Green Light Businesses</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: 20,
            fontSize: 16,
            color: '#4B5563',
            lineHeight: 1.6,
          }}>
            {['Franchises (Subway, Taco Bell, etc.)', 'Restaurants & Cafes', 'Retail Stores', 'Import/Export', 'Consulting Services', 'Cleaning Services', 'Real Estate Management', 'Tech/Software Companies', 'Transportation/Logistics'].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontWeight: 600,
            fontSize: 20,
            marginBottom: 16,
            color: '#111827',
          }}>Yellow Light Businesses</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: 20,
            fontSize: 16,
            color: '#4B5563',
            lineHeight: 1.6,
          }}>
            {['Healthcare Services', 'Beauty/Salon Services', 'Educational Services', 'Entertainment/Events', 'Manufacturing', 'Trading Companies'].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontWeight: 600,
            fontSize: 20,
            marginBottom: 16,
            color: '#111827',
          }}>Red Light Businesses</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: 20,
            fontSize: 16,
            color: '#4B5563',
            lineHeight: 1.6,
          }}>
            {['Financial Consulting/Investment Advisory', 'Law/Legal Services', 'Gambling/Adult Entertainment', 'Weapons/Ammunition', 'Highly speculative businesses'].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Marginality Section */}
      <div style={{
        backgroundColor: '#F9FAFB',
        borderRadius: '24px',
        padding: '48px 32px',
        marginBottom: 48,
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          marginBottom: 24,
          textAlign: 'center',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>
          Understanding Marginality
        </h2>
        <p style={{
          fontSize: 16,
          color: '#4B5563',
          marginBottom: 16,
          lineHeight: 1.6,
        }}>
          USCIS requires your investment to be "substantial" and not "marginal." This means your investment must be meaningful relative to the total cost of the business. For example, investing $5K in a $500K business would be considered marginal, but $150K in the same business would not.
        </p>
        <p style={{
          fontSize: 16,
          color: '#4B5563',
          lineHeight: 1.6,
        }}>
          To avoid marginality issues, invest at least 10-15% of the business value in essential startup costs like equipment, inventory, and leases. Make sure your investment is actively used to fund operations.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <a href="/e2/business-setup/roadmap" style={{
          display: 'inline-block',
          backgroundColor: '#111827',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '12px',
          fontSize: 16,
          fontWeight: '600',
          cursor: 'pointer',
          textDecoration: 'none',
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
          Download E-2 Business Setup Roadmap
        </a>
      </div>
      <Footer />
      </div>
    </div>
  );
}

