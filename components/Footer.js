import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#fff',
      borderTop: '1px solid #E5E7EB',
      padding: 'clamp(32px, 6vw, 48px) clamp(16px, 4vw, 16px)',
      marginTop: 'clamp(40px, 8vw, 60px)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(180px, 25vw, 200px), 1fr))',
          gap: 'clamp(24px, 4vw, 32px)',
          marginBottom: 'clamp(24px, 4vw, 32px)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{
                fontWeight: '600',
                fontSize: '20px',
                letterSpacing: '-0.02em',
                color: '#111827',
              }}>Infin8</span>
            </div>
            <p style={{
              color: '#4B5563',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '24px',
            }}>
              Your bridge to E-2 visa success. From eligibility to business setup, we guide you every step of the way.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#F3F4F6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4B5563',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
                e.currentTarget.style.color = '#4B5563';
              }}
              >🔗</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#F3F4F6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4B5563',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
                e.currentTarget.style.color = '#4B5563';
              }}
              >▶️</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#F3F4F6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4B5563',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
                e.currentTarget.style.color = '#4B5563';
              }}
              >🐦</a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 style={{
              fontWeight: '600',
              fontSize: '14px',
              color: '#111827',
              marginBottom: '16px',
            }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/e2"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >E-2 Basics</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/e2/business-setup"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Business Setup</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/resources"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Resources</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/faq"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >FAQ</a></Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 style={{
              fontWeight: '600',
              fontSize: '14px',
              color: '#111827',
              marginBottom: '16px',
            }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/resources"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Tools & Guides</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="/blog" style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Blog</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/marketplace"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Marketplace</a></Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 style={{
              fontWeight: '600',
              fontSize: '14px',
              color: '#111827',
              marginBottom: '16px',
            }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/about"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >About Us</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/partners"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Partners</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/contact"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Contact</a></Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 style={{
              fontWeight: '600',
              fontSize: '14px',
              color: '#111827',
              marginBottom: '16px',
            }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/privacy"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Privacy Policy</a></Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/terms"><a style={{
                  color: '#4B5563',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Terms of Service</a></Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div style={{
          borderTop: '1px solid #E5E7EB',
          paddingTop: '32px',
          marginTop: '32px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '400px',
          }}>
            <label htmlFor="email" style={{
              color: '#6B7280',
              fontSize: '14px',
              fontWeight: '500',
            }}>Get E-2 updates</label>
            <form action="/api/subscribe" method="POST" style={{
              display: 'flex',
              gap: '8px',
            }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  fontSize: '14px',
                  fontWeight: '400',
                  outline: 'none',
                  backgroundColor: '#fff',
                  color: '#111827',
                }}
              />
              <button type="submit" style={{
                backgroundColor: '#111827',
                color: '#fff',
                fontWeight: '500',
                padding: '10px 24px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1F2937'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #E5E7EB',
          paddingTop: '24px',
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#6B7280',
            margin: 0,
          }}>
            © 2025 Infin8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


