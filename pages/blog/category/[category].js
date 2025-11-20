import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import blogPosts from '../../../data/blog/posts.json';

const categories = ['E-2 Visa', 'Small Business Operations', 'Automation'];

export default function BlogCategory() {
  const router = useRouter();
  const { category } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const categoryName = category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  const filteredPosts = categoryName ? blogPosts.filter(post => post.category === categoryName) : blogPosts;

  return (
    <>
      <Head>
        <title>{categoryName} — Infin8 Automation Blog</title>
        <meta name="description" content={`Articles about ${categoryName} from Infin8 Automation.`} />
      </Head>
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />
        
        {/* Hero Section */}
        <section style={{
          paddingTop: 'clamp(80px, 10vw, 128px)',
          paddingBottom: 'clamp(48px, 8vw, 64px)',
          backgroundColor: '#F9FAFB',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 32px)',
          }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
            }}>
              {categoryName}
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#4B5563',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              Articles about {categoryName.toLowerCase()}.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section style={{
          padding: 'clamp(32px, 6vw, 48px) clamp(16px, 4vw, 32px)',
          backgroundColor: '#fff',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(8px, 1.5vw, 12px)',
              justifyContent: 'center',
              marginBottom: 'clamp(32px, 6vw, 48px)',
            }}>
              <Link href="/blog"><a style={{
                padding: 'clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)',
                borderRadius: '9999px',
                backgroundColor: !categoryName ? '#111827' : '#F3F4F6',
                color: !categoryName ? '#fff' : '#4B5563',
                fontSize: 'clamp(13px, 1.8vw, 14px)',
                fontWeight: '500',
                textDecoration: 'none',
              }}>All</a></Link>
              {categories.map(cat => (
                <Link key={cat} href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}><a style={{
                  padding: 'clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)',
                  borderRadius: '9999px',
                  backgroundColor: categoryName === cat ? '#111827' : '#F3F4F6',
                  color: categoryName === cat ? '#fff' : '#4B5563',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (categoryName !== cat) {
                    e.currentTarget.style.backgroundColor = '#E5E7EB';
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseLeave={(e) => {
                  if (categoryName !== cat) {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                    e.currentTarget.style.color = '#4B5563';
                  }
                }}
                >{cat}</a></Link>
              ))}
            </div>

            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 40vw, 380px), 1fr))',
                gap: 'clamp(24px, 4vw, 32px)',
              }}>
                {filteredPosts.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <a style={{
                      display: 'block',
                      backgroundColor: '#fff',
                      borderRadius: 'clamp(8px, 1.5vw, 12px)',
                      border: '1px solid #E5E7EB',
                      padding: 'clamp(24px, 4vw, 32px)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    }}
                    >
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        backgroundColor: '#F3F4F6',
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        fontWeight: '500',
                        color: '#4B5563',
                        marginBottom: 'clamp(12px, 2vw, 16px)',
                      }}>
                        {post.category}
                      </div>
                      <h2 style={{
                        fontSize: 'clamp(20px, 2.5vw, 24px)',
                        fontWeight: '600',
                        letterSpacing: '-0.02em',
                        color: '#111827',
                        marginBottom: 'clamp(8px, 1.5vw, 12px)',
                        lineHeight: 1.3,
                      }}>
                        {post.title}
                      </h2>
                      <p style={{
                        fontSize: 'clamp(14px, 1.8vw, 16px)',
                        color: '#4B5563',
                        lineHeight: 1.6,
                        marginBottom: 'clamp(12px, 2vw, 16px)',
                      }}>
                        {post.excerpt}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(8px, 1.5vw, 12px)',
                        fontSize: 'clamp(12px, 1.6vw, 13px)',
                        color: '#6B7280',
                      }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#4B5563',
                textAlign: 'center',
              }}>
                No posts found in this category.
              </p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

