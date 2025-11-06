import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [primaryButtonHovered, setPrimaryButtonHovered] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: 'clamp(80px, 10vw, 128px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)',
        overflow: 'hidden',
        minHeight: '100vh',
      }}>
        {/* Background Video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}>
          <video
            src="https://cdn.midjourney.com/video/af6b100b-cd15-4257-b845-8a5388a23f1b/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}>
          {/* Ripple background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            backgroundColor: 'rgba(255,255,255,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 'clamp(800px, 100vw, 1600px)',
              height: 'clamp(800px, 100vw, 1600px)',
              borderRadius: '50%',
              background: `
                radial-gradient(circle at 50% 60%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 18%, rgba(0,0,0,0.02) 26%, rgba(0,0,0,0) 30%),
                radial-gradient(circle at 50% 60%, rgba(0,0,0,0.06) 34%, rgba(0,0,0,0) 38%),
                radial-gradient(circle at 50% 60%, rgba(0,0,0,0.04) 44%, rgba(0,0,0,0) 48%),
                radial-gradient(circle at 50% 60%, rgba(0,0,0,0.03) 54%, rgba(0,0,0,0) 58%)
              `,
              filter: 'blur(6px)',
              opacity: 0.35,
              maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
              transform: 'translateY(6vh) scaleX(1.25)',
            }}></div>
          </div>

          {/* Orb + content */}
          <div style={{
            position: 'relative',
            aspectRatio: '1',
            display: 'flex',
            width: 'clamp(280px, 90vw, 768px)',
            maxWidth: '768px',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}>
            {/* Orb */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)',
              filter: 'blur(64px)',
              background: `
                radial-gradient(120% 120% at 30% 25%, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 55%, rgba(230,230,230,0.9) 100%),
                radial-gradient(60% 60% at 65% 70%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)
              `,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              transform: 'scale(1.0)',
              zIndex: 1,
            }}>
              {/* Crystal glow effect inside orb */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.4) 0%, rgba(150, 100, 255, 0.3) 30%, rgba(255, 150, 200, 0.2) 60%, transparent 80%)',
                  animation: 'crystalGlow 4s ease-in-out infinite alternate',
                }}></div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 70% 60%, rgba(255, 200, 100, 0.3) 0%, rgba(100, 255, 200, 0.25) 40%, transparent 70%)',
                  animation: 'crystalGlow2 3s ease-in-out infinite alternate-reverse',
                }}></div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 50% 10%, rgba(200, 100, 255, 0.2) 0%, rgba(100, 255, 150, 0.15) 50%, transparent 80%)',
                  animation: 'crystalGlow3 5s ease-in-out infinite',
                }}></div>
              </div>
            </div>

            {/* Orb specular highlights */}
            <div style={{
              pointerEvents: 'none',
              position: 'absolute',
              top: 'clamp(-12px, -2vw, -24px)',
              left: 'clamp(20px, 4vw, 40px)',
              width: 'clamp(80px, 16vw, 160px)',
              height: 'clamp(80px, 16vw, 160px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0) 70%)',
              filter: 'blur(4px)',
              opacity: 0.85,
              zIndex: 2,
            }}></div>
            <div style={{
              pointerEvents: 'none',
              position: 'absolute',
              bottom: 'clamp(20px, 4vw, 40px)',
              right: 'clamp(28px, 5vw, 56px)',
              width: 'clamp(48px, 9vw, 96px)',
              height: 'clamp(48px, 9vw, 96px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0) 70%)',
              filter: 'blur(6px)',
              opacity: 0.8,
              zIndex: 2,
            }}></div>

            {/* Content */}
            <div style={{
              position: 'relative',
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              padding: 'clamp(16px, 4vw, 32px) clamp(16px, 3vw, 24px)',
              gap: 'clamp(24px, 6vw, 48px)',
              alignItems: 'center',
            }}>
              {/* Pill Badge */}
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
                marginBottom: '16px',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
                  <path d="M20 2v4"/>
                  <path d="M22 4h-4"/>
                  <circle cx="4" cy="20" r="2"/>
                </svg>
                U.S. Visa Startup Support
              </span>

              {/* Brand + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <h1 style={{
                  fontSize: 'clamp(48px, 6vw, 60px)',
                  fontWeight: '600',
                  color: '#111827',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>
                  SMARTER AI SOLUTIONS
                </h1>
              </div>

              {/* Subcopy */}
              <p style={{
                marginTop: '12px',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#4B5563',
                maxWidth: '600px',
                lineHeight: 1.5,
                fontWeight: 400,
              }}>
                Custom AI solutions, built for the innovators of tomorrow
              </p>

              {/* CTAs */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: 'clamp(16px, 3vw, 24px)',
                alignItems: 'center',
                width: '100%',
                maxWidth: '500px',
              }}>
                <a
                  href="/e2/eligibility"
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    borderRadius: '9999px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: '600',
                    color: '#fff',
                    background: 'rgba(17, 24, 39, 0.95)',
                    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    boxShadow: primaryButtonHovered 
                      ? '0 0 0 1px rgba(56,189,248,0.35), 0 40px 80px rgba(56,189,248,0.18)'
                      : '0 0 0 1px rgba(56,189,248,0.25), inset 0 0 0 1px rgba(255,255,255,0.08), 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
                    textDecoration: 'none',
                    zIndex: 2,
                    width: '100%',
                  }}
                  onMouseEnter={() => setPrimaryButtonHovered(true)}
                  onMouseLeave={() => setPrimaryButtonHovered(false)}
                >
                  <span style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    transform: primaryButtonHovered ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 0.3s',
                  }}>Start Eligibility Quiz</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={{ 
                      position: 'relative', 
                      zIndex: 1, 
                      color: 'rgb(224, 242, 254)',
                      transform: primaryButtonHovered ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'transform 0.3s',
                      flexShrink: 0,
                    }}
                  >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                  {/* Gradient overlay - opacity on hover */}
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '9999px',
                    opacity: primaryButtonHovered ? 1 : 0,
                    pointerEvents: 'none',
                    background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)',
                    transition: 'opacity 0.3s',
                    animation: primaryButtonHovered ? 'pulse 2s ease-in-out infinite' : 'none',
                  }}></span>
                  {/* Radial gradient overlay - always visible */}
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '9999px',
                    pointerEvents: 'none',
                    boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)',
                    background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)',
                  }}></span>
                  {/* White highlight overlay - always visible */}
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '9999px',
                    pointerEvents: 'none',
                    background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)',
                  }}></span>
                </a>
                <a
                  href="/contact"
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '14em',
                    height: 'clamp(2.5em, 5vw, 3em)',
                    borderRadius: '30em',
                    fontSize: 'clamp(13px, 2vw, 15px)',
                    fontFamily: 'inherit',
                    border: 'none',
                    overflow: 'hidden',
                    zIndex: 1,
                    boxShadow: '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff',
                    backgroundColor: '#fff',
                    color: buttonHovered ? '#fff' : '#111827',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.5s ease-in-out',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>Book Consultation</span>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: buttonHovered ? '100%' : '0',
                    borderRadius: '30em',
                    background: 'linear-gradient(to right, #881BB6, #E1A4FF)',
                    transition: 'width 0.5s ease-in-out',
                    zIndex: -1,
                  }}></div>
                </a>
              </div>
            </div>

            {/* Soft ground shadow under orb */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70%',
              height: '16%',
              borderRadius: '50%',
              zIndex: 0,
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0) 70%)',
              filter: 'blur(18px)',
              opacity: 0.25,
            }}></div>
          </div>
        </div>

      </section>

      {/* Value Proposition Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>
          Why E-2 Visas Are Different
        </h2>
        <ul style={{
          listStyle: 'none',
          paddingLeft: 0,
          maxWidth: '680px',
          margin: '0 auto',
          fontSize: '18px',
          color: '#4B5563',
          lineHeight: '1.6',
          fontWeight: 400,
        }}>
          {[
            'Active management — You manage your business day-to-day (no passive investment).',
            'Live and work in the United States through your business.',
            'Spouse work benefit — Your spouse can work anywhere in the U.S.',
            'No permanent residency requirement — Stay as long as your business operates.',
            'Faster than EB-5 — Typically approved in 4 to 8 months versus years.',
          ].map((point, i) => (
            <li key={i} style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L5 13" stroke="#667eea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Our Role Section */}
      <section style={{
        backgroundColor: '#F9FAFB',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          marginBottom: 'clamp(32px, 6vw, 48px)',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>
          Our Role: Your Bridge to Success
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 30vw, 320px), 1fr))',
          maxWidth: 1280,
          margin: '0 auto',
          gap: 'clamp(24px, 4vw, 32px)',
          justifyContent: 'center',
        }}>
          {/* Card: Eligibility Check */}
          <div style={{
            backgroundColor: '#fff',
            padding: 'clamp(24px, 4vw, 32px)',
            borderRadius: '24px',
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
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 20 }}>
              <path d="M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47714 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#667eea" strokeWidth="2"/>
              <path d="M9 12.75L11 14.5L15 10" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600 }}>
              Eligibility Check
            </h3>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6 }}>
              We verify you meet treaty and investment requirements, so there are no surprises during your application.
            </p>
          </div>

          {/* Card: Business Matching */}
          <div style={{
            backgroundColor: '#fff',
            padding: '32px',
            borderRadius: '24px',
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
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 20 }} viewBox="0 0 24 24">
              <path d="M3 3L21 21" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="9" r="7" stroke="#667eea" strokeWidth="2"/>
              <path d="M9 5V9L12 12" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600 }}>
              Business Matching
            </h3>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6 }}>
              We match you with franchise, acquisition, or startup options tailored for E-2 visa success.
            </p>
          </div>

          {/* Card: Partner Network */}
          <div style={{
            backgroundColor: '#fff',
            padding: '32px',
            borderRadius: '24px',
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
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 20 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.9719 22 15.822 21.3642 17.2654 20.29" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 14C19.6569 14 21 12.6569 21 11C21 9.34315 19.6569 8 18 8C16.3431 8 15 9.34315 15 11C15 12.6569 16.3431 14 18 14Z" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 8L12 12L9 15" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600 }}>
              Partner Network
            </h3>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6 }}>
              Connect with vetted immigration attorneys, formation services, and business brokers through our trusted network.
            </p>
          </div>
        </div>
        <button style={{
          marginTop: 'clamp(32px, 6vw, 48px)',
          backgroundColor: '#111827',
          color: '#fff',
          fontWeight: 600,
          padding: 'clamp(10px, 2vw, 12px) clamp(24px, 4vw, 32px)',
          fontSize: 'clamp(14px, 2vw, 16px)',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1F2937';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#111827';
        }}
          onClick={() => {
            // scroll or open quiz modal
          }}
        >
          Get Started
        </button>
      </section>

      {/* Timeline Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        backgroundColor: '#fff',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '700',
          color: '#111827',
          marginBottom: 'clamp(32px, 6vw, 48px)',
          letterSpacing: '-0.02em',
        }}>
          The E-2 Path (Step-by-Step)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 20vw, 200px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
        }}>
          {[
            { number: 1, title: 'Verify Eligibility', desc: 'Your country + investment' },
            { number: 2, title: 'Choose Business Type', desc: 'Franchise vs. Acquisition vs. Startup' },
            { number: 3, title: 'Form Company', desc: 'LLC formation, bank accounts, contracts' },
            { number: 4, title: 'Gather Documentation', desc: 'Business plan, investment proof, tax docs' },
            { number: 5, title: 'File E-2 Application', desc: 'Interview + consulate approval' },
            { number: 6, title: 'Launch your business', desc: 'Move to US + operate' },
          ].map(({ number, title, desc }) => (
            <div key={number} style={{
              backgroundColor: '#F9FAFB',
              borderRadius: '24px',
              padding: 'clamp(20px, 3vw, 24px)',
              boxSizing: 'border-box',
              textAlign: 'center',
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
              <div style={{
                fontSize: 28,
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 12,
              }}>{number}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: '#111827' }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
        <p style={{
          marginTop: 40,
          fontStyle: 'italic',
          textAlign: 'center',
          color: '#6B7280',
          fontSize: 14,
        }}>
          Typically 4-8 months after setup.
        </p>
      </section>

      {/* Social Proof Section */}
      <section style={{
        backgroundColor: '#F9FAFB',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: 1280,
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: 'clamp(32px, 6vw, 64px) clamp(24px, 5vw, 48px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: 24,
            color: '#111827',
            letterSpacing: '-0.02em',
          }}>
            Trusted by E-2 Visa Holders Worldwide
          </h2>

          <blockquote style={{
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1.6,
            color: '#111827',
            marginBottom: 20,
          }}>
            "I had no idea where to start. The eligibility quiz made it clear I qualified, and within a week I was connected with an amazing immigration attorney. Six months later, I had my E-2 approval. Game-changing."
          </blockquote>

          <footer style={{
            fontWeight: 600,
            fontSize: 16,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Kenji T. — Japan, Fine Dining Restaurant, Miami, FL
          </footer>
        </div>
      </section>

      {/* Country Selector Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          marginBottom: 'clamp(16px, 3vw, 24px)',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>
          Ready to explore your country's specific visa timeline?
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          marginBottom: 'clamp(32px, 6vw, 48px)',
          color: '#4B5563',
          lineHeight: 1.6,
        }}>
          E-2 visa timelines and consulate requirements vary by country. Select yours below.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(16px, 3vw, 24px)',
          flexWrap: 'wrap',
        }}>
          {[
            { flag: '🇯🇵', name: 'Japan', link: '/country/jp/e2' },
            { flag: '🇲🇽', name: 'Mexico', link: '/country/mx/e2' },
            { flag: '🇪🇸', name: 'Spain', link: '/country/es/e2' },
            { flag: '🇬🇧', name: 'United Kingdom', link: '/country/uk/e2' },
            { flag: '🇨🇦', name: 'Canada', link: '/country/ca/e2' },
          ].map(({ flag, name, link }) => (
            <a key={name} href={link} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'clamp(16px, 3vw, 24px)',
              borderRadius: '24px',
              background: '#fff',
              fontSize: 'clamp(24px, 4vw, 28px)',
              color: '#111827',
              textDecoration: 'none',
              width: 'clamp(100px, 20vw, 140px)',
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
              <span>{flag}</span>
              <span style={{ marginTop: 12, fontWeight: 600, fontSize: 16 }}>{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section style={{
        backgroundColor: '#F9FAFB',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          color: '#111827',
          marginBottom: 'clamp(32px, 6vw, 48px)',
          textAlign: 'center',
          letterSpacing: '-0.02em',
        }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 clamp(16px, 4vw, 0)' }}>
          {/* Example Accordion FAQ Items */}
          {[{
            q: 'Is there a minimum investment amount for E-2?',
            a: 'Most applicants invest $75K–$150K as a substantial amount, but USCIS has no fixed minimum. The key is proving the investment is viable and non-marginal.'
          }, {
            q: 'Can my spouse work while I have an E-2 visa?',
            a: 'Yes, your spouse gets derivative status and can work anywhere in the U.S. without restrictions.'
          }, {
            q: 'How long does E-2 visa approval typically take?',
            a: 'Average processing time is 4-6 months, depending on consulate workload and application completeness.'
          }, {
            q: 'Is it better to buy an existing business or start from scratch?',
            a: 'Buying established businesses is often faster and lower risk. Startups offer more control but require detailed business planning.'
          }, {
            q: 'What happens if my E-2 business fails?',
            a: 'Your visa depends on business viability. If your business fails, status could be at risk unless you make a timely application amendment or renewal.'
          }].map(({ q, a }, idx) => (
            <details key={idx} style={{
              backgroundColor: '#fff',
              padding: 'clamp(20px, 3vw, 24px) clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              marginBottom: 'clamp(12px, 2vw, 16px)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            }}>
              <summary style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                color: '#111827',
              }}>{q}</summary>
              <p style={{ marginTop: 12, fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563', lineHeight: 1.6 }}>{a}</p>
            </details>
          ))}
          <a href="/faq" style={{
            display: 'inline-block',
            marginTop: 24,
            fontWeight: 600,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            See All FAQs
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

