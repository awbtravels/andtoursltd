import React, { useEffect, useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error('Failed to load news:', err));
  }, []);

  return (
    <div className="news-container">
      <div className="news-header">
        <img src="/logo.png" alt="AWB Logo" width="120" />
        <h2 style={{ color: '#b30000' }}>Latest Travel News</h2>
        <p className="slogan">....fulfilling your dream life</p>
      </div>

      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image} alt={article.title} className="news-image" />
            <h3 className="news-title">{article.title}</h3>
            <p className="news-excerpt">{article.excerpt}</p>
            <a
              href={`/news/${article.slug}`}
              className="read-more"
            >
              Read Full Article
            </a>

            {/* Share Buttons */}
            <div style={{ textAlign: 'center', padding: '10px' }}>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + '\n\nRead more: https://awbtravelsandtours.com/news/' + article.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 WhatsApp
              </a>{' '}
              |{' '}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://awbtravelsandtours.com/news/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                👍 Facebook
              </a>{' '}
              |{' '}
              <a
                href={`https://twitter.com/intent/tweet?url=https://awbtravelsandtours.com/news/${article.slug}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                🐦 Twitter
              </a>{' '}
              |{' '}
              <a
                href={`https://www.linkedin.com/shareArticle?url=https://awbtravelsandtours.com/news/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>{' '}
              |{' '}
              <a
                href={`https://www.instagram.com/awbtravelsandtours/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 Instagram
              </a>
            </div>

            {/* AdSense Block Between News */}
            {(index + 1) % 3 === 0 && (
              <div className="adsense-container">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9632060214761190" crossOrigin="anonymous"></script>
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-9632060214761190"
                  data-ad-slot="1234567890"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* WhatsApp Channel Floating Icon */}
      <a
        href="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
        }}
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp Channel" width="60" />
      </a>
    </div>
  );
};

export default NewsPage;
