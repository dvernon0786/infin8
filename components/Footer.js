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
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.5vw, 12px)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
              <span style={{
                fontWeight: '600',
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                letterSpacing: '-0.02em',
                color: '#111827',
              }}>Infin8</span>
            </div>
            <p style={{
              color: '#4B5563',
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '1.6',
              marginBottom: 'clamp(20px, 3vw, 24px)',
            }}>
              Your bridge to E-2 visa success. From eligibility to business setup, we guide you every step of the way.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(12px, 2vw, 16px)' }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                width: 'clamp(36px, 5vw, 40px)',
                height: 'clamp(36px, 5vw, 40px)',
                backgroundColor: '#F3F4F6',
                borderRadius: 'clamp(6px, 1vw, 8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4B5563',
                fontSize: 'clamp(18px, 2.5vw, 20px)',
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
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{
                width: 'clamp(36px, 5vw, 40px)',
                height: 'clamp(36px, 5vw, 40px)',
                backgroundColor: '#F3F4F6',
                borderRadius: 'clamp(6px, 1vw, 8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4B5563',
                fontSize: 'clamp(18px, 2.5vw, 20px)',
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
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              color: '#111827',
              marginBottom: 'clamp(12px, 2vw, 16px)',
            }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/e2"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >E-2 Basics</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/e2/business-setup"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Business Setup</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/resources"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Resources</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/faq"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
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
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              color: '#111827',
              marginBottom: 'clamp(12px, 2vw, 16px)',
            }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/resources"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Tools & Guides</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/blog"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Blog</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/marketplace"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
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
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              color: '#111827',
              marginBottom: 'clamp(12px, 2vw, 16px)',
            }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/about"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >About Us</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/partners"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Partners</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/contact"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
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
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              color: '#111827',
              marginBottom: 'clamp(12px, 2vw, 16px)',
            }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/privacy"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Privacy Policy</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/terms"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Terms of Service</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/disclaimer"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Disclaimer</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/cookies"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Cookie Notice</a></Link>
              </li>
              <li style={{ marginBottom: 'clamp(10px, 1.5vw, 12px)' }}>
                <Link href="/unsubscribe"><a style={{
                  color: '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                >Email Opt-Out</a></Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div style={{
          borderTop: '1px solid #E5E7EB',
          paddingTop: 'clamp(24px, 4vw, 32px)',
          marginTop: 'clamp(24px, 4vw, 32px)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(10px, 1.5vw, 12px)',
            maxWidth: '400px',
          }}>
            <h3 style={{
              color: '#111827',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              fontWeight: '600',
              marginBottom: 'clamp(8px, 1.5vw, 12px)',
            }}>Stay Informed on E-2 Business Operations</h3>
            <p style={{
              color: '#4B5563',
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: 1.6,
              marginBottom: 'clamp(16px, 3vw, 20px)',
            }}>
              Receive occasional updates on E-2 business operations, automation strategies, and platform improvements. No spam.
            </p>
            <form action="/api/subscribe" method="POST" style={{
              display: 'flex',
              gap: 'clamp(6px, 1vw, 8px)',
              marginBottom: 'clamp(12px, 2vw, 16px)',
            }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                style={{
                  flex: 1,
                  padding: 'clamp(8px, 1.2vw, 10px) clamp(12px, 2vw, 16px)',
                  borderRadius: 'clamp(6px, 1vw, 8px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
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
                padding: 'clamp(8px, 1.2vw, 10px) clamp(20px, 3vw, 24px)',
                border: 'none',
                borderRadius: 'clamp(6px, 1vw, 8px)',
                cursor: 'pointer',
                fontSize: 'clamp(13px, 1.8vw, 14px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1F2937'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
              >
                Subscribe
              </button>
            </form>
            <p style={{
              color: '#6B7280',
              fontSize: 'clamp(11px, 1.5vw, 12px)',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}>
              By subscribing, you agree to receive informational emails. These emails are not legal advice and do not create an attorney–client relationship.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #E5E7EB',
          paddingTop: 'clamp(20px, 3vw, 24px)',
          marginTop: 'clamp(24px, 4vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(6px, 1vw, 8px)',
        }}>
          <p style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            color: '#6B7280',
            margin: 0,
          }}>
            © 2025 Infin8 Automation. All rights reserved.
          </p>
          <p style={{
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            color: '#6B7280',
            margin: 'clamp(4px, 1vw, 8px) 0 0',
          }}>
            Contact: <a href="mailto:info@infin8automation.com" style={{ color: '#00AA44', textDecoration: 'none' }}>info@infin8automation.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}


