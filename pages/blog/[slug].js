import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blog/posts.json';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />
        <div style={{ maxWidth: 900, margin: 'clamp(64px, 10vw, 128px) auto', padding: '0 clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
          <h1>Post Not Found</h1>
          <Link href="/blog"><a>Back to Blog</a></Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Convert markdown-style content to HTML paragraphs
  const contentParagraphs = post.content.split('\n\n').filter(p => p.trim());

  return (
    <>
      <Head>
        <title>{post.title} — Infin8 Automation Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />
        
        <article style={{
          maxWidth: '800px',
          margin: 'clamp(64px, 10vw, 128px) auto',
          padding: '0 clamp(16px, 4vw, 32px)',
        }}>
          {/* Header */}
          <header style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}>
            <Link href="/blog"><a style={{
              color: '#00AA44',
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              textDecoration: 'none',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              display: 'inline-block',
            }}>← Back to Blog</a></Link>
            
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: '#F3F4F6',
              fontSize: 'clamp(11px, 1.5vw, 12px)',
              fontWeight: '500',
              color: '#4B5563',
              marginBottom: 'clamp(16px, 3vw, 24px)',
            }}>
              {post.category}
            </div>
            
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
              lineHeight: 1.2,
            }}>
              {post.title}
            </h1>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(8px, 1.5vw, 12px)',
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              color: '#6B7280',
              marginBottom: 'clamp(24px, 4vw, 32px)',
            }}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Content */}
          <div style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 1.8,
            color: '#4B5563',
          }}>
            {contentParagraphs.map((paragraph, idx) => {
              // Check if it's a heading
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} style={{
                    fontSize: 'clamp(24px, 3.5vw, 28px)',
                    fontWeight: '700',
                    letterSpacing: '-0.02em',
                    color: '#111827',
                    marginTop: 'clamp(32px, 6vw, 48px)',
                    marginBottom: 'clamp(16px, 3vw, 24px)',
                  }}>
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              // Check if it's a list item
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(i => i.trim().startsWith('- '));
                return (
                  <ul key={idx} style={{
                    marginTop: 'clamp(16px, 3vw, 24px)',
                    marginBottom: 'clamp(16px, 3vw, 24px)',
                    paddingLeft: 'clamp(20px, 3vw, 24px)',
                  }}>
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{
                        marginBottom: 'clamp(8px, 1.5vw, 12px)',
                      }}>
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Regular paragraph
              return (
                <p key={idx} style={{
                  marginBottom: 'clamp(16px, 3vw, 24px)',
                }}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

