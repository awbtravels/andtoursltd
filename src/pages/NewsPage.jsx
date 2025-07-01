// src/pages/NewsPage.jsx
import React, { useEffect, useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load news:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>📰 Latest Travel & Scholarship News</h1>
        <p className="news-updated">
          🕒 Last updated: {new Date().toLocaleTimeString()}
        </p>
        <p className="powered-by">⚡ Powered by AWB News Bot</p>
      </div>

      {loading ? (
        <div className="spinner">Loading news...</div>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div className="news-card" key={index}>
              <img
                src={article.image}
                alt={article.title}
                className="news-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/fallback-news.jpg'; // Add this fallback image in /public
                }}
              />
              <h3 className="news-title">{article.title}</h3>
              <p className="news-excerpt">{article.excerpt}</p>
              <a href={`/news/${article.slug}`} className="read-more">
                Read Full Article
              </a>

              {/* Share Buttons */}
              <div style={{ textAlign: 'center', padding: '10px' }}>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    article.title +
                      '\nRead more: https://awbtravelsandtours.com/news/' +
                      article.slug
                  )}`}
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    article.title
                  )}&url=https://awbtravelsandtours.com/news/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦 Twitter
                </a>{' '}
                |{' '}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://awbtravelsandtours.com/news/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 LinkedIn
                </a>{' '}
                |{' '}
                <a
                  href={`https://www.instagram.com/awbtravelsandtours`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
