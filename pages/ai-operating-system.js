import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AIOperatingSystem() {
  const [primaryButtonHovered, setPrimaryButtonHovered] = useState(false);
  const [secondaryButtonHovered, setSecondaryButtonHovered] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('starter'); // Pricing plan selection
  const [funnelStep, setFunnelStep] = useState(1);
  const [funnelData, setFunnelData] = useState({
    businessType: '',
    timeWaster: '',
    hoursWanted: '',
    struggles: [],
    automateFirst: '',
    whenSolved: ''
  });
  const [recommendedPlan, setRecommendedPlan] = useState('starter');

  const handleFunnelNext = () => {
    if (funnelStep < 6) {
      setFunnelStep(funnelStep + 1);
    } else {
      // Calculate recommendation based on answers
      if (funnelData.struggles.length > 3 || funnelData.hoursWanted === '20+') {
        setRecommendedPlan('pro');
      } else if (funnelData.whenSolved === 'ASAP' || funnelData.whenSolved === 'This week') {
        setRecommendedPlan('starter');
      } else {
        setRecommendedPlan('freedom');
      }
      setFunnelStep(7); // Show results
    }
  };

  const handleFunnelBack = () => {
    if (funnelStep > 1) {
      setFunnelStep(funnelStep - 1);
    }
  };

  const handleStruggleToggle = (struggle) => {
    setFunnelData(prev => ({
      ...prev,
      struggles: prev.struggles.includes(struggle)
        ? prev.struggles.filter(s => s !== struggle)
        : [...prev.struggles, struggle]
    }));
  };

  return (
    <>
      <Head>
        <title>AI Operating System — Your Entire Business, Automated in 30 Days</title>
        <meta name="description" content="AI systems built for the little guy. No fluff. No jargon. Just more money, fewer headaches. Get your entire business automated in 30 days." />
      </Head>
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />

        {/* Section 1: Hero Panel */}
        <section style={{
          position: 'relative',
          paddingTop: 'clamp(80px, 10vw, 128px)',
          paddingBottom: 'clamp(40px, 8vw, 80px)',
          overflow: 'hidden',
          minHeight: '100vh',
          textAlign: 'center',
          backgroundColor: '#0A0A0A',
        }}>
          {/* Black and Teal Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
              #0A0A0A
            `,
          }}></div>

          {/* Teal accent lines */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent, #14B8A6, transparent)',
            opacity: 0.3,
            zIndex: 1,
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent, #14B8A6, transparent)',
            opacity: 0.3,
            zIndex: 1,
          }}></div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(16px, 4vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}>
            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: 'clamp(24px, 4vw, 32px)',
            }}>
              Your Entire Business, Automated in 30 Days
            </h1>

            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              color: '#14B8A6',
              lineHeight: 1.5,
              marginBottom: 'clamp(32px, 5vw, 48px)',
              maxWidth: '700px',
              fontWeight: 400,
            }}>
              AI systems built for the little guy. No fluff. No jargon. Just more money, fewer headaches.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 'clamp(12px, 2vw, 16px)',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '12px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  background: '#14B8A6',
                  padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(20, 184, 166, 0.3)',
                }}
                onMouseEnter={() => setPrimaryButtonHovered(true)}
                onMouseLeave={() => setPrimaryButtonHovered(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0D9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(20, 184, 166, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#14B8A6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(20, 184, 166, 0.3)';
                }}
              >
                Get My AI Operating System
              </a>
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '12px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                  color: '#fff',
                  background: 'transparent',
                  border: '2px solid #14B8A6',
                  padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Compare Plans
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Micro Explainer */}
        <section style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
          }}>
            {/* Column 1 */}
            <div style={{
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <h3 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 600,
                color: '#111827',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}>
                We Build the Entire System
              </h3>
              <p style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#4B5563',
                lineHeight: 1.6,
              }}>
                Your website, CRM, booking system, review engine, automations, everything.
              </p>
            </div>

            {/* Column 2 */}
            <div style={{
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <h3 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 600,
                color: '#111827',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}>
                We Run It for You
              </h3>
              <p style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#4B5563',
                lineHeight: 1.6,
              }}>
                We update, monitor, fix, and optimize.
              </p>
            </div>

            {/* Column 3 */}
            <div style={{
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <h3 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 600,
                color: '#111827',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}>
                You Grow Without Working More
              </h3>
              <p style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#4B5563',
                lineHeight: 1.6,
              }}>
                More revenue, less chaos, more freedom.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Pricing Plans */}
        <section id="pricing" style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          backgroundColor: '#0A0A0A',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background decor */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: 'clamp(400px, 60vw, 800px)',
            height: 'clamp(400px, 60vw, 800px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
            filter: 'blur(96px)',
          }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 500px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            padding: 'clamp(24px, 4vw, 40px)',
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* LEFT: Plan Selection */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(24px, 4vw, 40px)',
            }}>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
                textAlign: 'center',
              }}>
                Simple pricing
                <span style={{ display: 'block' }}>that grows with you</span>
              </h2>

              <p style={{
                marginTop: '16px',
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: 'rgba(212, 212, 212, 0.9)',
                maxWidth: '500px',
                margin: '16px auto 24px',
                textAlign: 'center',
              }}>
                Pick a plan today and switch anytime. Clear value across all plans.
              </p>

              {/* Plan Selection Buttons */}
              <div style={{
                marginTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {/* Starter Plan */}
                <button
                  onClick={() => setSelectedPlan('starter')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '20px',
                    borderRadius: '16px',
                    background: selectedPlan === 'starter' 
                      ? 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.05))'
                      : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                    border: selectedPlan === 'starter' ? '2px solid #14B8A6' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#fff',
                  }}
                >
                  <div>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Starter Plan</p>
                    <p style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: 'rgba(212, 212, 212, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      $1,000/month • 6-month minimum • No build fee
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: selectedPlan === 'starter' ? '#14B8A6' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Pro Build Plan */}
                <button
                  onClick={() => setSelectedPlan('pro')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '20px',
                    borderRadius: '16px',
                    background: selectedPlan === 'pro' 
                      ? 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.05))'
                      : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                    border: selectedPlan === 'pro' ? '2px solid #14B8A6' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#fff',
                  }}
                >
                  <div>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Pro Build Plan</p>
                    <p style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: 'rgba(212, 212, 212, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      $6,000 build + $1,000/month • 3-month minimum
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: selectedPlan === 'pro' ? '#14B8A6' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Freedom Plan */}
                <button
                  onClick={() => setSelectedPlan('freedom')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '20px',
                    borderRadius: '16px',
                    background: selectedPlan === 'freedom' 
                      ? 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.05))'
                      : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                    border: selectedPlan === 'freedom' ? '2px solid #14B8A6' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#fff',
                  }}
                >
                  <div>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Freedom Plan</p>
                    <p style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: 'rgba(212, 212, 212, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      $6,000 build + $1,000/month • Cancel any time
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: selectedPlan === 'freedom' ? '#14B8A6' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* RIGHT: Plan Details */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(24px, 4vw, 40px)',
              background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0), rgba(20, 184, 166, 0.1), rgba(255, 255, 255, 0))',
              borderRadius: '16px',
              position: 'relative',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
            }}>
              {/* Plan Name */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <h3 style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                }}>
                  {selectedPlan === 'starter' && 'Starter Plan'}
                  {selectedPlan === 'pro' && 'Pro Build Plan'}
                  {selectedPlan === 'freedom' && 'Freedom Plan'}
                </h3>
              </div>

              {/* Price */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '24px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontSize: 'clamp(48px, 6vw, 64px)',
                    fontWeight: 700,
                    color: '#14B8A6',
                    letterSpacing: '-0.02em',
                  }}>
                    {selectedPlan === 'starter' && '$1,000'}
                    {selectedPlan === 'pro' && '$6,000'}
                    {selectedPlan === 'freedom' && '$6,000'}
                  </span>
                  <span style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                    marginBottom: '8px',
                  }}>
                    {selectedPlan === 'starter' ? '/month' : 'setup'}
                  </span>
                </div>
                {(selectedPlan === 'pro' || selectedPlan === 'freedom') && (
                  <div style={{
                    fontSize: 'clamp(20px, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#14B8A6',
                  }}>
                    + $1,000/month
                  </div>
                )}
                {selectedPlan === 'starter' && (
                  <div style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                  }}>
                    6-month minimum
                  </div>
                )}
                {selectedPlan === 'pro' && (
                  <div style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                  }}>
                    3-month minimum after launch
                  </div>
                )}
                {selectedPlan === 'freedom' && (
                  <div style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                  }}>
                    Cancel any time
                  </div>
                )}
              </div>

              {/* Features */}
              <div style={{
                background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '24px',
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  {selectedPlan === 'starter' && [
                    'Full AI Operating System',
                    'Website',
                    'CRM',
                    'Calendar and booking',
                    'Review engine',
                    'Automation flows',
                    'AI receptionist',
                    'Dashboard',
                    'Tweaks as needed',
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: 'clamp(13px, 1.8vw, 14px)',
                      color: 'rgba(212, 212, 212, 0.9)',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {selectedPlan === 'pro' && [
                    'Everything in Starter plus:',
                    'Custom automations',
                    'Industry specific flows',
                    'Advanced dashboard',
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: 'clamp(13px, 1.8vw, 14px)',
                      color: 'rgba(212, 212, 212, 0.9)',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {selectedPlan === 'freedom' && [
                    'Everything from the other plans',
                    'Zero commitment',
                    'Cancel any time',
                    'Perfect for risk averse owners',
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: 'clamp(13px, 1.8vw, 14px)',
                      color: 'rgba(212, 212, 212, 0.9)',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Best For */}
                <div style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <p style={{
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    color: 'rgba(212, 212, 212, 0.9)',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}>
                    Best for:
                  </p>
                  <p style={{
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                    lineHeight: 1.5,
                  }}>
                    {selectedPlan === 'starter' && 'Small businesses that need to get going right now.'}
                    {selectedPlan === 'pro' && 'Businesses needing custom solutions and industry-specific automations.'}
                    {selectedPlan === 'freedom' && 'Risk averse owners who want flexibility with zero commitment.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div style={{ marginTop: '24px' }}>
                <a href="/contact" style={{
                  display: 'inline-flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '12px',
                  backgroundColor: '#14B8A6',
                  color: '#0A0A0A',
                  padding: '12px 24px',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 8px 24px -8px rgba(20, 184, 166, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0D9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#14B8A6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: The Funnel */}
        <section id="funnel" style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          backgroundColor: '#F9FAFB',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            maxWidth: '800px',
            width: '100%',
            margin: '0 auto',
          }}>
            {funnelStep <= 6 ? (
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 48px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}>
                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 600,
                  color: '#111827',
                  letterSpacing: '-0.02em',
                  marginBottom: 'clamp(24px, 4vw, 32px)',
                }}>
                  What Do You Want Your Business to Do For You
                </h2>

                {/* Question 1 */}
                {funnelStep === 1 && (
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: '24px',
                    }}>
                      What type of business do you run?
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                      marginBottom: '32px',
                    }}>
                      {['Service Business', 'Retail', 'Restaurant', 'Fitness/Wellness', 'Consulting', 'Other'].map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setFunnelData(prev => ({ ...prev, businessType: type }));
                            setTimeout(() => handleFunnelNext(), 300);
                          }}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: `2px solid ${funnelData.businessType === type ? '#14B8A6' : '#E5E7EB'}`,
                            background: funnelData.businessType === type ? '#14B8A6' : '#fff',
                            color: funnelData.businessType === type ? '#fff' : '#111827',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 2 */}
                {funnelStep === 2 && (
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: '24px',
                    }}>
                      What is your biggest time waster right now?
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                      marginBottom: '32px',
                    }}>
                      {['Manual scheduling', 'Customer follow-ups', 'Data entry', 'Social media', 'Inventory management', 'Other'].map((waster) => (
                        <button
                          key={waster}
                          onClick={() => {
                            setFunnelData(prev => ({ ...prev, timeWaster: waster }));
                            setTimeout(() => handleFunnelNext(), 300);
                          }}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: `2px solid ${funnelData.timeWaster === waster ? '#14B8A6' : '#E5E7EB'}`,
                            background: funnelData.timeWaster === waster ? '#14B8A6' : '#fff',
                            color: funnelData.timeWaster === waster ? '#fff' : '#111827',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {waster}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 3 */}
                {funnelStep === 3 && (
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: '24px',
                    }}>
                      How many hours per week do you want back?
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                      gap: '12px',
                      marginBottom: '32px',
                    }}>
                      {['5-10 hours', '10-15 hours', '15-20 hours', '20+ hours'].map((hours) => (
                        <button
                          key={hours}
                          onClick={() => {
                            setFunnelData(prev => ({ ...prev, hoursWanted: hours }));
                            setTimeout(() => handleFunnelNext(), 300);
                          }}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: `2px solid ${funnelData.hoursWanted === hours ? '#14B8A6' : '#E5E7EB'}`,
                            background: funnelData.hoursWanted === hours ? '#14B8A6' : '#fff',
                            color: funnelData.hoursWanted === hours ? '#fff' : '#111827',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {hours}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 4 */}
                {funnelStep === 4 && (
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: '24px',
                    }}>
                      What do you struggle with? (Select all that apply)
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                      marginBottom: '32px',
                    }}>
                      {['Scheduling', 'Billing', 'Customer follow up', 'Reviews', 'Website', 'Social media', 'Keeping track of everything'].map((struggle) => (
                        <button
                          key={struggle}
                          onClick={() => handleStruggleToggle(struggle)}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: `2px solid ${funnelData.struggles.includes(struggle) ? '#14B8A6' : '#E5E7EB'}`,
                            background: funnelData.struggles.includes(struggle) ? '#14B8A6' : '#fff',
                            color: funnelData.struggles.includes(struggle) ? '#fff' : '#111827',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {struggle}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleFunnelNext}
                      disabled={funnelData.struggles.length === 0}
                      style={{
                        padding: '12px 32px',
                        borderRadius: '12px',
                        backgroundColor: funnelData.struggles.length > 0 ? '#14B8A6' : '#E5E7EB',
                        color: funnelData.struggles.length > 0 ? '#fff' : '#9CA3AF',
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 600,
                        border: 'none',
                        cursor: funnelData.struggles.length > 0 ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s',
                      }}
                    >
                      Continue
                    </button>
                  </div>
                )}

                {/* Question 5 */}
                {funnelStep === 5 && (
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: '24px',
                    }}>
                      What do you want to automate first?
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                      marginBottom: '32px',
                    }}>
                      {['Booking & Scheduling', 'Customer Communication', 'Reviews & Follow-ups', 'Social Media', 'Inventory', 'Everything'].map((automate) => (
                        <button
                          key={automate}
                          onClick={() => {
                            setFunnelData(prev => ({ ...prev, automateFirst: automate }));
                            setTimeout(() => handleFunnelNext(), 300);
                          }}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: `2px solid ${funnelData.automateFirst === automate ? '#14B8A6' : '#E5E7EB'}`,
                            background: funnelData.automateFirst === automate ? '#14B8A6' : '#fff',
                            color: funnelData.automateFirst === automate ? '#fff' : '#111827',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {automate}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 6 */}
                {funnelStep === 6 && (
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      fontWeight: 600,
                      color: '#111827',
                      marginBottom: '24px',
                    }}>
                      When do you want this solved?
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '12px',
                      marginBottom: '32px',
                    }}>
                      {['ASAP', 'This week', 'This month', 'Next month', 'Just exploring'].map((when) => (
                        <button
                          key={when}
                          onClick={() => {
                            setFunnelData(prev => ({ ...prev, whenSolved: when }));
                            setTimeout(() => handleFunnelNext(), 300);
                          }}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: `2px solid ${funnelData.whenSolved === when ? '#14B8A6' : '#E5E7EB'}`,
                            background: funnelData.whenSolved === when ? '#14B8A6' : '#fff',
                            color: funnelData.whenSolved === when ? '#fff' : '#111827',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {when}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Progress indicator */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '32px',
                }}>
                  {[1, 2, 3, 4, 5, 6].map((step) => (
                    <div
                      key={step}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: step <= funnelStep ? '#14B8A6' : '#E5E7EB',
                        transition: 'all 0.3s',
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Results Screen */
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 48px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}>
                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 600,
                  color: '#111827',
                  letterSpacing: '-0.02em',
                  marginBottom: 'clamp(16px, 3vw, 24px)',
                }}>
                  Based on your answers, we recommend:
                </h2>
                <div style={{
                  padding: '32px',
                  borderRadius: '16px',
                  backgroundColor: '#F9FAFB',
                  border: '2px solid #14B8A6',
                  marginBottom: '32px',
                }}>
                  <h3 style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: 600,
                    color: '#14B8A6',
                    marginBottom: '16px',
                  }}>
                    {recommendedPlan === 'starter' && 'Starter Plan'}
                    {recommendedPlan === 'pro' && 'Pro Build Plan'}
                    {recommendedPlan === 'freedom' && 'Freedom Plan'}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    color: '#4B5563',
                    lineHeight: 1.6,
                  }}>
                    {recommendedPlan === 'starter' && 'Perfect for getting started quickly with no build fee. Everything you need to automate your business in 30 days.'}
                    {recommendedPlan === 'pro' && 'Ideal for businesses needing custom automations and industry-specific solutions with a dedicated build phase.'}
                    {recommendedPlan === 'freedom' && 'Best for risk-averse owners who want full flexibility with zero commitment. Cancel anytime.'}
                  </p>
                </div>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderRadius: '12px',
                    backgroundColor: '#14B8A6',
                    color: '#0A0A0A',
                    padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 20px rgba(20, 184, 166, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0D9488';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#14B8A6';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Build My AI Operating System
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Reviews */}
        <section style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 600,
            color: '#111827',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(48px, 8vw, 64px)',
          }}>
            What Our Clients Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
          }}>
            {/* Daryl */}
            <div style={{
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format"
                alt="Daryl"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 16px',
                  border: '3px solid #14B8A6',
                }}
              />
              <h4 style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '8px',
              }}>
                Daryl
              </h4>
              <p style={{
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                color: '#6B7280',
                marginBottom: '16px',
              }}>
                European and Tesla auto repair
              </p>
              <p style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: '#4B5563',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}>
                "The booking system and calendar simplified my life. No more double bookings or missed appointments. Everything runs smoothly now."
              </p>
            </div>

            {/* Todd */}
            <div style={{
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&auto=format"
                alt="Todd"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 16px',
                  border: '3px solid #14B8A6',
                }}
              />
              <h4 style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '8px',
              }}>
                Todd
              </h4>
              <p style={{
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                color: '#6B7280',
                marginBottom: '16px',
              }}>
                Business owner
              </p>
              <p style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: '#4B5563',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}>
                "I needed automation and had no clue where to start. The system does the heavy lifting for me. I can finally focus on growing my business instead of managing it."
              </p>
            </div>

            {/* Jill */}
            <div style={{
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format"
                alt="Jill"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 16px',
                  border: '3px solid #14B8A6',
                }}
              />
              <h4 style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '8px',
              }}>
                Jill
              </h4>
              <p style={{
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                color: '#6B7280',
                marginBottom: '16px',
              }}>
                Online fitness and wellness
              </p>
              <p style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: '#4B5563',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}>
                "Calendar sync, messaging, and automation have been game-changers. My clients love the increased professionalism, and I love the time I'm saving."
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Features Grid */}
        <section style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#F9FAFB',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 600,
            color: '#111827',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(48px, 8vw, 64px)',
          }}>
            Everything You Need
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 320px), 1fr))',
            gap: 'clamp(20px, 3vw, 24px)',
          }}>
            {[
              { title: 'AI Receptionist', desc: '24/7 automated customer service that never sleeps.' },
              { title: 'Review Engine', desc: 'Automatically collect and manage customer reviews.' },
              { title: 'Auto Follow Ups', desc: 'Never lose a lead with automated follow-up sequences.' },
              { title: 'Website and Landing Pages', desc: 'Professional website that converts visitors into customers.' },
              { title: 'CRM', desc: 'Keep track of every customer interaction in one place.' },
              { title: 'Reporting', desc: 'Real-time insights into your business performance.' },
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  padding: 'clamp(24px, 4vw, 32px)',
                  borderRadius: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#14B8A6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                }}
              >
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 20px)',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '12px',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  color: '#4B5563',
                  lineHeight: 1.5,
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: The Guarantee */}
        <section style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}>
          <div style={{
            padding: 'clamp(48px, 8vw, 64px)',
            borderRadius: '24px',
            backgroundColor: '#0A0A0A',
            border: '2px solid #14B8A6',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: 'clamp(300px, 50vw, 600px)',
              height: 'clamp(300px, 50vw, 600px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}></div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              position: 'relative',
              zIndex: 1,
            }}>
              Your Business Will Be Fully Automated in 30 Days or You Do Not Pay the First Month
            </h2>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

