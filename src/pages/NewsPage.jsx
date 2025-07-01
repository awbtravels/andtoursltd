// src/pages/NewsPage.jsx

import React, { useEffect, useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news.json');
        const data = await response.json();
        setNews(data);
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setLastUpdated(timeString);
      } catch (err) {
        console.error('❌ Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleImageError = (e) => {
    e.target.src = '/fallback.jpg'; // optional fallback image in public/
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h2>Latest Travel & Scholarship News</h2>
        <p className="slogan">....fulfilling your dream life</p>
        <p className="last-updated">🕒 Last updated: <strong>{lastUpdated}</strong></p>
        <p className="powered">⚡ Powered by <span className="bot-name">AWB News Bot</span></p>
      </div>

      {loading ? (
        <div className="loader">Loading News...</div>
      ) : (
        <div className="news-grid">
          {news.map((item, index) => (
            <div className="news-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="news-image"
                onError={handleImageError}
              />
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <a href={`/news/${item.slug}`} className="read-more">Read More</a>

              {index > 0 && index % 2 === 0 && (
                <div className="adsense-container">
                  <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-9632060214761190"
                    data-ad-slot="1234567890"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                  ></ins>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Fixed WhatsApp Channel button */}
      <a
        href="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Join our WhatsApp Channel"
      >
        📢 Join Our WhatsApp Channel
      </a>
    </div>
  );
};

export default NewsPage;
