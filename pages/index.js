import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [primaryButtonHovered, setPrimaryButtonHovered] = useState(false);
  const [heroVariant, setHeroVariant] = useState('A'); // A/B testing

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
              }}>
                SMS & Email Reminders
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
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
              }}>
                Monthly Analytics
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
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
              }}>
                AI Chatbot
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: 'clamp(14px, 1.8vw, 16px)',
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
                textAlign: 'left',
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
                <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        backgroundColor: '#ffffff',
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
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            marginBottom: 'clamp(32px, 6vw, 48px)',
            color: '#4B5563',
            lineHeight: 1.6,
          }}>
            Choose the plan that works for your business
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 320px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            justifyContent: 'center',
          }}>
            {/* Plan 1: Simple Monthly */}
            <div style={{
              backgroundColor: '#fff',
              padding: 'clamp(32px, 4vw, 40px)',
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
              <h3 style={{ fontSize: 24, marginBottom: 12, color: '#111827', fontWeight: 600 }}>Simple Monthly</h3>
              <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8, color: '#111827' }}>$1,000</div>
              <div style={{ fontSize: 16, color: '#6B7280', marginBottom: 24 }}>per month</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', textAlign: 'left' }}>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ Setup included in the first month</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ 6-month minimum</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ Month-to-month after 6 months</li>
              </ul>
              <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 24, fontStyle: 'italic', lineHeight: 1.5 }}>
                Best for: Businesses wanting predictable monthly billing with setup spread out.
              </p>
              <a href="/contact" style={{
                display: 'block',
                backgroundColor: '#111827',
                color: '#fff',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: 16,
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1F2937';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
              }}
              >
                Get Started
              </a>
            </div>

            {/* Plan 2: Annual Growth Plan — Best Value */}
            <div style={{
              backgroundColor: '#fff',
              padding: 'clamp(32px, 4vw, 40px)',
              borderRadius: '24px',
              border: '2px solid #667eea',
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
              transition: 'all 0.3s',
              position: 'relative',
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
              <span style={{
                position: 'absolute',
                top: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#667eea',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: 12,
                fontWeight: 600,
              }}>⭐ BEST VALUE</span>
              <h3 style={{ fontSize: 24, marginBottom: 12, color: '#111827', fontWeight: 600 }}>Annual Growth Plan</h3>
              <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8, color: '#111827' }}>$1,000</div>
              <div style={{ fontSize: 16, color: '#6B7280', marginBottom: 24 }}>per month (12 months)</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', textAlign: 'left' }}>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ $6,000 setup completely waived</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ 12-month commitment</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ Save $6,000 instantly</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ Priority support + quarterly optimization reviews (bonus value)</li>
              </ul>
              <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 24, fontStyle: 'italic', lineHeight: 1.5 }}>
                Best for: Businesses ready to scale fast with maximum savings.
              </p>
              <a href="/contact" style={{
                display: 'block',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: 16,
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              >
                Get Started
              </a>
            </div>

            {/* Plan 3: No-Contract Flex Plan */}
            <div style={{
              backgroundColor: '#fff',
              padding: 'clamp(32px, 4vw, 40px)',
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
              <h3 style={{ fontSize: 24, marginBottom: 12, color: '#111827', fontWeight: 600 }}>No-Contract Flex Plan</h3>
              <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8, color: '#111827' }}>$6,000</div>
              <div style={{ fontSize: 16, color: '#6B7280', marginBottom: 8 }}>one-time setup</div>
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, color: '#111827' }}>+ $1,000/month</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', textAlign: 'left' }}>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ No commitments</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ Pay setup upfront</li>
                <li style={{ padding: '8px 0', fontSize: 14, color: '#4B5563' }}>✔ Cancel anytime</li>
              </ul>
              <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 24, fontStyle: 'italic', lineHeight: 1.5 }}>
                Best for: Businesses that want full flexibility with no lock-ins.
              </p>
              <a href="/contact" style={{
                display: 'block',
                backgroundColor: '#111827',
                color: '#fff',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: 16,
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1F2937';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
              }}
              >
                Get Started
              </a>
            </div>
          </div>
          <p style={{
            marginTop: 32,
            fontSize: 12,
            color: '#6B7280',
            maxWidth: 800,
            margin: '32px auto 0',
          }}>
            6‑month minimum applies to Simple Monthly offers. Annual Saver requires 12‑month commitment. Setup value referenced is for internal accounting — savings only apply if the client honors the commitment. No refunds on prior-service months. We pause automations for unpaid invoices.
          </p>
        </div>
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
          Onboarding & Timeline
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 25vw, 240px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
        }}>
          {[
            { week: 'Week 0', title: 'Sign & Access', desc: 'Pay first month, provide domain, logins, 3 raw media uploads' },
            { week: 'Week 1', title: 'Foundation', desc: 'Audit, sitemap, homepage & booking skeleton live' },
            { week: 'Week 2', title: 'Automation Setup', desc: 'CRM, lead flows, chatbot; basic booking/payment live' },
            { week: 'Week 3', title: 'Content & Reminders', desc: 'Content pipeline scheduled (first 14 posts), SMS reminders activated' },
            { week: 'Week 4', title: 'Analytics & Handoff', desc: 'Analytics dashboard + monthly snapshot delivered' },
          ].map(({ week, title, desc }, idx) => (
            <div key={idx} style={{
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
                fontSize: 14,
                fontWeight: '600',
                color: '#667eea',
                marginBottom: 8,
              }}>{week}</div>
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
          Months 2–6: Ongoing optimization, content, and monthly improvements.
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
            Trusted by Small Business Owners
          </h2>

          <blockquote style={{
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1.6,
            color: '#111827',
            marginBottom: 20,
          }}>
            "Infin8 Automation transformed my booking system. No-shows dropped by 60%, and I'm saving 15 hours a week on admin work. The automated content pipeline alone has been a game-changer."
          </blockquote>

          <footer style={{
            fontWeight: 600,
            fontSize: 16,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Sarah M. — Salon Owner, Austin, TX
          </footer>
        </div>
      </section>

      {/* Client Requirements Section */}
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
            What We Need From You
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 30vw, 320px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            marginTop: 48,
          }}>
            {[
              { title: 'Domain & Hosting', desc: 'Access to your domain/hosting or we can host/manage for you' },
              { title: 'Social Accounts', desc: 'Access to social media accounts or we can manage them' },
              { title: 'Content Uploads', desc: '3 raw content pieces (videos/images) to jumpstart content pipeline' },
              { title: 'POS/Booking Access', desc: 'Access to existing POS/booking systems or we onboard new accounts' },
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fff',
                padding: 'clamp(24px, 4vw, 32px)',
                borderRadius: '24px',
                border: '1px solid rgba(0,0,0,0.05)',
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
                <h3 style={{ fontSize: 20, marginBottom: 12, color: '#111827', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section style={{
        padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 16px)',
        maxWidth: '1280px',
        margin: '0 auto',
        backgroundColor: '#fff',
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

