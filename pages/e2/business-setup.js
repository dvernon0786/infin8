import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BusinessSetup() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: 'clamp(64px, 10vw, 80px)' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)', textAlign: 'center' }}>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: 'clamp(16px, 3vw, 24px)',
        color: '#111827',
        letterSpacing: '-0.02em',
        textAlign: 'center',
      }}>
        What Business Types Qualify for E-2?
      </h1>
      <p style={{
        fontSize: 'clamp(16px, 2vw, 18px)',
        color: '#4B5563',
        marginBottom: 'clamp(32px, 6vw, 48px)',
        lineHeight: 1.6,
        textAlign: 'center',
      }}>
        The type of business you choose affects your chances of E-2 visa approval. Below is a comparison of the most common business paths used by investors.
      </p>

      {/* Business Paths Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(clamp(260px, 35vw, 280px),1fr))',
        gap: 'clamp(16px, 2.5vw, 20px)',
        marginBottom: 'clamp(24px, 4vw, 40px)',
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
            padding: 'clamp(24px, 4vw, 32px)',
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
              fontSize: 'clamp(18px, 2.5vw, 20px)',
              marginBottom: 'clamp(10px, 1.5vw, 12px)',
              color: '#111827',
              textAlign: 'center',
            }}>{title}</h2>
            <p style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              color: '#4B5563',
              lineHeight: 1.6,
              textAlign: 'center',
            }}>{description}</p>
            <ul style={{
              marginTop: 'clamp(16px, 2.5vw, 20px)',
              fontSize: 'clamp(14px, 2vw, 16px)',
              color: '#4B5563',
              lineHeight: 1.6,
            }}>
              <li><strong>Typical Investment:</strong> {investment}</li>
              <li><strong>Typical Approval Time:</strong> {approvalTime}</li>
              <li><strong>Best For:</strong> {bestFor}</li>
            </ul>
            <div style={{ textAlign: 'center', marginTop: 'clamp(16px, 3vw, 24px)' }}>
            <a href={ctaLink} style={{
              display: 'inline-block',
              backgroundColor: '#111827',
              color: '#fff',
              padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              fontSize: 'clamp(14px, 2vw, 16px)',
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
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 700,
        marginBottom: 'clamp(32px, 6vw, 48px)',
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
        marginBottom: 'clamp(32px, 6vw, 48px)',
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
              }}>Franchise</th>
              <th style={{
                padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                border: 'none',
                fontWeight: 600,
                fontSize: 'clamp(13px, 1.8vw, 14px)',
              }}>Buy Existing</th>
              <th style={{
                padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                border: 'none',
                fontWeight: 600,
                fontSize: 'clamp(13px, 1.8vw, 14px)',
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
              }}>{franchise}</td>
              <td style={{
                padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                color: '#4B5563',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
              }}>{buy}</td>
              <td style={{
                padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)',
                color: '#4B5563',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
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
        marginBottom: 'clamp(32px, 6vw, 48px)',
        textAlign: 'center',
        color: '#111827',
        letterSpacing: '-0.02em',
      }}>
        Business Types Popular with E-2 Investors
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 35vw, 280px), 1fr))',
        gap: 'clamp(24px, 4vw, 32px)',
        marginBottom: 'clamp(32px, 6vw, 48px)',
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 32px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontWeight: 600,
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            marginBottom: 'clamp(12px, 2vw, 16px)',
            color: '#111827',
          }}>Green Light Businesses</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: 'clamp(16px, 2.5vw, 20px)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#4B5563',
            lineHeight: 1.6,
          }}>
            {['Franchises (Subway, Taco Bell, etc.)', 'Restaurants & Cafes', 'Retail Stores', 'Import/Export', 'Consulting Services', 'Cleaning Services', 'Real Estate Management', 'Tech/Software Companies', 'Transportation/Logistics'].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 32px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontWeight: 600,
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            marginBottom: 'clamp(12px, 2vw, 16px)',
            color: '#111827',
          }}>Yellow Light Businesses</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: 'clamp(16px, 2.5vw, 20px)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#4B5563',
            lineHeight: 1.6,
          }}>
            {['Healthcare Services', 'Beauty/Salon Services', 'Educational Services', 'Entertainment/Events', 'Manufacturing', 'Trading Companies'].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 32px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontWeight: 600,
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            marginBottom: 'clamp(12px, 2vw, 16px)',
            color: '#111827',
          }}>Red Light Businesses</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: 'clamp(16px, 2.5vw, 20px)',
            fontSize: 'clamp(14px, 2vw, 16px)',
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
        padding: 'clamp(32px, 6vw, 48px) clamp(24px, 4vw, 32px)',
        marginBottom: 'clamp(32px, 6vw, 48px)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          marginBottom: 'clamp(16px, 3vw, 24px)',
          textAlign: 'center',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>
          Understanding Marginality
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 2vw, 16px)',
          color: '#4B5563',
          marginBottom: 'clamp(12px, 2vw, 16px)',
          lineHeight: 1.6,
        }}>
          USCIS requires your investment to be "substantial" and not "marginal." This means your investment must be meaningful relative to the total cost of the business. For example, investing $5K in a $500K business would be considered marginal, but $150K in the same business would not.
        </p>
        <p style={{
          fontSize: 'clamp(14px, 2vw, 16px)',
          color: '#4B5563',
          lineHeight: 1.6,
        }}>
          To avoid marginality issues, invest at least 10-15% of the business value in essential startup costs like equipment, inventory, and leases. Make sure your investment is actively used to fund operations.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', marginTop: 'clamp(32px, 6vw, 48px)' }}>
        <a href="/e2/business-setup/roadmap" style={{
          display: 'inline-block',
          backgroundColor: '#111827',
          color: '#fff',
          padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
          borderRadius: '12px',
          fontSize: 'clamp(14px, 2vw, 16px)',
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

