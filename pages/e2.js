import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function E2Hub() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#111827', paddingTop: '80px' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '128px 16px' }}>
      {/* Sidebar Navigation */}
      <aside style={{
        position: 'sticky',
        top: 80,
        width: 220,
        float: 'left',
        marginRight: 40,
        height: '100vh',
        borderRight: '1px solid #E5E7EB',
        paddingRight: 24,
        display: 'none', // Hide on small screens, implement mobile toggle in production
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link href="/e2/eligibility"><a style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '700'
          }}>Eligibility</a></Link>
          <Link href="/e2/requirements"><a style={{ color: '#4B5563' }}>Requirements</a></Link>
          <Link href="/e2/marginality"><a style={{ color: '#4B5563' }}>Marginality</a></Link>
          <Link href="/e2/spouse-work"><a style={{ color: '#4B5563' }}>Spouse & Family</a></Link>
          <Link href="/e2/buy-vs-build"><a style={{ color: '#4B5563' }}>Buy vs. Build</a></Link>
          <Link href="/e2/franchise"><a style={{ color: '#4B5563' }}>Franchise</a></Link>
          <Link href="/e2/treaty-countries"><a style={{ color: '#4B5563' }}>Treaty Countries</a></Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ marginLeft: '260px', minHeight: '80vh' }}>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>E-2 Treaty Investor Visa Hub</h1>
        <p style={{
          fontSize: '18px',
          color: '#4B5563',
          marginBottom: '48px',
          lineHeight: 1.6,
        }}>
          Everything you need to know about the E-2 visa—from eligibility and requirements to business setup and timelines.
        </p>

        {/* Stats Cards */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
        }}>
          {[
            { number: '78', label: 'Treaty Countries' },
            { number: '4-8 Months', label: 'Average Approval Time' },
            { number: '$75K+', label: 'Typical Minimum Investment' },
            { number: '50,000+', label: 'E-2 Visas Approved Annually' },
          ].map(({ number, label }) => (
            <div key={label} style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
              padding: '32px',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 32,
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
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{number}</div>
              <div style={{
                fontWeight: '400',
                fontSize: 16,
                color: '#4B5563',
                marginTop: 8
              }}>{label}</div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Link href="/e2/eligibility"><a style={{
            display: 'inline-block',
            backgroundColor: '#111827',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
            cursor: 'pointer',
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
            Check Your Eligibility
          </a></Link>
        </div>

        {/* Quick Navigation to Subpages */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {[{
            title: 'Start Here: Am I Eligible?',
            link: '/e2/eligibility',
            description: 'Verify if you qualify for the E-2 visa quickly and easily.'
          }, {
            title: 'Investment Requirements & Marginality',
            link: '/e2/marginality',
            description: 'Learn what counts as substantial investment and avoid marginality issues.'
          }, {
            title: 'Spouse & Family Benefits',
            link: '/e2/spouse-work',
            description: 'What benefits E-2 visas provide for your spouse and family.'
          }, {
            title: 'Buy vs. Build a Business',
            link: '/e2/buy-vs-build',
            description: 'Compare buying existing businesses vs starting your own.'
          }, {
            title: 'Franchise Options for E-2',
            link: '/e2/franchise',
            description: 'Explore franchise opportunities optimized for E-2 approval.'
          }, {
            title: 'View All Treaty Countries',
            link: '/e2/treaty-countries',
            description: 'Check the full list of E-2 treaty countries.'
          }].map(({ title, link, description }) => (
            <Link key={title} href={link}><a style={{
              display: 'block',
              backgroundColor: '#fff',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
              borderRadius: '24px',
              padding: '32px',
              color: '#111827',
              fontSize: 16,
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#111827';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#111827';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
              }}
            >
              <h3 style={{ marginBottom: 12, fontSize: 20, fontWeight: 600 }}>{title}</h3>
              <p style={{ fontWeight: '400', color: '#4B5563', lineHeight: 1.6 }}>{description}</p>
            </a></Link>
          ))}
        </section>

        {/* Authority Links */}
        <section style={{
          textAlign: 'center',
          fontSize: 14,
          color: '#4B5563',
          marginBottom: 40,
          paddingTop: 32,
          borderTop: '1px solid #E5E7EB',
        }}>
          <p style={{ marginBottom: 16 }}>Official Resources:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/e-2-treaty-investors" target="_blank" rel="nofollow noreferrer" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              fontWeight: 500,
            }}>
              USCIS E-2 Info
            </a>
            <a href="https://fam.state.gov/fam/09FAM/09FAM040209.html" target="_blank" rel="nofollow noreferrer" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              fontWeight: 500,
            }}>
              State Department FAM 402.9
            </a>
            <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html" target="_blank" rel="nofollow noreferrer" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              fontWeight: 500,
            }}>
              Treaty Countries List
            </a>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
}

