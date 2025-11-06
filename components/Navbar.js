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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/"><a style={{
            fontWeight: '600',
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            letterSpacing: '-0.02em',
            color: '#111827',
            textDecoration: 'none',
          }}>
            Infin8
          </a></Link>
        </div>
        
        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px',
        }}
        className="desktop-menu"
        >
          <Link href="/e2"><a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >E-2 Basics</a></Link>
          <Link href="/e2/business-setup"><a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Business Setup</a></Link>
          <Link href="/resources"><a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >Resources</a></Link>
          <Link href="/faq"><a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >FAQ</a></Link>
        </div>
        
        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{
            display: 'none',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          className="sign-in-btn"
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            Sign In
          </button>
          <button style={{
            cursor: 'pointer',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'baseline',
            justifyContent: 'center',
            overflow: 'hidden',
            outline: 'none',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            transition: 'all 0.15s',
            fontSize: 'clamp(14px, 2vw, 16px)',
            textAlign: 'center',
            color: '#fff',
            background: 'linear-gradient(to bottom, #404040, #171717)',
            border: 'none',
            borderRadius: '12px',
            padding: 'clamp(10px, 1.5vw, 12px) clamp(24px, 4vw, 32px)',
            fontWeight: '500',
            boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => {
            // Scroll to quiz or open quiz modal here
          }}
          >
            Get Started
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .sign-in-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </nav>
  );
}


