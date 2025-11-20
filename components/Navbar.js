import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(12px, 2vw, 16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'clamp(56px, 8vw, 64px)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.5vw, 12px)' }}>
          <Link href="/">
            <a style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}>
              <img 
                src="/images/logo.png" 
                alt="Infin8" 
                style={{
                  height: 'clamp(32px, 5vw, 40px)',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </a>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: 'clamp(24px, 4vw, 32px)',
        }}
        className="desktop-menu"
        >
          <Link href="/e2"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >E-2 Basics</a></Link>
          <Link href="/e2/business-setup"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Business Setup</a></Link>
          <Link href="/resources"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Resources</a></Link>
          <Link href="/blog"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Blog</a></Link>
          <Link href="/entrepreneurs"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Entrepreneurs</a></Link>
          <Link href="/contact"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Contact</a></Link>
          <Link href="/faq"><a style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >FAQ</a></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: 0,
          }}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              color: '#374151',
              transition: 'transform 0.3s',
              transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(229, 231, 235, 0.6)',
          padding: 'clamp(16px, 4vw, 24px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
        className="mobile-menu"
      >
        <Link href="/e2">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            E-2 Basics
          </a>
        </Link>
        <Link href="/e2/business-setup">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            Business Setup
          </a>
        </Link>
        <Link href="/resources">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            Resources
          </a>
        </Link>
        <Link href="/blog">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            Blog
          </a>
        </Link>
        <Link href="/entrepreneurs">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            Entrepreneurs
          </a>
        </Link>
        <Link href="/contact">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            Contact
          </a>
        </Link>
        <Link href="/faq">
          <a
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: '500',
              color: '#374151',
              textDecoration: 'none',
              padding: 'clamp(12px, 2vw, 16px) 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            FAQ
          </a>
        </Link>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}


