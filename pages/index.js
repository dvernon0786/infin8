import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [primaryButtonHovered, setPrimaryButtonHovered] = useState(false);
  const [heroVariant, setHeroVariant] = useState('A'); // A/B testing
  const [selectedPlan, setSelectedPlan] = useState('simple'); // Pricing plan selection

  const heroContent = {
    A: {
      headline: "Your Business on Autopilot — $1,000/month",
      subheadline: "Everything you need to run and grow your small business — website, booking, payments, CRM, chatbot, content, and monthly optimization — all for $1,000/month. First month covers setup. 6‑month minimum."
    },
    B: {
      headline: "A Full Marketing Team — For Less Than One Employee",
      subheadline: "$1,000/month gives you the full stack: website + automation + content + support — built and managed for you. Pay monthly; first month covers setup. 6‑month minimum."
    }
  };

  const currentHero = heroContent[heroVariant];

  return (
    <>
      <Head>
        <title>Infin8 Automation — Full Marketing & Operations — $1,000/month</title>
        <meta name="description" content="$1,000/month gets you a full marketing & automation team: website, booking & payments, CRM, SMS reminders, chatbot, content pipeline, analytics. 6‑month minimum." />
      </Head>
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: 'clamp(80px, 10vw, 128px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)',
        overflow: 'hidden',
        minHeight: '100vh',
        textAlign: 'center',
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
                Business Automation
              </span>

              {/* Brand + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexDirection: 'column' }}>
                <h1 style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '600',
                  color: '#111827',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  maxWidth: '900px',
                }}>
                  {currentHero.headline}
                </h1>
              </div>

              {/* Subcopy */}
              <p style={{
                marginTop: '12px',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#4B5563',
                maxWidth: '700px',
                lineHeight: 1.6,
                fontWeight: 400,
              }}>
                {currentHero.subheadline}
              </p>

              {/* CTAs */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '12px',
                marginTop: 'clamp(16px, 3vw, 24px)',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <a
                  href="/contact"
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
                  }}
                  onMouseEnter={() => setPrimaryButtonHovered(true)}
                  onMouseLeave={() => setPrimaryButtonHovered(false)}
                >
                  <span style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    transform: primaryButtonHovered ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 0.3s',
                  }}>Get Started — $1K/Month</span>
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
                    width: '14em',
                    height: '3em',
                    borderRadius: '30em',
                    fontSize: '15px',
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
                  <span style={{ position: 'relative', zIndex: 1 }}>Schedule a 15‑minute Call</span>
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

      {/* Features Section - Prism Studio Style */}
      <section style={{
        backgroundColor: '#F3F4F6',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 16px)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 1,
              fontWeight: 500,
              color: '#6B7280',
              letterSpacing: '-0.02em',
            }}>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '0s',
                }}
              >Small businesses waste time and money</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '0.8s',
                  marginLeft: '0.5rem',
                  color: '#111827',
                  fontWeight: 600,
                }}
              >juggling half-built tools,</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '1.6s',
                }}
              >missed bookings, no‑shows,</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '2.4s',
                }}
              >and</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '3.2s',
                  marginLeft: '0.5rem',
                  color: '#111827',
                  fontWeight: 600,
                }}
              >inconsistent social content.</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '4s',
                  marginLeft: '0.5rem',
                }}
              >You need reliable systems that just work</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '4.8s',
                }}
              >—</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '5.6s',
                  marginLeft: '0.5rem',
                  color: '#111827',
                  fontWeight: 600,
                }}
              >without hiring a full team.</span>
              <span 
                className="lyric-line"
                style={{
                  opacity: 0,
                  display: 'inline-block',
                  animation: 'lyricFadeIn 0.8s ease-in-out forwards',
                  animationDelay: '6.4s',
                }}
              >We solve that problem.</span>
            </p>

            <div style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              opacity: 0,
              animation: 'lyricFadeIn 0.8s ease-in-out forwards',
              animationDelay: '7.2s',
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: -1,
                  filter: 'blur(64px)',
                  borderRadius: '50%',
                  background: 'radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 70%)',
                  transform: 'translateY(10px)',
                }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format" 
                  alt="Founder avatar" 
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                  }}
                />
              </div>
              <span style={{
                fontSize: '16px',
                color: '#374151',
              }}>Founder of Infin8 Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{
        display: 'flex',
        backgroundColor: '#ffffff',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 24px)',
          width: '100%',
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(32px, 6vw, 64px)',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(6px, 1vw, 8px)',
              padding: 'clamp(4px, 1vw, 6px) clamp(10px, 2vw, 12px)',
              borderRadius: '9999px',
              backgroundColor: '#fff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.05)',
              fontSize: 'clamp(11px, 1.5vw, 12px)',
              fontWeight: 500,
              color: '#374151',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1F2937', width: 'clamp(12px, 2vw, 14px)', height: 'clamp(12px, 2vw, 14px)' }}>
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              Core Features
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              marginTop: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
            }}>
              Why Choose Us
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#4B5563',
              maxWidth: '672px',
              margin: 'clamp(8px, 1.5vw, 12px) auto 0',
              lineHeight: 1.6,
            }}>
              Everything you need to automate your business, all in one place.
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            marginBottom: '40px',
          }}>
            {/* Card 1 - Real-Time Tracking */}
            <div style={{
              position: 'relative',
              backgroundColor: '#fff',
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 32px)',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
            }}>
              <div style={{
                marginBottom: 'clamp(24px, 4vw, 32px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  position: 'relative',
                  width: 'clamp(80px, 15vw, 112px)',
                  height: 'clamp(80px, 15vw, 112px)',
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(0,0,0,0.06)',
                  animation: 'pulse-soft 3s ease-in-out infinite',
                }}>
                  <div style={{
                    position: 'absolute',
                    width: 'clamp(6px, 1.2vw, 8px)',
                    height: 'clamp(6px, 1.2vw, 8px)',
                    backgroundColor: '#D1D5DB',
                    borderRadius: '50%',
                    top: 'clamp(8px, 1.5vw, 12px)',
                    right: 'clamp(12px, 2vw, 16px)',
                    animation: 'bounce-gentle 2s ease-in-out infinite 0.5s',
                  }}></div>
                  <div style={{
                    width: 'clamp(3px, 0.6vw, 4px)',
                    height: 'clamp(28px, 6vw, 40px)',
                    backgroundColor: '#1F2937',
                    borderRadius: '9999px',
                    transformOrigin: 'bottom center',
                    transform: 'rotate(18deg)',
                    animation: 'rotate-slow 6s ease-in-out infinite',
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    width: 'clamp(6px, 1.2vw, 8px)',
                    height: 'clamp(6px, 1.2vw, 8px)',
                    backgroundColor: '#1F2937',
                    borderRadius: '50%',
                    bottom: 'clamp(4px, 0.8vw, 6px)',
                  }}></div>
                </div>
              </div>
              <h3 style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: '#111827',
                marginBottom: 'clamp(6px, 1vw, 8px)',
                textAlign: 'center',
              }}>
                SMS & Email Reminders
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                Automated confirmations, pre-visit reminders, and no-show prevention that cut missed appointments by up to 50%.
              </p>
            </div>

            {/* Card 2 - Expert Guidance */}
            <div style={{
              position: 'relative',
              backgroundColor: '#fff',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 32px)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
            }}>
              <div style={{
                marginBottom: 'clamp(24px, 4vw, 32px)',
              }}>
                <div style={{
                  position: 'relative',
                  overflow: 'visible',
                  animation: 'pulse-soft 3s ease-in-out infinite 1s',
                  backgroundColor: '#F9FAFB',
                  width: '100%',
                  height: 'clamp(80px, 15vw, 112px)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 'clamp(32px, 6vw, 48px)',
                    top: 'clamp(-6px, -1vw, -8px)',
                    fontSize: 'clamp(9px, 1.2vw, 10px)',
                    fontWeight: 500,
                    color: '#374151',
                    backgroundColor: '#fff',
                    borderRadius: '9999px',
                    padding: 'clamp(2px, 0.3vw, 2px) clamp(6px, 1vw, 8px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    animation: 'float 3s ease-in-out infinite 0.3s',
                    boxShadow: '0 8px 18px rgba(0,0,0,0.06)',
                  }}>50% Growth</span>
                  <span style={{
                    position: 'absolute',
                    right: 'clamp(12px, 2vw, 16px)',
                    top: 'clamp(-6px, -1vw, -8px)',
                    fontSize: 'clamp(9px, 1.2vw, 10px)',
                    fontWeight: 500,
                    color: '#374151',
                    backgroundColor: '#fff',
                    borderRadius: '9999px',
                    padding: 'clamp(2px, 0.3vw, 2px) clamp(6px, 1vw, 8px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    animation: 'float 3s ease-in-out infinite 0.7s',
                    boxShadow: '0 8px 18px rgba(0,0,0,0.06)',
                  }}>Real-Time</span>
                  <div style={{
                    position: 'absolute',
                    left: 'clamp(24px, 4vw, 32px)',
                    right: 'clamp(24px, 4vw, 32px)',
                    bottom: 'clamp(12px, 2vw, 16px)',
                    display: 'flex',
                    gap: 'clamp(6px, 1vw, 8px)',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 'clamp(18px, 3vw, 24px)',
                      height: 'clamp(18px, 3vw, 24px)',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: 'clamp(4px, 0.8vw, 6px)',
                      animation: 'bounce-gentle 2s ease-in-out infinite 0.1s',
                      boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                    }}></div>
                    <div style={{
                      width: 'clamp(18px, 3vw, 24px)',
                      height: 'clamp(28px, 5vw, 40px)',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: 'clamp(4px, 0.8vw, 6px)',
                      animation: 'bounce-gentle 2s ease-in-out infinite 0.2s',
                      boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                    }}></div>
                    <div style={{
                      width: 'clamp(18px, 3vw, 24px)',
                      height: 'clamp(40px, 7vw, 56px)',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: 'clamp(4px, 0.8vw, 6px)',
                      animation: 'bounce-gentle 2s ease-in-out infinite 0.3s',
                      boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                    }}></div>
                    <div style={{
                      width: 'clamp(18px, 3vw, 24px)',
                      height: 'clamp(56px, 10vw, 80px)',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: 'clamp(4px, 0.8vw, 6px)',
                      animation: 'bounce-gentle 2s ease-in-out infinite 0.4s',
                      boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                    }}></div>
                    <div style={{
                      width: 'clamp(18px, 3vw, 24px)',
                      height: 'clamp(68px, 12vw, 96px)',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: 'clamp(4px, 0.8vw, 6px)',
                      animation: 'bounce-gentle 2s ease-in-out infinite 0.5s',
                      boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                    }}></div>
                  </div>
                </div>
              </div>
              <h3 style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: '#111827',
                marginBottom: 'clamp(6px, 1vw, 8px)',
                textAlign: 'center',
              }}>
                Monthly Analytics
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                Performance snapshot with prioritized action list and insights to help you make data-driven decisions.
              </p>
            </div>

            {/* Card 3 - Real-Time Updates */}
            <div style={{
              position: 'relative',
              backgroundColor: '#fff',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 32px)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
            }}>
              <div style={{
                display: 'flex',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#F9FAFB',
                borderRadius: 'clamp(10px, 1.5vw, 12px)',
                marginBottom: 'clamp(24px, 4vw, 32px)',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'clamp(80px, 15vw, 112px)',
              }}>
                <video
                  src="https://cdn.midjourney.com/video/d9a88b9e-7ed5-464b-a036-0518cdd85eae/0.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  border: 'none',
                  backgroundColor: 'rgba(255,255,255,0)',
                  opacity: 0.25,
                  width: 'clamp(80px, 15vw, 112px)',
                  height: 'clamp(80px, 15vw, 112px)',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(0,0,0,0.06)',
                }}></div>
              </div>
              <h3 style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: '#111827',
                marginBottom: 'clamp(6px, 1vw, 8px)',
                textAlign: 'center',
              }}>
                AI Chatbot
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                24/7 triage, booking assistance, and lead capture on your website—never miss an opportunity.
              </p>
            </div>
          </div>

          {/* Feature pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(8px, 1.5vw, 12px)',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            marginTop: 'clamp(24px, 4vw, 40px)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Marquee Track */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(8px, 1.5vw, 12px)',
              whiteSpace: 'nowrap',
              animation: 'aura-marquee-rtl 28s linear infinite',
              willChange: 'transform',
            }}>
              {/* Track Copy 1 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1.5vw, 12px)',
                flexShrink: 0,
              }}>
                {[
                  { text: 'Website & Booking' },
                  { text: 'Payments Integrated' },
                  { text: 'CRM & Lead Capture' },
                  { text: 'Daily Content' },
                  { text: 'Priority Support' },
                ].map((item, idx) => (
                  <span key={idx} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'clamp(6px, 1vw, 8px)',
                    padding: 'clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 12px)',
                    borderRadius: '9999px',
                    backgroundColor: '#fff',
                    color: '#1F2937',
                    fontSize: 'clamp(12px, 1.8vw, 14px)',
                    fontWeight: 500,
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  }}>
                    {item.text}
                  </span>
                ))}
              </div>
              {/* Track Copy 2 (for seamless loop) */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1.5vw, 12px)',
                flexShrink: 0,
              }} aria-hidden="true">
                {[
                  { text: 'Website & Booking' },
                  { text: 'Payments Integrated' },
                  { text: 'CRM & Lead Capture' },
                  { text: 'Daily Content' },
                  { text: 'Priority Support' },
                ].map((item, idx) => (
                  <span key={idx} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'clamp(6px, 1vw, 8px)',
                    padding: 'clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 12px)',
                    borderRadius: '9999px',
                    backgroundColor: '#fff',
                    color: '#1F2937',
                    fontSize: 'clamp(12px, 1.8vw, 14px)',
                    fontWeight: 500,
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  }}>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Edge gradients */}
            <div aria-hidden="true" style={{
              pointerEvents: 'none',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: 'clamp(48px, 10vw, 96px)',
              zIndex: 10,
              background: 'linear-gradient(to right, rgba(255,255,255,0.85), rgba(255,255,255,0))',
            }}></div>
            <div aria-hidden="true" style={{
              pointerEvents: 'none',
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              width: 'clamp(48px, 10vw, 96px)',
              zIndex: 10,
              background: 'linear-gradient(to left, rgba(255,255,255,0.85), rgba(255,255,255,0))',
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
          Our Promise
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 2.5vw, 22px)',
          color: '#4B5563',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          We build and run the tools that make your business predictable: automated booking, payments, CRM follow-ups, SMS confirmations, review generation, daily social content, and simple monthly reporting — for $1,000/month.
        </p>
      </section>

      {/* What's Included Section */}
      <section style={{
        backgroundColor: '#F9FAFB',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: 'clamp(16px, 3vw, 24px)',
            color: '#111827',
            letterSpacing: '-0.02em',
          }}>
            What's Included
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            marginBottom: 'clamp(32px, 6vw, 48px)',
            color: '#4B5563',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto clamp(32px, 6vw, 48px)',
          }}>
            Everything you need to automate your business operations and marketing
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            justifyContent: 'center',
          }}>
            {[
              { title: 'Website & Booking', desc: 'Mobile-first website refresh with integrated booking page and one-click scheduling.' },
              { title: 'Payments Integrated', desc: 'Stripe/Square integration with deposits, no-show fees, and automated receipts.' },
              { title: 'CRM + Lead Capture', desc: 'Automated lead routing, immediate follow-up, and nurture sequences.' },
              { title: 'Daily Content Pipeline', desc: '3 uploads/week transformed into daily social posts with scheduling.' },
              { title: 'Review Management', desc: 'Automated review requests, monitoring, and reputation management.' },
              { title: 'Priority Support', desc: 'Unlimited email support, monthly check-ins, and one major tweak per month.' },
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fff',
                padding: 'clamp(24px, 4vw, 32px)',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
                transition: 'all 0.3s',
                textAlign: 'center',
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
                <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600, textAlign: 'center' }}>{item.title}</h3>
                <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6, textAlign: 'center' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Prism Studio Dark Theme */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: '#0A0A0A',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>
          {/* Subtle decor */}
          <div style={{
            position: 'absolute',
            pointerEvents: 'none',
            right: '-96px',
            top: '-96px',
            width: '288px',
            height: '288px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            filter: 'blur(96px)',
          }}></div>
          <div style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: '-96px',
            bottom: '-96px',
            width: '288px',
            height: '288px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            filter: 'blur(96px)',
          }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 500px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            padding: 'clamp(24px, 4vw, 40px)',
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
                {/* Simple Monthly */}
                <button
                  onClick={() => setSelectedPlan('simple')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '20px',
                    borderRadius: '16px',
                    background: selectedPlan === 'simple' 
                      ? 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
                      : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                    border: selectedPlan === 'simple' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#fff',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedPlan !== 'simple') {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedPlan !== 'simple') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Simple Monthly</p>
                    <p style={{ fontSize: '12px', color: 'rgba(212, 212, 212, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Predictable monthly billing
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(212, 212, 212, 0.8)',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Annual Growth Plan */}
                <button
                  onClick={() => setSelectedPlan('annual')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '20px',
                    borderRadius: '16px',
                    background: selectedPlan === 'annual' 
                      ? 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
                      : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                    border: selectedPlan === 'annual' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#fff',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedPlan !== 'annual') {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedPlan !== 'annual') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Annual Growth Plan</p>
                    <p style={{ fontSize: '12px', color: 'rgba(212, 212, 212, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Maximum savings & value
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(212, 212, 212, 0.8)',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* No-Contract Flex Plan */}
                <button
                  onClick={() => setSelectedPlan('flex')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '20px',
                    borderRadius: '16px',
                    background: selectedPlan === 'flex' 
                      ? 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
                      : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                    border: selectedPlan === 'flex' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#fff',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedPlan !== 'flex') {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedPlan !== 'flex') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>No-Contract Flex</p>
                    <p style={{ fontSize: '12px', color: 'rgba(212, 212, 212, 0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Full flexibility, no lock-ins
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(212, 212, 212, 0.8)',
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
              background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
              borderRadius: '16px',
              position: 'relative',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
            }}>
              <div style={{
                position: 'absolute',
                pointerEvents: 'none',
                inset: 0,
                opacity: 0.05,
                background: 'radial-gradient(900px 360px at 20% -10%, rgba(255,255,255,0.12) 15%, transparent 60%)',
                borderRadius: '16px',
              }}></div>

              {/* Plan Name */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}>
                {selectedPlan === 'annual' && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    padding: '4px 12px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'rgba(212, 212, 212, 0.9)',
                    letterSpacing: '0.05em',
                  }}>
                    ⭐ BEST VALUE
                  </span>
                )}
                <h3 style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                }}>
                  {selectedPlan === 'simple' && 'Simple Monthly'}
                  {selectedPlan === 'annual' && 'Annual Growth Plan'}
                  {selectedPlan === 'flex' && 'No-Contract Flex Plan'}
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
                    color: '#fff',
                    letterSpacing: '-0.02em',
                  }}>
                    {selectedPlan === 'simple' && '$1,000'}
                    {selectedPlan === 'annual' && '$1,000'}
                    {selectedPlan === 'flex' && '$6,000'}
                  </span>
                  <span style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                    marginBottom: '8px',
                  }}>
                    {selectedPlan === 'flex' ? 'setup' : '/month'}
                  </span>
                </div>
                {selectedPlan === 'flex' && (
                  <div style={{
                    fontSize: 'clamp(20px, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#fff',
                  }}>
                    + $1,000/month
                  </div>
                )}
                {selectedPlan === 'annual' && (
                  <div style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(212, 212, 212, 0.8)',
                  }}>
                    (12 months)
                  </div>
                )}
              </div>

              {/* Tagline */}
              <p style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(212, 212, 212, 0.9)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'center',
                marginBottom: '24px',
              }}>
                {selectedPlan === 'simple' && 'GREAT FOR PREDICTABLE MONTHLY BILLING WITH SETUP SPREAD OUT.'}
                {selectedPlan === 'annual' && 'PERFECT FOR BUSINESSES READY TO SCALE FAST WITH MAXIMUM SAVINGS.'}
                {selectedPlan === 'flex' && 'IDEAL FOR BUSINESSES THAT WANT FULL FLEXIBILITY WITH NO LOCK-INS.'}
              </p>

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
                  {selectedPlan === 'simple' && [
                    'Setup included in the first month',
                    '6-month minimum',
                    'Month-to-month after 6 months',
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '14px',
                      color: 'rgba(212, 212, 212, 0.9)',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {selectedPlan === 'annual' && [
                    '$6,000 setup completely waived',
                    '12-month commitment',
                    'Save $6,000 instantly',
                    'Priority support + quarterly optimization reviews',
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '14px',
                      color: 'rgba(212, 212, 212, 0.9)',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {selectedPlan === 'flex' && [
                    'No commitments',
                    'Pay setup upfront',
                    'Cancel anytime',
                  ].map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '14px',
                      color: 'rgba(212, 212, 212, 0.9)',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12px',
                  color: 'rgba(212, 212, 212, 0.7)',
                  textAlign: 'center',
                }}>
                  Have special requirements? <a href="/contact" style={{
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'rgba(212, 212, 212, 0.9)',
                  }}>Talk to us</a>.
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
                    backgroundColor: '#fff',
                    color: '#0A0A0A',
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 8px 24px -8px rgba(255,255,255,0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                  }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons & Upsells Section */}
          <div style={{
            marginTop: 'clamp(32px, 6vw, 48px)',
            padding: 'clamp(24px, 4vw, 32px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <h3 style={{
              fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              textAlign: 'center',
            }}>
              Add-ons & Upsells
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 320px), 1fr))',
              gap: 'clamp(16px, 3vw, 24px)',
              maxWidth: '900px',
              margin: '0 auto',
            }}>
              {[
                {
                  title: 'Paid Ads Management',
                  description: 'Google/Facebook ad management — monthly management fee + ad spend',
                },
                {
                  title: 'Advanced E-commerce',
                  description: 'Advanced POS integrations and e-commerce features — one-time dev quote',
                },
                {
                  title: 'Multi-Location',
                  description: 'Multi-location management — added monthly fee per location',
                },
              ].map((addon, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                >
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: '8px',
                  }}>
                    {addon.title}
                  </h4>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(212, 212, 212, 0.7)',
                    lineHeight: 1.5,
                  }}>
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Notes */}
          <p style={{
            marginTop: '32px',
            fontSize: '12px',
            color: 'rgba(212, 212, 212, 0.6)',
            maxWidth: '800px',
            margin: '32px auto 0',
            padding: '0 clamp(16px, 4vw, 32px)',
            paddingBottom: 'clamp(24px, 4vw, 32px)',
            textAlign: 'center',
            lineHeight: 1.6,
          }}>
            6‑month minimum applies to Simple Monthly offers. Annual Growth Plan requires 12‑month commitment. Setup value referenced is for internal accounting — savings only apply if the client honors the commitment. No refunds on prior-service months. We pause automations for unpaid invoices.
          </p>
        </div>
      </section>

      {/* Onboarding & Timeline Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '768px',
          margin: '0 auto clamp(48px, 8vw, 64px)',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: '#111827',
            border: '1px solid rgba(255,255,255,0.05)',
            fontSize: 'clamp(11px, 1.5vw, 14px)',
            color: '#9CA3AF',
            marginBottom: '24px',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
            <span>Onboarding Process</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#111827',
            marginBottom: 'clamp(16px, 3vw, 24px)',
            margin: '0 0 clamp(16px, 3vw, 24px)',
          }}>
            Your 4-Week Journey
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: '#6B7280',
            lineHeight: 1.6,
            margin: 0,
          }}>
            From sign-up to full automation in just four weeks. Clear milestones, transparent progress.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
          gap: 'clamp(20px, 3vw, 24px)',
        }}>
          {/* Week 0 - Sign & Access */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            padding: 'clamp(24px, 4vw, 32px)',
            overflow: 'hidden',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              pointerEvents: 'none',
              background: 'radial-gradient(1200px 400px at 85% -10%, rgba(99, 102, 241, 0.04), transparent)',
              maskImage: 'radial-gradient(60% 60% at 80% 0%, white, transparent)',
            }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: '#F9FAFB',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#667eea' }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div style={{
                fontSize: 'clamp(11px, 1.5vw, 12px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#9CA3AF',
                marginBottom: '8px',
              }}>Week 0</div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
              }}>Sign & Access</h3>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Pay first month, provide domain access, logins, and 3 raw media uploads to get started.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#9CA3AF' }}>
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <span style={{ fontSize: '14px', color: '#4B5563' }}>Payment processed</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#10B981' }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#9CA3AF' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span style={{ fontSize: '14px', color: '#4B5563' }}>Access credentials</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#10B981' }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Week 1 - Foundation */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            padding: 'clamp(24px, 4vw, 32px)',
            overflow: 'hidden',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              pointerEvents: 'none',
              background: 'radial-gradient(60% 50% at 50% 100%, rgba(16, 185, 129, 0.08), transparent 60%)',
            }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#10B981' }}>
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div style={{
                fontSize: 'clamp(11px, 1.5vw, 12px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#9CA3AF',
                marginBottom: '8px',
              }}>Week 1</div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
              }}>Foundation</h3>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Complete audit, create sitemap, and launch homepage & booking skeleton live.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <div>
                  <p style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#9CA3AF',
                    marginBottom: '8px',
                  }}>Audit</p>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111827',
                  }}>Complete</p>
                </div>
                <div>
                  <p style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#9CA3AF',
                    marginBottom: '8px',
                  }}>Sitemap</p>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111827',
                  }}>Live</p>
                </div>
              </div>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                background: 'linear-gradient(to bottom, #F9FAFB, #fff)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                padding: '16px',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '16px',
                  pointerEvents: 'none',
                  background: 'linear-gradient(120deg, rgba(16, 185, 129, 0.08), transparent 40%)',
                }}></div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#10B981' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#111827',
                  }}>Homepage & booking live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Week 2 - Automation Setup */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            padding: 'clamp(24px, 4vw, 32px)',
            overflow: 'hidden',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              pointerEvents: 'none',
              background: 'linear-gradient(160deg, rgba(168, 85, 247, 0.08), transparent 40%)',
            }}></div>
            <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#A855F7' }}>
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  <path d="M18 2h-3a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  <path d="M4 2H2v20h2" />
                </svg>
              </div>
              <div style={{
                fontSize: 'clamp(11px, 1.5vw, 12px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#9CA3AF',
                marginBottom: '8px',
              }}>Week 2</div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
              }}>Automation Setup</h3>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                CRM integration, lead flows, chatbot configuration; basic booking & payment systems go live.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                }}>
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>CRM Integration</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>Active</span>
                </div>
                <div style={{
                  height: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#F3F4F6',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(to right, #A855F7, #667eea)',
                    width: '85%',
                  }}></div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                }}>
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>Chatbot</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>Configured</span>
                </div>
                <div style={{
                  height: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#F3F4F6',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(to right, #10B981, #14B8A6)',
                    width: '90%',
                  }}></div>
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <div style={{
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '16px',
                  backgroundColor: '#F9FAFB',
                  color: '#111827',
                  padding: '14px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Booking & payments live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Week 3 - Content & Reminders */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            padding: 'clamp(24px, 4vw, 32px)',
            overflow: 'hidden',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-48px',
              right: '-48px',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              backgroundColor: 'rgba(249, 115, 22, 0.1)',
              filter: 'blur(48px)',
              pointerEvents: 'none',
            }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#F97316' }}>
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </div>
              <div style={{
                fontSize: 'clamp(11px, 1.5vw, 12px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#9CA3AF',
                marginBottom: '8px',
              }}>Week 3</div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
              }}>Content & Reminders</h3>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Content pipeline scheduled (first 14 posts), SMS reminders activated and tested.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                }}>
                  <p style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#9CA3AF',
                    marginBottom: '4px',
                  }}>Posts</p>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111827',
                  }}>14</p>
                </div>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                }}>
                  <p style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#9CA3AF',
                    marginBottom: '4px',
                  }}>SMS</p>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111827',
                  }}>Live</p>
                </div>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                }}>
                  <p style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#9CA3AF',
                    marginBottom: '4px',
                  }}>Status</p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                    }}></div>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#10B981',
                    }}>Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Week 4 - Analytics & Handoff */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            padding: 'clamp(24px, 4vw, 32px)',
            overflow: 'hidden',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              pointerEvents: 'none',
              background: 'radial-gradient(60% 60% at 20% 0%, rgba(239, 68, 68, 0.04), transparent)',
              maskImage: 'radial-gradient(60% 60% at 20% 0%, white, transparent)',
            }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#EF4444' }}>
                  <path d="M3 3v18h18" />
                  <path d="M18 7c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
                  <path d="M6 17c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
                  <path d="M21 15c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
                  <path d="M6 17L18 7" />
                </svg>
              </div>
              <div style={{
                fontSize: 'clamp(11px, 1.5vw, 12px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#9CA3AF',
                marginBottom: '8px',
              }}>Week 4</div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
              }}>Analytics & Handoff</h3>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Analytics dashboard configured, monthly snapshot delivered, and full system handoff completed.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#9CA3AF' }}>
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                  </svg>
                  <span style={{ fontSize: '14px', color: '#4B5563' }}>Dashboard configured</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#9CA3AF' }}>
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <span style={{ fontSize: '14px', color: '#4B5563' }}>Monthly snapshot delivered</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: '#9CA3AF' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: '14px', color: '#4B5563' }}>System handoff complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p style={{
          marginTop: 'clamp(40px, 6vw, 48px)',
          fontStyle: 'italic',
          textAlign: 'center',
          color: '#6B7280',
          fontSize: 'clamp(14px, 1.8vw, 16px)',
          lineHeight: 1.6,
        }}>
          Months 2–6: Ongoing optimization, content, and monthly improvements.
        </p>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#F9FAFB',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{
              fontSize: 'clamp(11px, 1.5vw, 14px)',
              color: '#9CA3AF',
              margin: 0,
              fontWeight: 400,
            }}>What people say</p>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#111827',
              margin: 0,
            }}>Testimonials</h2>
          </div>
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            color: '#9CA3AF',
          }}
          className="desktop-only"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: 400 }}>Real feedback from clients</span>
          </div>
        </div>

        <div style={{
          overflow: 'hidden',
          borderRadius: 'clamp(16px, 2.5vw, 24px)',
          backgroundColor: '#0F172A',
          border: '1px solid rgba(30, 41, 59, 0.8)',
          position: 'relative',
        }}>
          {/* Animated glow background */}
          <div style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: 'clamp(16px, 2.5vw, 24px)',
            pointerEvents: 'none',
            background: 'linear-gradient(45deg, rgba(132, 204, 22, 0.1), rgba(52, 211, 153, 0.08), rgba(34, 211, 238, 0.06), rgba(163, 230, 53, 0.08))',
            backgroundSize: '300%',
            animation: 'glow-rotate 15s linear infinite',
            filter: 'blur(25px)',
            opacity: 0.6,
            zIndex: -1,
          }}></div>

          {/* Animated border */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'clamp(16px, 2.5vw, 24px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              padding: '1px',
              background: 'linear-gradient(90deg, rgba(132, 204, 22, 0.3), rgba(52, 211, 153, 0.25), rgba(34, 211, 238, 0.2), rgba(163, 230, 53, 0.25))',
              backgroundSize: '400% 100%',
              animation: 'border-flow 8s linear infinite',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}></div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: '0 0 0 0',
            left: 0,
            width: 'clamp(96px, 20vw, 160px)',
            background: 'linear-gradient(to right, #0F172A, transparent)',
            zIndex: 10,
          }}></div>
          <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: '0 0 0 0',
            right: 0,
            width: 'clamp(96px, 20vw, 160px)',
            background: 'linear-gradient(to left, #0F172A, transparent)',
            zIndex: 10,
          }}></div>

          {/* Top marquee row */}
          <div style={{
            padding: 'clamp(24px, 4vw, 32px)',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              gap: 'clamp(16px, 3vw, 20px)',
              willChange: 'transform',
              animation: 'marquee-ltr 45s linear infinite',
            }}>
              {[
                { name: 'Sarah M.', handle: '@sarah_salon', quote: 'Infin8 Automation transformed my booking system. No shows dropped by 60 percent and I am saving 15 hours a week on admin work. The automated content pipeline alone has been a game changer.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Mike T.', handle: '@mike_home', quote: 'We went from missing follow ups to having every lead contacted instantly. Our conversion rate improved by 32 percent in the first month.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Lisa K.', handle: '@lisa_restaurant', quote: 'Infin8 replaced three software tools we were paying for. Everything is now under one clean system and my team finally feels organised.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'David R.', handle: '@david_consulting', quote: 'Our response times went from hours to seconds. Clients keep telling us how impressed they are with our new automated communication.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Emma W.', handle: '@emma_wellness', quote: 'I am saving so much time it feels unreal. What used to take me an entire afternoon is now fully automated.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'James P.', handle: '@james_fitness', quote: 'Infin8 helped us reduce operational mistakes by 70 percent. The workflows catch everything before it becomes a problem.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Rachel B.', handle: '@rachel_beauty', quote: 'The AI follow up system booked more appointments in two weeks than my team did in two months.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Alex M.', handle: '@alex_tech', quote: 'We cut admin tasks by at least 12 hours a week. Infin8 paid for itself in the first month.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Priya S.', handle: '@priya_dev', quote: 'Our content output is ten times faster and everything is SEO optimised automatically. It has completely changed how we market.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Leo M.', handle: '@leom', quote: 'Infin8 brought structure to our messy workflow. Nothing slips through the cracks anymore.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
              ].map((testimonial, idx) => (
                <div key={idx} style={{
                  flexShrink: 0,
                  width: 'clamp(280px, 35vw, 420px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(30, 41, 59, 0.8)',
                  backgroundColor: 'rgba(15, 23, 42, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      style={{
                        width: '36px',
                        height: '36px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{
                          fontSize: 'clamp(13px, 1.8vw, 14px)',
                          fontWeight: 500,
                          color: '#F1F5F9',
                        }}>{testimonial.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', color: '#60A5FA' }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <p style={{
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        color: '#94A3B8',
                        margin: 0,
                        fontWeight: 400,
                      }}>{testimonial.handle}</p>
                    </div>
                  </div>
                  <p style={{
                    marginTop: '16px',
                    fontSize: 'clamp(13px, 1.8vw, 16px)',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 400,
                  }}>{testimonial.quote}</p>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: 'Sarah M.', handle: '@sarah_salon', quote: 'Infin8 Automation transformed my booking system. No shows dropped by 60 percent and I am saving 15 hours a week on admin work. The automated content pipeline alone has been a game changer.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Mike T.', handle: '@mike_home', quote: 'We went from missing follow ups to having every lead contacted instantly. Our conversion rate improved by 32 percent in the first month.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Lisa K.', handle: '@lisa_restaurant', quote: 'Infin8 replaced three software tools we were paying for. Everything is now under one clean system and my team finally feels organised.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format' },
              ].map((testimonial, idx) => (
                <div key={`dup-${idx}`} style={{
                  flexShrink: 0,
                  width: 'clamp(280px, 35vw, 420px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(30, 41, 59, 0.8)',
                  backgroundColor: 'rgba(15, 23, 42, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      style={{
                        width: '36px',
                        height: '36px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{
                          fontSize: 'clamp(13px, 1.8vw, 14px)',
                          fontWeight: 500,
                          color: '#F1F5F9',
                        }}>{testimonial.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', color: '#60A5FA' }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <p style={{
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        color: '#94A3B8',
                        margin: 0,
                        fontWeight: 400,
                      }}>{testimonial.handle}</p>
                    </div>
                  </div>
                  <p style={{
                    marginTop: '16px',
                    fontSize: 'clamp(13px, 1.8vw, 16px)',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 400,
                  }}>{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{
            borderTop: '1px solid rgba(30, 41, 59, 0.8)',
          }}></div>

          {/* Bottom marquee row (reverse direction) */}
          <div style={{
            padding: 'clamp(24px, 4vw, 32px)',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              gap: 'clamp(16px, 3vw, 20px)',
              willChange: 'transform',
              animation: 'marquee-rtl 45s linear infinite',
            }}>
              {[
                { name: 'Tom H.', handle: '@tom_services', quote: 'I wish we had found Infin8 sooner. Our onboarding is now fully automated and clients move through our process with zero delays.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Nina C.', handle: '@nina_coaching', quote: 'The system runs my entire business while I am asleep. I wake up to booked appointments and completed tasks.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Sofia A.', handle: '@sofialabs', quote: 'The automated reminders alone reduced cancellations by almost half. My calendar finally stays full.', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Jackson L.', handle: '@jacksonlee', quote: 'Every lead gets followed up without me lifting a finger. My sales pipeline has never looked this healthy.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Maya K.', handle: '@mayak', quote: 'We created a custom workflow that replaced a part time admin hire. The savings have been incredible.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Ethan G.', handle: '@egarcia', quote: 'I love how simple everything is. Once the workflows were set, the system just runs by itself.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Olivia R.', handle: '@olivia_biz', quote: 'Our clients love the new communication system. It is instant, friendly, and always consistent.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Chris D.', handle: '@chris_design', quote: 'The automation setup removed all the bottlenecks in our business. We can take on more clients with the same team.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Sam L.', handle: '@sam_lead', quote: 'Infin8 doubled our lead to appointment ratio in the first month. The systems are powerful and very easy to manage.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Taylor B.', handle: '@taylor_biz', quote: 'We finally feel like a modern business. Automated tasks, clean dashboards, and zero manual chasing. Infin8 has been the best investment this year.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format' },
              ].map((testimonial, idx) => (
                <div key={idx} style={{
                  flexShrink: 0,
                  width: 'clamp(280px, 35vw, 420px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(30, 41, 59, 0.8)',
                  backgroundColor: 'rgba(15, 23, 42, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      style={{
                        width: '36px',
                        height: '36px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{
                          fontSize: 'clamp(13px, 1.8vw, 14px)',
                          fontWeight: 500,
                          color: '#F1F5F9',
                        }}>{testimonial.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', color: '#60A5FA' }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <p style={{
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        color: '#94A3B8',
                        margin: 0,
                        fontWeight: 400,
                      }}>{testimonial.handle}</p>
                    </div>
                  </div>
                  <p style={{
                    marginTop: '16px',
                    fontSize: 'clamp(13px, 1.8vw, 16px)',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 400,
                  }}>{testimonial.quote}</p>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: 'Tom H.', handle: '@tom_services', quote: 'I wish we had found Infin8 sooner. Our onboarding is now fully automated and clients move through our process with zero delays.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Nina C.', handle: '@nina_coaching', quote: 'The system runs my entire business while I am asleep. I wake up to booked appointments and completed tasks.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces&auto=format' },
                { name: 'Sofia A.', handle: '@sofialabs', quote: 'The automated reminders alone reduced cancellations by almost half. My calendar finally stays full.', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces&auto=format' },
              ].map((testimonial, idx) => (
                <div key={`dup-${idx}`} style={{
                  flexShrink: 0,
                  width: 'clamp(280px, 35vw, 420px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(30, 41, 59, 0.8)',
                  backgroundColor: 'rgba(15, 23, 42, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      style={{
                        width: '36px',
                        height: '36px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{
                          fontSize: 'clamp(13px, 1.8vw, 14px)',
                          fontWeight: 500,
                          color: '#F1F5F9',
                        }}>{testimonial.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', color: '#60A5FA' }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <p style={{
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        color: '#94A3B8',
                        margin: 0,
                        fontWeight: 400,
                      }}>{testimonial.handle}</p>
                    </div>
                  </div>
                  <p style={{
                    marginTop: '16px',
                    fontSize: 'clamp(13px, 1.8vw, 16px)',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 400,
                  }}>{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee-ltr {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes marquee-rtl {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes glow-rotate {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          @keyframes border-flow {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 400% 50%;
            }
          }
          @media (min-width: 640px) {
            .desktop-only {
              display: flex !important;
            }
          }
        `}</style>
      </section>

      {/* Client Requirements Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: 'clamp(48px, 8vw, 64px)', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            maxWidth: '400px',
            margin: '0 auto 24px',
          }}>
            <span style={{
              fontSize: 'clamp(11px, 1.5vw, 12px)',
              fontWeight: 500,
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>Requirements</span>
            <div style={{
              height: '1px',
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}></div>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#111827',
            marginBottom: 'clamp(16px, 3vw, 24px)',
            textAlign: 'center',
          }}>
            What We Need From You
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 1.6,
            color: '#6B7280',
            maxWidth: '768px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            To get started, we'll need access to a few key systems. Don't have them? We can help set them up.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
          gap: 'clamp(24px, 4vw, 32px)',
        }}>
          {/* Card 01 - Domain & Hosting */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.5)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            {/* Preview canvas */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#F9FAFB',
              height: 'clamp(240px, 30vw, 320px)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '16px',
              margin: 'clamp(16px, 2vw, 24px)',
            }}>
              {/* Layered background cards for depth */}
              <div style={{
                position: 'absolute',
                pointerEvents: 'none',
                right: '8px',
                top: '48px',
                background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.02), transparent)',
                width: '68%',
                height: '68%',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                transform: 'rotate(8deg)',
                boxShadow: '0 20px 80px rgba(0,0,0,0.1)',
              }}></div>

              {/* Main interface card */}
              <div style={{
                position: 'relative',
                zIndex: 10,
                margin: '24px auto 0',
                width: '88%',
                height: '76%',
                borderRadius: '12px',
                backgroundColor: '#fff',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
              }}>
                {/* Top bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#9CA3AF',
                    fontFamily: 'monospace',
                  }}>domain.com</p>
                </div>

                {/* Content area */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{
                      height: '8px',
                      width: '32px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}></div>
                    <div style={{
                      height: '8px',
                      width: '128px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}></div>
                    <div style={{
                      height: '40px',
                      width: '100%',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      backgroundColor: '#F9FAFB',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px',
                    }}>
                      <div style={{
                        width: '24px',
                        height: '8px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      }}></div>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                      marginTop: '16px',
                    }}>
                      <div style={{
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#F9FAFB',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                      }}></div>
                      <div style={{
                        height: '48px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                        border: '1px solid rgba(102, 126, 234, 0.2)',
                      }}></div>
                      <div style={{
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#F9FAFB',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(20px, 3vw, 24px)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#667eea',
                  fontFamily: 'monospace',
                }}>01</span>
              </div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
                textAlign: 'center',
              }}>Domain & Hosting</h3>
              <p style={{
                color: '#6B7280',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                Access to your domain/hosting or we can host/manage for you.
              </p>
            </div>
          </div>

          {/* Card 02 - Social Accounts */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.5)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            {/* Preview canvas */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#F9FAFB',
              height: 'clamp(240px, 30vw, 320px)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '16px',
              margin: 'clamp(16px, 2vw, 24px)',
            }}>
              {/* Main design interface */}
              <div style={{
                position: 'relative',
                zIndex: 10,
                backgroundColor: '#fff',
                width: '88%',
                height: '76%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                margin: '24px auto 0',
                boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
              }}>
                {/* Top bar */}
                <div style={{
                  display: 'flex',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  padding: '16px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#9CA3AF',
                    fontFamily: 'monospace',
                  }}>Social Dashboard</p>
                </div>

                {/* Design elements */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Icon grid */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      }}></div>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                      }}></div>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                      }}></div>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      }}></div>
                    </div>

                    {/* Components */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{
                        height: '32px',
                        width: '96px',
                        borderRadius: '8px',
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      }}></div>
                      <div style={{
                        height: '24px',
                        width: '100%',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      }}></div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{
                          height: '16px',
                          width: '64px',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}></div>
                        <div style={{
                          height: '16px',
                          width: '48px',
                          borderRadius: '9999px',
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(20px, 3vw, 24px)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#3B82F6',
                  fontFamily: 'monospace',
                }}>02</span>
              </div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
                textAlign: 'center',
              }}>Social Accounts</h3>
              <p style={{
                color: '#6B7280',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                Access to social media accounts or we can manage them.
              </p>
            </div>
          </div>

          {/* Card 03 - Content Uploads */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.5)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            {/* Preview canvas */}
            <div style={{
              position: 'relative',
              height: 'clamp(240px, 30vw, 320px)',
              borderRadius: '16px',
              backgroundColor: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              margin: 'clamp(16px, 2vw, 24px)',
            }}>
              {/* Main content interface */}
              <div style={{
                position: 'relative',
                zIndex: 10,
                backgroundColor: '#fff',
                width: '88%',
                height: '76%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                margin: '24px auto 0',
                boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
              }}>
                {/* Terminal-style header */}
                <div style={{
                  display: 'flex',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  padding: '16px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#9CA3AF',
                    fontFamily: 'monospace',
                  }}>content-upload.js</p>
                </div>

                {/* Content-like area */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontSize: '11px',
                      color: '#10B981',
                      fontFamily: 'monospace',
                    }}>const</span>
                    <div style={{
                      height: '8px',
                      width: '64px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)',
                    }}></div>
                    <div style={{
                      height: '8px',
                      width: '32px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      height: '8px',
                      width: '16px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(90deg, #A855F7 0%, #C084FC 100%)',
                    }}></div>
                    <div style={{
                      height: '8px',
                      width: '80px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}></div>
                  </div>
                  <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      height: '32px',
                      width: '100%',
                      borderRadius: '8px',
                      background: 'linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                    }}></div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{
                        height: '8px',
                        width: '48px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      }}></div>
                      <div style={{
                        height: '8px',
                        width: '24px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #10B981 0%, #14B8A6 100%)',
                      }}></div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '16px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                    }}></div>
                    <span style={{
                      fontSize: '11px',
                      color: '#10B981',
                      fontFamily: 'monospace',
                    }}>Upload complete</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(20px, 3vw, 24px)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#A855F7',
                  fontFamily: 'monospace',
                }}>03</span>
              </div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
                textAlign: 'center',
              }}>Content Uploads</h3>
              <p style={{
                color: '#6B7280',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                3 raw content pieces (videos/images) to jumpstart content pipeline.
              </p>
            </div>
          </div>

          {/* Card 04 - POS/Booking Access */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.5)';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)';
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
          }}
          >
            {/* Preview canvas */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#F9FAFB',
              height: 'clamp(240px, 30vw, 320px)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '16px',
              margin: 'clamp(16px, 2vw, 24px)',
            }}>
              {/* Main booking interface */}
              <div style={{
                position: 'relative',
                zIndex: 10,
                backgroundColor: '#fff',
                width: '88%',
                height: '76%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                margin: '24px auto 0',
                boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
              }}>
                {/* Top bar */}
                <div style={{
                  display: 'flex',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  padding: '16px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#9CA3AF',
                    fontFamily: 'monospace',
                  }}>Booking System</p>
                </div>

                {/* Booking elements */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Calendar grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: '4px',
                    }}>
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} style={{
                          height: '24px',
                          borderRadius: '4px',
                          backgroundColor: i === 7 || i === 8 ? 'rgba(102, 126, 234, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                          border: i === 7 || i === 8 ? '1px solid rgba(102, 126, 234, 0.2)' : '1px solid transparent',
                        }}></div>
                      ))}
                    </div>

                    {/* Time slots */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{
                        height: '24px',
                        width: '100%',
                        borderRadius: '6px',
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      }}></div>
                      <div style={{
                        height: '24px',
                        width: '80%',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      }}></div>
                      <div style={{
                        height: '24px',
                        width: '60%',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(20px, 3vw, 24px)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#10B981',
                  fontFamily: 'monospace',
                }}>04</span>
              </div>
              <h3 style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#111827',
                marginBottom: '12px',
                textAlign: 'center',
              }}>POS/Booking Access</h3>
              <p style={{
                color: '#6B7280',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                textAlign: 'center',
              }}>
                Access to existing POS/booking systems or we onboard new accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '700',
          color: '#111827',
          marginBottom: 'clamp(32px, 6vw, 48px)',
          letterSpacing: '-0.02em',
        }}>
          Monthly Performance Snapshot
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 25vw, 240px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
        }}>
          {[
            { metric: 'Leads per Week', desc: 'Track incoming inquiries' },
            { metric: 'Bookings per Week', desc: 'Monitor appointment volume' },
            { metric: 'Conversion Rate', desc: 'Measure booking efficiency' },
            { metric: 'No-Show %', desc: 'Pre/post automation comparison' },
            { metric: 'Revenue Attributed', desc: 'Track automation ROI' },
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#F9FAFB',
              borderRadius: '24px',
              padding: 'clamp(20px, 3vw, 24px)',
              textAlign: 'center',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#111827' }}>{item.metric}</h3>
              <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          marginBottom: 'clamp(16px, 3vw, 24px)',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}>
          Add-ons & Upsells
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 30vw, 320px), 1fr))',
          gap: 'clamp(24px, 4vw, 32px)',
          marginTop: 48,
        }}>
          {[
            { title: 'Paid Ads Management', desc: 'Google/Facebook ad management — monthly management fee + ad spend' },
            { title: 'Advanced E-commerce', desc: 'Advanced POS integrations and e-commerce features — one-time dev quote' },
            { title: 'Multi-Location', desc: 'Multi-location management — added monthly fee per location' },
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#F9FAFB',
              padding: 'clamp(24px, 4vw, 32px)',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600 }}>{item.title}</h3>
              <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section style={{
        backgroundColor: '#F9FAFB',
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: 1280,
        margin: '0 auto',
        textAlign: 'center',
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
          {[{
            q: 'Do you own my site/content?',
            a: 'You retain domain and content ownership. We deliver credentials and a handoff file.'
          }, {
            q: 'How long until I see results?',
            a: 'Basic improvements (booking flow, reminders) are immediate; measurable revenue improvements typically within 6–12 weeks.'
          }, {
            q: 'What if I want custom development?',
            a: 'Small tweaks are included (one major tweak/month). Larger custom dev is quoted separately.'
          }, {
            q: 'What happens if I cancel early?',
            a: 'For Simple Monthly (6‑month minimum) you are billed the remaining months. For Annual Saver, early cancellation triggers a one-time setup balance fee (see pricing).'
          }, {
            q: 'What payment methods?',
            a: 'Card on file (Stripe) is required for monthly plans. We can process ACH for annual invoices.'
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
    </>
  );
}

