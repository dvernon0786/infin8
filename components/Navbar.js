import React from 'react';
import Link from 'next/link';

export default function Navbar() {
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
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}


