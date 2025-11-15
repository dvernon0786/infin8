import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  { id: 1, title: 'How Much Investment Does the E-2 Visa Require?', slug: '/blog/e2-investment-amount', excerpt: 'Learn the true minimum investment required and how to properly document your funds.' },
  { id: 2, title: 'E-2 Visa Approval Timeline by Consulate', slug: '/blog/e2-timeline', excerpt: 'Typical processing times by US embassy consulate locations explained.' },
  { id: 3, title: 'Franchise vs Buy vs Build: Which Business Is Right?', slug: '/blog/franchise-vs-buy-vs-build', excerpt: 'Compare the most common business paths for E-2 investors.' },
  { id: 4, title: 'Common E-2 Visa Mistakes to Avoid', slug: '/blog/e2-common-mistakes', excerpt: 'Avoid pitfalls that lead to application denials.' },
  { id: 5, title: 'Understanding Marginality for E-2 Visa Applicants', slug: '/blog/e2-marginality', excerpt: 'What does substantial investment really mean?' }
];

const tools = [
  { id: 1, name: 'E-2 Investment Calculator', description: 'Calculate the required investment for your business model.', link: '/tools/investment-calculator' },
  { id: 2, name: 'Treaty Country Checker', description: 'Check if your country qualifies for the E-2 visa.', link: '/tools/treaty-checker' },
  { id: 3, name: 'Business Type Matcher', description: 'Find which business type fits your profile.', link: '/quiz' },
];

const gatedResources = [
  { id: 1, title: 'E-2 Business Setup Roadmap PDF', link: '/downloads/e2-business-setup-roadmap.pdf' },
  { id: 2, title: 'Country Specific Checklists', link: '/downloads/country-checklists.zip' },
  { id: 3, title: 'Franchise Selection Guide', link: '/downloads/franchise-selection-guide.pdf' },
  { id: 4, title: 'Investment Source Documentation Template', link: '/downloads/investment-documentation-template.pdf' },
];

export default function Resources() {
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
          maxWidth: '1200px',
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
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Resources & Tools
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
            Resources & Tools
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: '#4B5563',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
            textAlign: 'center',
          }}>
            Explore our comprehensive guides, interactive tools, and premium resources to help you succeed.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: 'clamp(32px, 5vw, 40px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>

      {/* Blog Section */}
      <section style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 2.5vw, 20px)', textAlign: 'center' }}>Recent Blog Posts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 400px), 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
          {blogPosts.map(({ id, title, slug, excerpt }) => (
            <a href={slug} key={id} style={{
              padding: 'clamp(16px, 2.5vw, 20px)',
              backgroundColor: '#F9FAFB',
              borderRadius: 'clamp(10px, 1.5vw, 12px)',
              textDecoration: 'none',
              color: '#1A1A1A',
              boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
              display: 'block'
            }}>
              <h3 style={{ fontWeight: 700, fontSize: 'clamp(20px, 2.8vw, 22px)' }}>{title}</h3>
              <p style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>{excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 2.5vw, 20px)', textAlign: 'center' }}>Interactive Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 16px)' }}>
          {tools.map(({ id, name, description, link }) => (
            <a href={link} key={id} style={{
              flex: '1 1 clamp(260px, 35vw, 280px)',
              padding: 'clamp(16px, 2.5vw, 20px)',
              backgroundColor: '#E6F4EA',
              borderRadius: 'clamp(10px, 1.5vw, 12px)',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
              fontWeight: 600,
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              display: 'block',
            }}>
              <h3 style={{ marginBottom: 'clamp(6px, 1vw, 8px)' }}>{name}</h3>
              <p style={{ fontWeight: 400, fontSize: 'clamp(14px, 1.8vw, 16px)' }}>{description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Gated Resources Section */}
      <section style={{ marginBottom: 'clamp(32px, 6vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'clamp(16px, 2.5vw, 20px)', textAlign: 'center' }}>Premium Guides & Checklists</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {gatedResources.map(({ id, title, link }) => (
            <li key={id} style={{
              marginBottom: 'clamp(16px, 2.5vw, 20px)',
              backgroundColor: '#F9FAFB',
              padding: 'clamp(12px, 2vw, 16px)',
              borderRadius: 'clamp(10px, 1.5vw, 12px)',
              boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
            }}>
              <a
                href={link}
                onClick={(e) => {
                  e.preventDefault();
                  // Trigger modal email capture here before download
                }}
                style={{
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 2.2vw, 18px)',
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ Archive Link */}
      <section style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <a href="/faq" style={{
          fontWeight: 600,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: 'clamp(16px, 2.2vw, 18px)',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Browse Full FAQ Archive
        </a>
      </section>
      <Footer />
      </div>
    </div>
  );
}

