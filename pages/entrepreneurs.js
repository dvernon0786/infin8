import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Entrepreneurs() {
  const countries = [
    {
      name: 'Mexico',
      flag: '🇲🇽',
      businesses: '570,000+',
      monthlyNew: '50,000+',
      annualIncome: '$17 billion',
      ownershipRate: 'High',
      industries: ['Construction', 'Food Services', 'Hospitality', 'Transportation'],
      description: 'Mexican immigrants lead all other nationalities in U.S. entrepreneurship by a wide margin, constituting more than 1 in every 25 businesses nationwide.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    },
    {
      name: 'India',
      flag: '🇮🇳',
      businesses: 'Tens of thousands',
      monthlyNew: '2,500+',
      annualIncome: '$9+ billion',
      ownershipRate: 'High',
      industries: ['Technology', 'Engineering', 'E-commerce', 'Franchises', 'Hotels'],
      description: 'Indian immigrants are a driving force in American entrepreneurship, particularly in technology and engineering fields, with 26% of immigrant-founded tech startups having an Indian founder.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    },
    {
      name: 'China',
      flag: '🇨🇳',
      businesses: 'Tens of thousands',
      monthlyNew: '2,500+',
      annualIncome: '$3.9 billion',
      ownershipRate: '10%',
      industries: ['Restaurants', 'Import/Export', 'Retail', 'Technology'],
      description: 'Chinese immigrants combine high rates of business ownership with a large immigrant population, resulting in substantial economic impact across traditional and tech sectors.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    },
    {
      name: 'South Korea',
      flag: '🇰🇷',
      businesses: '120,000+',
      monthlyNew: 'Significant',
      annualIncome: '$7.1 billion',
      ownershipRate: '20%+',
      industries: ['Dry Cleaning', 'Groceries', 'Beauty Supply', 'Nail Salons', 'Restaurants'],
      description: 'South Korean immigrants boast one of the highest entrepreneurship rates, with over 20% owning businesses and dominating niches like dry cleaning and nail salons.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
    },
    {
      name: 'Vietnam',
      flag: '🇻🇳',
      businesses: '100,000',
      monthlyNew: '2,500+',
      annualIncome: '$4.3 billion',
      ownershipRate: '14%',
      industries: ['Nail Salons', 'Restaurants', 'Auto Repair', 'Landscaping'],
      description: 'Vietnamese immigrants have emerged as a vibrant entrepreneurial community, with over 50% of all nail salons in the U.S. owned by Vietnamese Americans.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
    },
    {
      name: 'Cuba',
      flag: '🇨🇺',
      businesses: '75,000+',
      monthlyNew: '2,500+',
      annualIncome: '$3.7 billion',
      ownershipRate: '15%',
      industries: ['Restaurants', 'Bakeries', 'Retail', 'Money Transfer', 'Construction'],
      description: 'Cuban Americans have a long and successful track record in U.S. business, particularly in South Florida, where they have turned Miami into an entrepreneurial hotspot.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
    },
    {
      name: 'Guatemala',
      flag: '🇬🇹',
      businesses: '50,000+',
      monthlyNew: '2,500+',
      annualIncome: 'Significant',
      ownershipRate: '10.6%',
      industries: ['Construction', 'Cleaning', 'Landscaping', 'Trucking', 'Food Services'],
      description: 'Guatemalan immigrants are a significant and growing force in U.S. small business, often starting with little capital and serving both their diaspora and wider markets.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    },
    {
      name: 'El Salvador',
      flag: '🇸🇻',
      businesses: 'Tens of thousands',
      monthlyNew: '2,500+',
      annualIncome: '$2.2 billion',
      ownershipRate: '9-10%',
      industries: ['Home Services', 'Transportation', 'Auto Repair', 'Food Service', 'Remittance'],
      description: 'Salvadoran immigrants constitute one of the largest immigrant groups in the U.S. and have increasingly turned to entrepreneurship as a path to economic advancement.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      name: 'Honduras',
      flag: '🇭🇳',
      businesses: 'Tens of thousands',
      monthlyNew: '2,500+',
      annualIncome: 'Growing',
      ownershipRate: '11.2%',
      industries: ['Construction', 'Cleaning', 'Trucking', 'Food Businesses'],
      description: 'Honduran immigrants exhibit a noteworthy entrepreneurial streak, with an above-average business ownership rate and growing presence in major metropolitan areas.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    },
    {
      name: 'Dominican Republic',
      flag: '🇩🇴',
      businesses: '40,000+',
      monthlyNew: '2,500+',
      annualIncome: '$2+ billion',
      ownershipRate: '9%',
      industries: ['Bodegas', 'Beauty Salons', 'Transportation', 'Construction', 'Restaurants'],
      description: 'Dominican immigrants have a strong entrepreneurial presence, particularly in East Coast cities, with iconic businesses like bodegas and beauty salons.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
    },
  ];

  return (
    <>
      <Head>
        <title>Immigrant Entrepreneurs: Key Country Profiles | Infin8 Automation</title>
        <meta name="description" content="Discover how immigrant entrepreneurs from Mexico, India, China, and other countries are driving American business. Learn about our $1,000/month automation program designed for immigrant entrepreneurs." />
      </Head>
      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
        <Navbar />

        {/* Hero Section */}
        <section style={{
          position: 'relative',
          paddingTop: 'clamp(80px, 10vw, 128px)',
          paddingBottom: 'clamp(48px, 8vw, 64px)',
          overflow: 'hidden',
          backgroundColor: '#F9FAFB',
          textAlign: 'center',
        }}>
          {/* Background Elements */}
          <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '-64px',
              width: '672px',
              height: '672px',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.08), rgba(99, 102, 241, 0.04), transparent)',
              filter: 'blur(96px)',
            }}></div>
          </div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 32px)',
          }}>
            {/* Badge */}
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
              marginBottom: 'clamp(16px, 3vw, 24px)',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Entrepreneurship Insights
            </span>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
              textAlign: 'center',
              lineHeight: 1.2,
            }}>
              Immigrant Entrepreneurs: Key Country Profiles
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#4B5563',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
              textAlign: 'center',
            }}>
              Immigrants play an outsized role in American entrepreneurship. Although immigrants are about 13% of the U.S. population, they represent roughly 18% of small business owners and account for 30% of small business growth from 1990 to 2010.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section style={{
          padding: 'clamp(48px, 8vw, 64px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 25vw, 280px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
          }}>
            {[
              { label: 'Small Business Owners', value: '18%', desc: 'Immigrant share' },
              { label: 'Business Growth', value: '30%', desc: '1990-2010 contribution' },
              { label: 'Gas Station Owners', value: '53%', desc: 'Foreign-born' },
              { label: 'Grocery Store Owners', value: '49%', desc: 'Foreign-born' },
            ].map((stat, idx) => (
              <div key={idx} style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 32px)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  fontSize: 'clamp(32px, 5vw, 40px)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '4px',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: 'clamp(12px, 1.8vw, 14px)',
                  color: '#6B7280',
                }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Country Profiles Section */}
        <section style={{
          padding: 'clamp(48px, 8vw, 64px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#F9FAFB',
          textAlign: 'center',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '768px',
            margin: '0 auto clamp(48px, 8vw, 64px)',
          }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
            }}>
              Top Countries of Origin
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#4B5563',
              lineHeight: 1.6,
            }}>
              Profiles of the top countries of origin for immigrant entrepreneurs, together accounting for the majority of immigrant-founded businesses in the U.S.
            </p>
          </div>

          {/* Country Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 35vw, 380px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
          }}>
            {countries.map((country, idx) => (
              <div key={idx} style={{
                position: 'relative',
                borderRadius: '24px',
                backgroundColor: '#fff',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                {/* Image */}
                <div style={{
                  width: '100%',
                  height: 'clamp(180px, 25vw, 220px)',
                  overflow: 'hidden',
                  backgroundColor: '#F9FAFB',
                }}>
                  <img
                    src={country.image}
                    alt={`${country.name} entrepreneurs`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{
                  padding: 'clamp(24px, 4vw, 32px)',
                }}>
                  {/* Flag and Name */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: 'clamp(12px, 2vw, 16px)',
                    justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '32px' }}>{country.flag}</span>
                    <h3 style={{
                      fontSize: 'clamp(20px, 2.5vw, 24px)',
                      fontWeight: 700,
                      color: '#111827',
                      letterSpacing: '-0.02em',
                    }}>
                      {country.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: '#4B5563',
                    lineHeight: 1.6,
                    marginBottom: 'clamp(16px, 3vw, 24px)',
                    textAlign: 'center',
                  }}>
                    {country.description}
                  </p>

                  {/* Stats Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    marginBottom: 'clamp(16px, 3vw, 24px)',
                  }}>
                    <div style={{
                      padding: '12px',
                      backgroundColor: '#F9FAFB',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}>
                      <div style={{
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        color: '#6B7280',
                        marginBottom: '4px',
                      }}>
                        Businesses
                      </div>
                      <div style={{
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 600,
                        color: '#111827',
                      }}>
                        {country.businesses}
                      </div>
                    </div>
                    <div style={{
                      padding: '12px',
                      backgroundColor: '#F9FAFB',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}>
                      <div style={{
                        fontSize: 'clamp(11px, 1.5vw, 12px)',
                        color: '#6B7280',
                        marginBottom: '4px',
                      }}>
                        Annual Income
                      </div>
                      <div style={{
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 600,
                        color: '#111827',
                      }}>
                        {country.annualIncome}
                      </div>
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <div style={{
                      fontSize: 'clamp(12px, 1.8vw, 14px)',
                      fontWeight: 600,
                      color: '#6B7280',
                      marginBottom: '8px',
                      textAlign: 'center',
                    }}>
                      Common Industries
                    </div>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      justifyContent: 'center',
                    }}>
                      {country.industries.slice(0, 4).map((industry, i) => (
                        <span key={i} style={{
                          padding: '4px 10px',
                          backgroundColor: '#F9FAFB',
                          borderRadius: '8px',
                          fontSize: 'clamp(11px, 1.5vw, 12px)',
                          color: '#4B5563',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                        }}>
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transition Section */}
        <section style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
            }}>
              Ready to Start Your Business?
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#4B5563',
              lineHeight: 1.6,
              marginBottom: 'clamp(32px, 6vw, 48px)',
            }}>
              Whether you're an immigration business consultant helping clients or a small business owner yourself, our $1,000/month automation program is designed to deliver results with minimal effort on your part.
            </p>
          </div>
        </section>

        {/* Automation Program Section */}
        <section style={{
          padding: 'clamp(48px, 8vw, 64px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#F9FAFB',
          textAlign: 'center',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '768px',
            margin: '0 auto clamp(48px, 8vw, 64px)',
          }}>
            <span style={{
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Business Automation
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              color: '#111827',
            }}>
              $1,000/Month Business Automation Program
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#4B5563',
              lineHeight: 1.6,
            }}>
              Automate your small business for growth. Turnkey marketing, operations, and more, all for $5,900 + $1,000/month.
            </p>
          </div>

          {/* What's Included Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 360px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            marginBottom: 'clamp(48px, 8vw, 64px)',
          }}>
            {[
              {
                title: 'Custom Website & Online Booking',
                description: 'Professional, mobile-friendly website with built-in appointment scheduling and lead capture forms.',
                icon: '🌐',
              },
              {
                title: 'Marketing Automation & Daily Content',
                description: 'Automated social media posts and email newsletters, keeping your brand in front of customers consistently.',
                icon: '📱',
              },
              {
                title: 'Customer Relationship Management',
                description: 'Simple CRM system to track interactions and automate follow-ups, ensuring no prospect falls through the cracks.',
                icon: '📊',
              },
              {
                title: 'AI Chatbot & 24/7 Support',
                description: 'Built-in AI chatbot that instantly answers common customer questions and collects leads after hours.',
                icon: '💬',
              },
              {
                title: 'Appointment Reminders & SMS',
                description: 'Automated email/text reminders for client appointments, cutting no-show rates by up to 50%.',
                icon: '⏰',
              },
              {
                title: 'Operations & Admin Automation',
                description: 'Streamlined invoicing, payment reminders, expense tracking, and task management systems.',
                icon: '⚙️',
              },
              {
                title: 'Analytics Dashboard',
                description: 'Real-time dashboard tracking web traffic, lead generation, sales, and key business metrics.',
                icon: '📈',
              },
            ].map((feature, idx) => (
              <div key={idx} style={{
                position: 'relative',
                borderRadius: '24px',
                backgroundColor: '#fff',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                padding: 'clamp(24px, 4vw, 32px)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                <div style={{
                  fontSize: '48px',
                  marginBottom: 'clamp(12px, 2vw, 16px)',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 20px)',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: 'clamp(8px, 1.5vw, 12px)',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  color: '#4B5563',
                  lineHeight: 1.6,
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '24px',
            padding: 'clamp(32px, 6vw, 48px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            marginBottom: 'clamp(48px, 8vw, 64px)',
          }}>
            <h3 style={{
              fontSize: 'clamp(24px, 3.5vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(24px, 4vw, 32px)',
              color: '#111827',
            }}>
              Why Automate? The Benefits for Your Business
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))',
              gap: 'clamp(20px, 3vw, 24px)',
            }}>
              {[
                { title: 'Save Time', desc: 'Automation handles repetitive work, freeing you to focus on high-value tasks.' },
                { title: 'Increase Revenue', desc: 'Consistent marketing and fast follow-ups lead to more customers.' },
                { title: 'Improve Customer Experience', desc: 'Quick responses, easy online booking, and never-forgotten appointments.' },
                { title: 'Work On Your Business', desc: 'Step back and be the strategist with up-to-date dashboards and reports.' },
                { title: 'Stay Competitive', desc: 'Leverage cutting-edge tools without needing a full IT department.' },
              ].map((benefit, idx) => (
                <div key={idx} style={{
                  textAlign: 'center',
                }}>
                  <h4 style={{
                    fontSize: 'clamp(16px, 2.2vw, 18px)',
                    fontWeight: 600,
                    color: '#111827',
                    marginBottom: '8px',
                  }}>
                    {benefit.title}
                  </h4>
                  <p style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: '#4B5563',
                    lineHeight: 1.6,
                  }}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '24px',
            padding: 'clamp(32px, 6vw, 48px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
            marginBottom: 'clamp(48px, 8vw, 64px)',
          }}>
            <h3 style={{
              fontSize: 'clamp(24px, 3.5vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(24px, 4vw, 32px)',
              color: '#111827',
            }}>
              Our Process and Pricing
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))',
              gap: 'clamp(24px, 4vw, 32px)',
            }}>
              {[
                { step: '1', title: 'Free Consultation', desc: 'Strategy call to learn about your business needs and show how automation can help.' },
                { step: '2', title: '$5,900 Launch Package', desc: 'One-time setup covering custom website, tool integrations, and tailored operations (2-4 weeks).' },
                { step: '3', title: '$1,000/Month Ongoing', desc: 'Continuous hosting, weekly content, email campaigns, CRM monitoring, and monthly reports.' },
                { step: '4', title: 'Support & Updates', desc: 'Unlimited email support, monthly check-ins, and proactive implementation of new automation tools.' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#111827',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(18px, 2.5vw, 20px)',
                    fontWeight: 700,
                    margin: '0 auto clamp(12px, 2vw, 16px)',
                  }}>
                    {item.step}
                  </div>
                  <h4 style={{
                    fontSize: 'clamp(16px, 2.2vw, 18px)',
                    fontWeight: 600,
                    color: '#111827',
                    marginBottom: '8px',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: '#4B5563',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '24px',
            padding: 'clamp(32px, 6vw, 48px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
          }}>
            <h3 style={{
              fontSize: 'clamp(24px, 3.5vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(24px, 4vw, 32px)',
              color: '#111827',
            }}>
              Results You Can Expect
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 25vw, 250px), 1fr))',
              gap: 'clamp(20px, 3vw, 24px)',
            }}>
              {[
                { metric: '50%+', label: 'Increase in online inquiries within 3 months' },
                { metric: 'Higher', label: 'Customer retention through automated follow-ups' },
                { metric: '10-20 hrs', label: 'Time saved per week on administrative tasks' },
                { metric: '50%+', label: 'Reduction in no-show rates' },
              ].map((result, idx) => (
                <div key={idx} style={{
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px',
                  }}>
                    {result.metric}
                  </div>
                  <div style={{
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    color: '#4B5563',
                    lineHeight: 1.5,
                  }}>
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: 'clamp(64px, 10vw, 128px) clamp(16px, 4vw, 32px)',
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(16px, 3vw, 24px)',
            color: '#111827',
          }}>
            Get Started Today
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: '#4B5563',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 6vw, 48px)',
          }}>
            Ready to transform your business through automation? Contact us today for your free consultation and see how our $5,900 + $1k/month program can take your business to the next level.
          </p>
          <div style={{
            display: 'flex',
            gap: 'clamp(12px, 2vw, 16px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)',
                borderRadius: '12px',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
                color: '#fff',
                backgroundColor: '#111827',
                textDecoration: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1F2937';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Schedule Free Consultation
            </a>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)',
                borderRadius: '12px',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
                color: '#111827',
                backgroundColor: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F9FAFB';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

